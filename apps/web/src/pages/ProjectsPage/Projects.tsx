import styles from  "./Projects.module.css";
import picosmarthomealarm from "../../../../images/pico-smart-home.png"
import picosmartwateringsystem from "../../../../images/pico-smart-watering.png"


export default function Projects() {
    return (
        <div className={styles.ProjectsPageContainer}>
            <h1>My Projects!</h1>
            <div className={styles.ProjectsCardsContainer}>
                <div className={styles.ProjectCard}>
                    <h2>Guardian: macOS Native IDS/IPS</h2>
                    <p>Tech Stack:Python, Shell, macOS PF (Packet Filter)</p>
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="https://github.com/alikaklk/Guardian-IP-Blocker" target="_blank" rel="noopener noreferrer">View on GitHub</a></button>
                </div>
                <div className={styles.ProjectCard}>
                    <h2>SafeGuard Leak Checker</h2>
                    
                    <p>
                        Go ve Next.js kullanılarak geliştirilmiş, yüksek performanslı bir siber güvenlik aracı. 
                        Milyonlarca satırlık veri sızıntısını saniyeler içinde tarayarak dijital güvenliğinizi kontrol eder.
                    </p>
                    <div className={styles.TechTags}>
                        <span>Go</span>
                        <span>Next.js</span>
                        <span>TypeScript</span>
                    </div>
                    
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="https://github.com/alikaklk/safeguard-leak-checker" target="_blank" rel="noopener noreferrer">View on GitHub</a></button>
                    
                    </div>
                <div className={styles.ProjectCard}>
                    <h2>Pico Smart Home Alarm</h2>
                    <p>This project is an IoT / Embedded System application that continuously monitors ambient temperature and harmful gas levels. When critical threshold values are exceeded, it generates immediate visual (LED) and audible (Siren/Buzzer) alarms to ensure safety.</p>
                    <img src={picosmarthomealarm} alt="Pico Smart Home Alarm" />
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="https://github.com/alikaklk/pico-smart-home-alarm" target="_blank" rel="noopener noreferrer">View on GitHub</a></button>
                </div>
                <div className={styles.ProjectCard}>
                    <h2>Pico Smart Watering System</h2>
                    <p>This project is an automated MicroPython-based irrigation application designed to control water flow dynamically. It utilizes a DS18B20 temperature sensor to track environmental or soil conditions and a servo motor that acts as a mechanical valve—physically squeezing a hose to shut off the water and releasing it to irrigate when needed.</p>
                    <img src={picosmartwateringsystem} alt="Pico Smart Watering System" />
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="https://github.com/alikaklk/pico-smart-watering" target="_blank" rel="noopener noreferrer">View on GitHub</a></button>
                </div>
                <div className={styles.ProjectCard}>
                    <h2>Project 5</h2>
                    <p>Coming Soon...</p>
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="#">View Project</a></button>
                </div>
            </div>
        </div>
    );
}