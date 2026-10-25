import styles from "./Projects.module.css";
import picosmarthomealarm from "../../../../images/pico-smart-home.png";
import picosmartwateringsystem from "../../../../images/pico-smart-watering.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string;
  image?: string;
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Guardian-IP-Blocker",
    description: "macOS native IP blocking automation using Python and pfctl.",
    tech: "Python",
    link: "https://github.com/alikaklk/Guardian-IP-Blocker",
  },
  {
    id: 2,
    title: "safeguard-leak-checker",
    description: "Yüksek performanslı veri sızıntısı ve güvenlik tarama aracı.",
    tech: "TypeScript",
    link: "https://github.com/alikaklk/safeguard-leak-checker",
  },
  {
    id: 3,
    title: "pico-smart-home-alarm",
    description: "Pico tabanlı akıllı ev alarm ve güvenlik otomasyon sistemi.",
    tech: "Python / IoT",
    image: picosmarthomealarm,
    link: "https://github.com/alikaklk/pico-smart-home-alarm",
  },
  {
    id: 4,
    title: "pico-smart-watering",
    description: "Otomatik MicroPython tabanlı akıllı sulama ve nem kontrol sistemi.",
    tech: "Python / Sensors",
    image: picosmartwateringsystem,
    link: "https://github.com/alikaklk/pico-smart-watering",
  },
  {
    id: 5,
    title: "cyber-tool-ui",
    description: "Siber güvenlik araçları için modern arayüz ve kontrol paneli.",
    tech: "TypeScript",
    link: "https://github.com/alikaklk/cyber-tool-ui",
  },
  {
    id: 6,
    title: "ImageOptimizeService",
    description: "Görsel optimizasyon ve işleme servis uygulaması.",
    tech: "TypeScript",
    link: "https://github.com/alikaklk/ImageOptimizeService",
  },
  {
    id: 7,
    title: "SimpleAiTranslateService",
    description: "Yapay zeka destekli hızlı çeviri servis uygulaması.",
    tech: "TypeScript",
    link: "https://github.com/alikaklk/SimpleAiTranslateService",
  },
  {
    id: 8,
    title: "DailyTarotTr",
    description: "Swift ile geliştirilmiş mobil/web tarot falı uygulaması.",
    tech: "Swift",
    link: "https://github.com/alikaklk/DailyTarotTr",
  },
  {
    id: 9,
    title: "fine-arts-club",
    description: "Güzel sanatlar kulübü için tasarlanmış web arayüzü.",
    tech: "CSS",
    link: "https://github.com/alikaklk/fine-arts-club",
  },
];

export default function Projects() {
  return (
    <div className={styles.ProjectsPageContainer}>
      {/* Yıldızlı Arka Plan */}
      <div className={styles.StarsBackground}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`${styles.Star} ${styles[`star-${i + 1}`]}`} />
        ))}
      </div>

      <div className={styles.ContentWrapper}>
        {/* Merkezdeki Başlık */}
        <div className={styles.CentralTitleBox}>
          <h2 className={styles.ProjectsTitle}>My Projects!</h2>
        </div>

        {/* Düzenli Proje Kartları Grid Yapısı */}
        <div className={styles.ProjectsGrid}>
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ProjectCard}
            >
              <div className={styles.CardGlow}></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              {project.image && (
                <div className={styles.ImageContainer}>
                  <img src={project.image} alt={project.title} className={styles.ProjectImage} />
                </div>
              )}

              <div className={styles.TechTags}>
                <span>{project.tech}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}