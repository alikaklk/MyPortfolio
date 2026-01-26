import styles from "../AboutPage/About.module.css";
import myPhoto from "../../../../images/myPhoto.png";

export default function About(){
    return(
      
        <div className={styles.AboutContainer}>
            <section>
                <h2>About Me</h2>
                <p>I am a dedicated Software Engineering student driven by the challenge of building scalable applications and solving complex digital problems.</p>
                <ul>
                    <li className={styles.p}><strong>Education:</strong> Pursuing a degree in Software Engineering at <strong>Eastern Mediterranean University</strong>, where I focus on software architecture, algorithmic efficiency, and modern development methodologies.</li>
                    <li className={styles.p}><strong>Focus:</strong> Actively developing full-stack solutions with a strong emphasis on creating responsive, user-centric interfaces and robust backend systems.</li>
                    <li className={styles.p}><strong>Core Tech:</strong> Specialized in JavaScript/TypeScript ecosystems including React and Node.js, alongside a solid foundation in Python for automation and data processing.</li>
                </ul>
                <p>I’m always looking for opportunities to collaborate on innovative projects. If you'd like to build something impactful together, let’s connect!</p>
            </section>
            <img src={myPhoto} className={styles.AboutImage} alt="Ali Kaklik" />
        </div>
        
    );
}