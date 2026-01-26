import styles from '../SkillsPage/Skills.module.css';
import { 
  JavaScript,
  TypeScript, 
  ReactLight, 
  TailwindCssLight, 
  NodeJsLight, 
  PostgreSqlLight, 
  PythonLight, 
  GithubLight, 
  NextJsLight // Eğer Next.js'e geçiyorsan bunu mutlaka ekle!
} from "@skill-icons/react";

export default function Skills() {
    return (
        <div className={styles.SkillsContainer}>
            <h2>Tech Stack</h2>
            <div className={styles.SkillsIconsContainer}>
                {/* Core Development */}
                <div className={styles.IconsAndNameContainer}><JavaScript className={styles.SkillsIcons}/><h3>JavaScript</h3></div>
                <div className={styles.IconsAndNameContainer}><TypeScript className={styles.SkillsIcons}/><h3>TypeScript</h3></div>
                <div className={styles.IconsAndNameContainer}><ReactLight className={styles.SkillsIcons}/><h3>React</h3></div>
                <div className={styles.IconsAndNameContainer}><TailwindCssLight className={styles.SkillsIcons}/><h3>Tailwind</h3></div>
                
                {/* Backend & Database */}
                <div className={styles.IconsAndNameContainer}><NodeJsLight className={styles.SkillsIcons}/><h3>Node.js</h3></div>
                <div className={styles.IconsAndNameContainer}><PostgreSqlLight className={styles.SkillsIcons}/><h3>PostgreSQL</h3></div>
                <div className={styles.IconsAndNameContainer}><PythonLight className={styles.SkillsIcons}/><h3>Python</h3></div>
                
                {/* Tools */}
                <div className={styles.IconsAndNameContainer}><GithubLight className={styles.SkillsIcons}/><h3>GitHub</h3></div>
            </div>
        </div>
    );
}