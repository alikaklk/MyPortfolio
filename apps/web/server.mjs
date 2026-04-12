import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let visitors = [];

app.post('/api/visit', (req, res) => {
    const { lat, lon, city } = req.body;

    if (lat && lon) {
        const latF = parseFloat(lat).toFixed(1);
        const lonF = parseFloat(lon).toFixed(1);

        const isAlreadyExists = visitors.find(v => 
            v.lat.toFixed(1) === latF && v.lng.toFixed(1) === lonF
        );

        if (!isAlreadyExists) {
            const colors = ['#00ff88', '#ff0055', '#00e5ff', '#ff9100'];
            visitors.push({
                id: `v-${Date.now()}`,
                lat: parseFloat(lat),
                lng: parseFloat(lon),
                city: city || 'Unknown',
                color: colors[Math.floor(Math.random() * colors.length)]
            });
            console.log(`✨ Yeni Lokasyon: ${city}`);
        }
        return res.status(200).json({ success: true });
    }
    res.status(400).send("Hata");
});

app.get('/api/visitors', (req, res) => {
    res.json(visitors);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Sunucu: http://localhost:${PORT}`));