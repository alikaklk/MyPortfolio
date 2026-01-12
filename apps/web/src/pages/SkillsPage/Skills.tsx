import styles from '../SkillsPage/Skills.module.css';
import { 
  AppleLight,
  Html, 
  Css, 
  ReactLight, 
  TailwindCssLight, 
  NodeJsLight, 
  PostgreSqlLight, 
  PythonLight, 
  Git, 
  GithubLight, 
  VsCodeLight, 
  NpmLight
} from "@skill-icons/react";

export default function Skills() {
    return (
        <div className={styles.SkillsContainer}>
            <h2>My Skills And Tools</h2>
            <div className={styles.SkillsIconsContainer}>
                <div className={styles.IconsAndNameContainer}><AppleLight className={styles.SkillsIcons}/><h3>Apple</h3></div>
                <div className={styles.IconsAndNameContainer}><Html className={styles.SkillsIcons}/><h3>HTML</h3></div>
                <div className={styles.IconsAndNameContainer}><Css className={styles.SkillsIcons}/><h3>CSS</h3></div>
                <div className={styles.IconsAndNameContainer}><ReactLight className={styles.SkillsIcons}/><h3>React</h3></div>
                <div className={styles.IconsAndNameContainer}><TailwindCssLight className={styles.SkillsIcons}/><h3>TailwindCSS</h3></div>
                <div className={styles.IconsAndNameContainer}><NodeJsLight className={styles.SkillsIcons}/><h3>NodeJs</h3></div>
                <div className={styles.IconsAndNameContainer}><PostgreSqlLight className={styles.SkillsIcons}/><h3>PostgreSQL</h3></div>
                <div className={styles.IconsAndNameContainer}><PythonLight className={styles.SkillsIcons}/><h3>Python</h3></div>
                <div className={styles.IconsAndNameContainer}><Git className={styles.SkillsIcons}/><h3>Git</h3></div>
                <div className={styles.IconsAndNameContainer}><GithubLight className={styles.SkillsIcons}/><h3>GitHub</h3></div>
                <div className={styles.IconsAndNameContainer}><VsCodeLight className={styles.SkillsIcons}/><h3>VSCode</h3></div>
                <div className={styles.IconsAndNameContainer}><NpmLight className={styles.SkillsIcons}/><h3>Npm</h3></div>
            </div>
        </div>
    );
}