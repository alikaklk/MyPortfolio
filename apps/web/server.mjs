import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let visitors = [];

app.post('/api/visit', (req, res) => {
    const { lat, lon, city } = req.body;

    if (lat && lon) {
        // Koordinatları karşılaştırmak için sabitle
        const latFixed = parseFloat(lat).toFixed(2);
        const lonFixed = parseFloat(lon).toFixed(2);

        // Bu lokasyon zaten var mı kontrol et
        const isAlreadyExists = visitors.find(v => 
            v.lat.toFixed(2) === latFixed && v.lng.toFixed(2) === lonFixed
        );

        // EĞER YOKSA: Listeye ekle ve SADECE BURADA log bas
        if (!isAlreadyExists) {
            const colors = ['#00ff88', '#ff0055', '#00e5ff', '#ff9100'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            const newVisitor = {
                id: `v-${Date.now()}`,
                lat: parseFloat(lat),
                lng: parseFloat(lon),
                city: city || 'Unknown',
                color: randomColor
            };

            visitors.push(newVisitor);
            
            // Terminalde sadece yeni yerler görünecek
            console.log(`✨ Arşive Yeni Lokasyon Eklendi: ${city}`);
        }

        // Lokasyon varsa veya yoksa, frontend'e her zaman "tamam" döndür (Hata vermemesi için)
        return res.status(200).json({ success: true });
    }
    res.status(400).send("Geçersiz veri");
});

app.get('/api/visitors', (req, res) => {
    res.json(visitors);
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`\n🚀 Siber Arşiv Sunucusu Aktif: http://localhost:${PORT}`);
    console.log(`📺 Yeni lokasyonlar keşfedildikçe burada görünecek...\n`);
});