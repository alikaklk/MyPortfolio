import styles from  "./Projects.module.css";


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
                    <img src="../../../public/image.png" alt="" />
                    <p>
                        Go ve Next.js kullanılarak geliştirilmiş, yüksek performanslı bir siber güvenlik aracı. 
                        Milyonlarca satırlık veri sızıntısını saniyeler içinde tarayarak dijital güvenliğinizi kontrol eder.
                    </p>
                    <div className={styles.TechTags}>
                        <span>Go</span>
                        <span>Next.js</span>
                        <span>TypeScript</span>
                    </div>
                    <button className={styles.ProjectViewButton}>
                        <a href="https://github.com/alikaklk/safeguard-leak-checker" className={styles.ProjectLink}>
                        Wiew on GitHub
                        </a>
                    </button>
                    </div>
                <div className={styles.ProjectCard}>
                    <h2>Project 3</h2>
                    <p>Coming Soon...</p>
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="#">View Project</a></button>
                </div>
                <div className={styles.ProjectCard}>
                    <h2>Project 4</h2>
                    <p>Coming Soon...</p>
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="#">View Project</a></button>
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