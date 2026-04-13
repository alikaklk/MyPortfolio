import { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';

export default function VisitorMap() {
  const [visitors, setVisitors] = useState<any[]>([]);
  const globeEl = useRef<any>(null);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Ekran boyutu değişimini takip et (Mobil uyum için)
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const getArchive = async () => {
      try {
        // .NET API portunu kendi projenle güncelle (Örn: 7123 veya 5000)
        const res = await fetch('http://localhost:5287/api/visitors');
        const data = await res.json();
        setVisitors(data);
      } catch (e) {
        console.log("Veriler .NET API üzerinden çekilemedi.");
      }
    };

    getArchive();
    const interval = setInterval(getArchive, 15000); // 15 saniyede bir yeni veri kontrolü
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: '#000', height: '100dvh', width: '100vw', position: 'relative', overflow: 'hidden', zIndex: 1 }}>
      <Globe
        ref={globeEl}
        width={size.width}
        height={size.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        
        // Siber Nokta Ayarları
        pointsData={visitors}
        pointColor={(d: any) => d.color}
        pointAltitude={0.02}
        pointRadius={0.3}
        
        // Siber Halka (Ripple) Ayarları
        ringsData={visitors}
        ringColor={(d: any) => d.color}
        ringMaxRadius={10}
        ringPropagationSpeed={2.5}
        ringRepeatPeriod={1000}
        
        showAtmosphere={true}
        atmosphereColor="#00ff88"
      />
      
      {/* Sol Alt Bilgi Kutusu */}
      <div style={styles.badge}>
        <div style={styles.dot}></div>
        <span>TOPLAM LOKASYON: {visitors.length}</span>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  badge: {
    position: 'absolute', 
    bottom: '120px', 
    left: '20px',
    backgroundColor: 'rgba(0,0,0,0.85)', 
    padding: '10px 18px',
    borderRadius: '12px', 
    border: '1px solid #00ff88',
    color: '#00ff88', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px',
    zIndex: 10, 
    fontSize: '13px', 
    fontWeight: 'bold', 
    fontFamily: 'monospace'
  },
  dot: { 
    width: '10px', 
    height: '10px', 
    backgroundColor: '#00ff88', 
    borderRadius: '50%', 
    boxShadow: '0 0 10px #00ff88' 
  }
};