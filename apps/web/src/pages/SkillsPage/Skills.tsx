import styles from '../SkillsPage/Skills.module.css';
import {
  JavaScript,
  TypeScript, 
  ReactLight, 
  TailwindCssLight, 
  DotNet, 
  PostgreSqlLight, 
  PythonLight, 
  Git, 
  GithubLight,
  Html,
  Css,
  AngularLight,
  GoLang,
  SupabaseDark,
  Swift,
} from "@skill-icons/react";

export default function Skills() {
    return (
        <div className={styles.SkillsContainer}>
            <h2>My Skills And Tools</h2>
            <div className={styles.SkillsIconsContainer}>
                <div className={styles.lowLevelSkillsContainer}>
                    <h3>Low-Level Skills</h3>
                    <div className={styles.lowLevelSkills}>
                        <div className={styles.IconsAndNameContainer}><Html className={styles.SkillsIcons}/><h3>Html</h3></div>
                        <div className={styles.IconsAndNameContainer}><Css className={styles.SkillsIcons}/><h3>Css</h3></div>
                        <div className={styles.IconsAndNameContainer}><JavaScript className={styles.SkillsIcons}/><h3>JavaScript</h3></div>
                        <div className={styles.IconsAndNameContainer}><TypeScript className={styles.SkillsIcons}/><h3>TypeScript</h3></div>
                        <div className={styles.IconsAndNameContainer}><Swift className={styles.SkillsIcons}/><h3>Swift</h3></div>
                        <div className={styles.IconsAndNameContainer}><TailwindCssLight className={styles.SkillsIcons}/><h3>TailwindCSS</h3></div>
                        <div className={styles.IconsAndNameContainer}><GoLang className={styles.SkillsIcons}/><h3>GoLang</h3></div>
                        <div className={styles.IconsAndNameContainer}><DotNet className={styles.SkillsIcons}/><h3>.NET</h3></div>

                    </div>
                </div>
                <div className={styles.middleLevelSkillsContainer}>
                    <h3>Middle-Level Skills</h3>
                    <div className={styles.middleLevelSkills}>
                        <div className={styles.IconsAndNameContainer}><AngularLight className={styles.SkillsIcons}/><h3>Angular</h3></div>
                        <div className={styles.IconsAndNameContainer}><ReactLight className={styles.SkillsIcons}/><h3>React</h3></div>
                        <div className={styles.IconsAndNameContainer}><PostgreSqlLight className={styles.SkillsIcons}/><h3>PostgreSQL</h3></div>
                        <div className={styles.IconsAndNameContainer}><PythonLight className={styles.SkillsIcons}/><h3>Python</h3></div>

                    </div>
                        
                </div>
                <div className={styles.highLevelSkillsContainer}>
                    <h3>High-Level Skills</h3>
                    <div className={styles.highLevelSkills}>
                        <div className={styles.IconsAndNameContainer}><Git className={styles.SkillsIcons}/><h3>Git</h3></div>
                        <div className={styles.IconsAndNameContainer}><GithubLight className={styles.SkillsIcons}/><h3>GitHub</h3></div>
                        <div className={styles.IconsAndNameContainer}><SupabaseDark className={styles.SkillsIcons}/><h3>Supabase</h3></div>
                
                    </div>
                </div>
     
            </div>
        </div>
    );
}