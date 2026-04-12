import { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';

export default function VisitorMap() {
  const [visitors, setVisitors] = useState<any[]>([]);
  const globeEl = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    // Ekran boyutunu ayarla
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    // Verileri çek
    const fetchData = async () => {
      try {
        const geo = await fetch('https://ipapi.co/json/').then(r => r.json());
        // Önce backend'e gönder
        await fetch('http://localhost:5001/api/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat: geo.latitude, lon: geo.longitude, city: geo.city })
        }).catch(() => console.log("Local backend bağlı değil"));

        // Sonra listeyi al
        const res = await fetch('http://localhost:5001/api/visitors').then(r => r.json());
        setVisitors(res);
      } catch (e) {
        // Test için boş da olsa bir nokta ekle (Dünya boş kalmasın)
        setVisitors([{ lat: 41, lng: 29, city: 'Istanbul' }]);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ background: '#000', height: '100dvh', width: '100vw', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={visitors}
        pointColor={() => '#00ff88'}
        pointRadius={0.5}
        ringsData={visitors}
        ringColor={() => '#00ff88'}
        ringMaxRadius={10}
        showAtmosphere={true}
        atmosphereColor="#00ff88"
      />
      
      <div style={styles.badge}>
        <div style={styles.dot}></div>
        <span>LIVE: {visitors.length}</span>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  badge: {
    position: 'absolute', bottom: '120px', left: '20px',
    backgroundColor: 'rgba(0,0,0,0.8)', padding: '8px 15px',
    borderRadius: '10px', border: '1px solid #00ff88',
    color: '#00ff88', display: 'flex', alignItems: 'center', gap: '8px',
    zIndex: 10, fontSize: '12px', fontWeight: 'bold'
  },
  dot: { width: '8px', height: '8px', backgroundColor: '#00ff88', borderRadius: '50%', boxShadow: '0 0 10px #00ff88' }
};