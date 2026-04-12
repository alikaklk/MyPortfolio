import { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';

export default function VisitorMap() {
  const [visitors, setVisitors] = useState<any[]>([]);
  const globeEl = useRef<any>(null);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);

    const getArchive = async () => {
      try {
        const res = await fetch('http://localhost:5001/api/visitors');
        const data = await res.json();
        setVisitors(data);
      } catch (e) {}
    };

    getArchive();
    const interval = setInterval(getArchive, 15000);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ background: '#000', height: '100dvh', width: '100vw', position: 'relative', overflow: 'hidden' }}>
      <Globe
        ref={globeEl}
        width={size.width}
        height={size.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={visitors}
        pointColor={(d: any) => d.color}
        pointAltitude={0.02}
        pointRadius={0.3}
        ringsData={visitors}
        ringColor={(d: any) => d.color}
        ringMaxRadius={10}
        ringPropagationSpeed={2.5}
        ringRepeatPeriod={1000}
        showAtmosphere={true}
        atmosphereColor="#00ff88"
      />
      <div style={{ position: 'absolute', bottom: '120px', left: '20px', color: '#00ff88', fontFamily: 'monospace', fontWeight: 'bold' }}>
        LOKASYONLAR: {visitors.length}
      </div>
    </div>
  );
}