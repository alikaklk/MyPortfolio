import styles from  "./Projects.module.css";


export default function Projects() {
    return (
        <div className={styles.ProjectsPageContainer}>
            <h1>My Projects!</h1>
            <div className={styles.ProjectsCardsContainer}>
                <div className={styles.ProjectCard}>
                    <h2>Project 1</h2>
                    <p>Coming Soon...</p>
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="#">View Project</a></button>
                </div>
                <div className={styles.ProjectCard}>
                    <h2>Project 2</h2>
                    <p>Coming Soon...</p>
                    <button className={styles.ProjectViewButton}><a className={styles.ProjectViewLink} href="#">View Project</a></button>
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