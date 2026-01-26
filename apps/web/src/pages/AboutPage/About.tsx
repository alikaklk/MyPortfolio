import styles from "../AboutPage/About.module.css";
import myPhoto from "../../../../images/myPhoto.png";

export default function About() {
  return (
    <div className={styles.AboutContainer}>
      <section className={styles.TextSection}>
        <h2 className={styles.Title}>The Engineer Behind the Code</h2>
        
        <p className={styles.Bio}>
          I am a Software Engineering student at <strong>Eastern Mediterranean University</strong>, 
          dedicated to building robust applications and exploring the depths of full-stack development. 
          My journey is driven by a constant curiosity for how complex systems work and a passion for 
          turning ideas into functional code.
        </p>

        <div className={styles.HighlightGrid}>
          <div className={styles.HighlightItem}>
            <h3>Education</h3>
            <p>Pursuing Software Engineering at EMU, mastering algorithms and architecture.</p>
          </div>
          
          <div className={styles.HighlightItem}>
            <h3>Philosophy</h3>
            <p>Focusing on writing clean, maintainable code and solving real-world problems.</p>
          </div>
        </div>

        <p className={styles.CallToAction}>
          I'm always open to collaboration on innovative projects. 
          <strong> Let's build something great together.</strong>
        </p>
      </section>

      <div className={styles.ImageWrapper}>
        <img src={myPhoto} alt="Ali Kaklik" className={styles.AboutImage} />
        <div className={styles.ImageBackdrop}></div>
      </div>
    </div>
  );
}