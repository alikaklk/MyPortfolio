import styles from "../AboutPage/About.module.css";
import myPhoto from "../../../../images/myPhoto.png";

export default function About(){
    return(
      
        <div className={styles.AboutContainer}>
            <section>
                <h2>About Me:</h2>
                <p>I'm Ali Kaklik, a software engineering student with a passion for learning and developing innovative solutions. </p>
                <ul>
                    <li className={styles.p}><strong>Education:</strong> Currently studying Software Engineering at <strong>Eastern Mediterranean University</strong>, with a focus on computer programming principles and software development methodologies.</li>
                    <li className={styles.p}><strong>Experience:</strong> 3 months of experience in software development, with a focus on front-end development using HTML, CSS, JS, and Angular. </li>
                    <li className={styles.p}><strong>Skills:</strong> proficiency in HTML, CSS, JavaScript, Python, and Angular, with a strong foundation in computer programming principles. </li>
                </ul>
                <p>If you're interested in learning more about my projects or collaborating on a project, feel free to reach out to me!</p>
            </section>
            <img src={myPhoto} className={styles.AboutImage} />
        </div>
        
    );
}