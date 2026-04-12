import { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';

export default function VisitorMap() {
  const [visitors, setVisitors] = useState<any[]>([]);
  const globeEl = useRef<any>();
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  // Mobil ekran boyutu değiştiğinde haritayı yeniden boyutlandır
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // 1. Ziyaretçiyi Kaydet
    const register = async () => {
      try {
        const geoRes = await fetch('https://ipapi.co/json/');
        const geoData = await geoRes.json();
        
        await fetch('http://localhost:5001/api/visit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            lat: geoData.latitude, 
            lon: geoData.longitude, 
            city: geoData.city 
          })
        });
      } catch (e) { console.log("Backend offline"); }
    };

    // 2. Verileri Çek
    const refresh = () => {
      fetch('http://localhost:5001/api/visitors')
        .then(res => res.json())
        .then(setVisitors)
        .catch(() => {});
    };

    register().then(refresh);
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      background: '#000', 
      height: '100dvh', // Mobil tarayıcı barları için dynamic vh
      width: '100vw', 
      position: 'relative', 
      overflow: 'hidden', 
      zIndex: 1 
    }}>
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
      
      {/* Harita Üstü Gösterge - Mobilde Navbar'ın üstünde kalması için bottom yükseltildi */}
      <div style={styles.badge}>
        <div style={styles.dot}></div>
        <span>TRAFİK: {visitors.length}</span>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  badge: {
    position: 'absolute', 
    bottom: '100px', // Mobilde Navbar altta (24px) olduğu için çakışmaz
    left: '20px',
    backgroundColor: 'rgba(0,0,0,0.8)', 
    padding: '8px 15px',
    borderRadius: '10px', 
    border: '1px solid #00ff88',
    color: '#00ff88', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px',
    zIndex: 10, 
    fontSize: '12px', 
    fontWeight: 'bold',
    pointerEvents: 'none'
  },
  dot: { 
    width: '8px', 
    height: '8px', 
    backgroundColor: '#00ff88', 
    borderRadius: '50%',
    boxShadow: '0 0 10px #00ff88'
  }
};