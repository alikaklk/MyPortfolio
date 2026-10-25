import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import myPhoto from "../../../../images/myPhoto.png";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
}

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = myPhoto as string;
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles: Particle[] = [];
      const gap = 4;

      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (y * canvas.width + x) * 4;
          const alpha = pixels[index + 3];
          
          if (alpha > 128) {
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            
            particles.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              originX: x,
              originY: y,
              color: `rgb(${red}, ${green}, ${blue})`,
              size: 2
            });
          }
        }
      }

      let animationFrameId: number;

      function animate() {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let allFinished = true;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          const dx = p.originX - p.x;
          const dy = p.originY - p.y;
          
          p.x += dx * 0.08;
          p.y += dy * 0.08;

          if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
            allFinished = false;
          }

          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }

        if (!allFinished) {
          animationFrameId = requestAnimationFrame(animate);
        }
      }

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    };
  }, []);

  return (
    <div className={styles.AboutContainer}>
      <div className={styles.AboutContent}>
        <h2>About Me</h2>
        <p>I am a dedicated Software Engineering student driven by the challenge of building scalable applications and solving complex digital problems.</p>
        <p><strong>Education:</strong> Pursuing a degree in Software Engineering at <strong>Eastern Mediterranean University</strong>, where I focus on software architecture, algorithmic efficiency, and modern development methodologies.</p>
        <p><strong>Focus:</strong> Actively developing full-stack solutions with a strong emphasis on creating responsive, user-centric interfaces and robust backend systems.</p>
        <p><strong>Core Tech:</strong> Specialized in JavaScript/TypeScript ecosystems including React and Node.js, alongside a solid foundation in Python for automation and data processing.</p>
        <p>I’m always looking for opportunities to collaborate on innovative projects. If you'd like to build something impactful together, let’s connect!</p>
      </div>

      <div className={styles.ImageWrapper}>
        <canvas ref={canvasRef} className={styles.AboutCanvas} />
      </div>
    </div>
  );
}