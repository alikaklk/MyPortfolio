import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let visitors = []; // Hafızada tutulan ziyaretçiler

// Frontend'den gelen ziyaretçi verisini kaydeder
app.post('/api/visit', (req, res) => {
    const { lat, lon, city } = req.body;
    if (lat && lon) {
        // Yeni ziyaretçiyi ekle
        visitors.push({ lat, lng: lon, city, id: Date.now() });
        // Listeyi son 100 kişiyle sınırla
        if (visitors.length > 100) visitors.shift();
        console.log(`Yeni ziyaretçi: ${city} (${lat}, ${lon})`);
        return res.status(200).json({ status: "ok" });
    }
    res.status(400).json({ error: "Eksik veri" });
});

// Haritanın tüm noktaları çektiği rota
app.get('/api/visitors', (req, res) => {
    res.json(visitors);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Siber Harita Backend: http://localhost:${PORT}`));