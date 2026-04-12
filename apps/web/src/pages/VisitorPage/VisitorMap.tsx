import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

export default function VisitorMap() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    // 1. Mevcut ziyaretçiyi bul ve kaydet
    const registerVisit = async () => {
      try {
        const geoRes = await fetch('http://ip-api.com/json/');
        const geoData = await geoRes.json();

        if (geoData.lat && geoData.lon) {
          await fetch('http://localhost:5001/api/visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              lat: geoData.lat, 
              lon: geoData.lon, 
              city: geoData.city 
            })
          });
        }
      } catch (err) {
        console.error("Konum kaydı başarısız:", err);
      }
    };

    // 2. Tüm ziyaretçileri backend'den çek
    const fetchVisitors = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/visitors');
        const data = await res.json();
        setVisitors(data);
      } catch (err) {
        console.error("Ziyaretçiler alınamadı:", err);
      }
    };

    registerVisit();
    fetchVisitors();

    // 5 saniyede bir haritayı tazele
    const timer = setInterval(fetchVisitors, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', height: '100vh', width: '100%' }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        
        // Parlayan noktalar
        pointsData={visitors}
        pointColor={() => '#ff0055'} // Siber kırmızı/pembe
        pointAltitude={0.07}
        pointRadius={0.6}
        
        // Halka (Ripple) efekti
        ringsData={visitors}
        ringColor={() => '#ff0055'}
        ringMaxRadius={8}
        ringPropagationSpeed={2}
        ringRepeatPeriod={800}

        // Atmosfer ve parıltı
        showAtmosphere={true}
        atmosphereColor="#3a228a"
        atmosphereDaylightAlpha={0.1}
      />
      
      <div style={ui.overlay}>
        <div style={ui.dot}></div>
        <span>CANLI TRAFİK: {visitors.length} AKTİF NOKTA</span>
      </div>
    </div>
  );
}

const ui: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'absolute', top: 20, left: 20, color: '#ff0055',
    fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '10px',
    background: 'rgba(0,0,0,0.6)', padding: '10px 20px', borderRadius: '5px',
    border: '1px solid #ff0055', pointerEvents: 'none'
  },
  dot: { width: 10, height: 10, background: '#ff0055', borderRadius: '50%', boxShadow: '0 0 10px #ff0055' }
};