import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let visitors = [];

app.post('/api/visit', (req, res) => {
    const { lat, lon, city } = req.body;

    if (lat && lon) {
        // Koordinat hassasiyetini sabitle (0.1 yaklaşık 11km'lik bir alanı kapsar)
        const latF = parseFloat(lat).toFixed(1);
        const lonF = parseFloat(lon).toFixed(1);

        // Bu lokasyon arşivde var mı?
        const isAlreadyExists = visitors.find(v => 
            v.lat.toFixed(1) === latF && v.lng.toFixed(1) === lonF
        );

        if (!isAlreadyExists) {
            const colors = ['#00ff88', '#ff0055', '#00e5ff', '#ff9100'];
            visitors.push({
                id: `v-${Date.now()}`,
                lat: parseFloat(lat),
                lng: parseFloat(lon),
                city: city || 'Secret Location',
                color: colors[Math.floor(Math.random() * colors.length)]
            });
            
            console.log(`✨ Yeni Keşif: ${city} lokasyonu arşive eklendi.`);
        }
        return res.status(200).json({ success: true });
    }
    res.status(400).send("Geçersiz veri");
});

app.get('/api/visitors', (req, res) => {
    res.json(visitors);
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`\n🌍 Siber Arşiv Sunucusu Aktif: http://localhost:${PORT}`);
    console.log(`🚀 Sadece yeni lokasyonlar burada bildirilecek...\n`);
});