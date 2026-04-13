import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Eğer node sürümün eskiyse: npm install node-fetch

const app = express();
app.use(cors());
app.use(express.json());

let visitors = [];

app.post('/api/visit', async (req, res) => {
    try {
        // Backend üzerinden IP tespiti ve konum alma (Tarayıcı engeline takılmaz)
        const geoRes = await fetch('http://ip-api.com/json/');
        const geoData = await geoRes.json();

        if (geoData.lat && geoData.lon) {
            const latF = geoData.lat.toFixed(1);
            const lonF = geoData.lon.toFixed(1);

            const isAlreadyExists = visitors.find(v => 
                v.lat.toFixed(1) === latF && v.lng.toFixed(1) === lonF
            );

            if (!isAlreadyExists) {
                const colors = ['#00ff88', '#ff0055', '#00e5ff', '#ff9100'];
                visitors.push({
                    id: `v-${Date.now()}`,
                    lat: geoData.lat,
                    lng: geoData.lon,
                    city: geoData.city || 'Unknown',
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
                console.log(`✨ Yeni Lokasyon: ${geoData.city}`);
            }
        }
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

app.get('/api/visitors', (req, res) => {
    res.json(visitors);
});

const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Sunucu Hazır: http://localhost:${PORT}`));