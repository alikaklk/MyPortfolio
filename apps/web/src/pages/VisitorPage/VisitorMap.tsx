import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

export default function VisitorMap() {
  const [visitors, setVisitors] = useState<any[]>([]);

  useEffect(() => {
    // 1. Ziyaretçiyi Kaydet
    const register = async () => {
      try {
        const geo = await fetch('https://ipapi.co/json/').then(r => r.json());
        await fetch('http://localhost:5001/api/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat: geo.latitude, lon: geo.longitude, city: geo.city })
        });
      } catch (e) { console.error("Kayıt hatası"); }
    };

    // 2. Listeyi Çek
    const refresh = () => {
      fetch('http://localhost:5001/api/visitors')
        .then(res => res.json())
        .then(data => setVisitors(data))
        .catch(() => {});
    };

    register().then(refresh);
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', height: '100vh', width: '100%' }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={visitors}
        pointColor={() => '#ff0055'}
        pointRadius={0.5}
        ringsData={visitors}
        ringColor={() => '#ff0055'}
        // TypeScript hatasını önlemek için sayı değerlerini direkt yazıyoruz
        atmosphereColor="#3a228a"
        showAtmosphere={true}
      />
    </div>
  );
}