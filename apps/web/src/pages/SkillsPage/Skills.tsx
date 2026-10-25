import styles from './Skills.module.css';
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
  SupabaseDark,
} from "@skill-icons/react";

interface SkillItem {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const frontendSkills: SkillItem[] = [
  { id: 1, name: "HTML & CSS", icon: <><Html /><Css /></> },
  { id: 2, name: "JavaScript", icon: <JavaScript /> },
  { id: 3, name: "TypeScript", icon: <TypeScript /> },
  { id: 4, name: "React", icon: <ReactLight /> },
  { id: 5, name: "Angular", icon: <AngularLight /> },
  { id: 6, name: "Tailwind", icon: <TailwindCssLight /> },
];

const backendSkills: SkillItem[] = [
  { id: 7, name: "Python", icon: <PythonLight /> },
  { id: 8, name: ".NET", icon: <DotNet /> },
];

const databaseSkills: SkillItem[] = [
  { id: 9, name: "PostgreSQL & Supabase", icon: <><PostgreSqlLight /><SupabaseDark /></> },
  { id: 10, name: "Git & GitHub", icon: <><Git /><GithubLight /></> },
];

export default function Skills() {
  return (
    <div className={styles.SkillsContainer}>
      <div className={styles.SolarOrbitContainer}>
        
        {/* Arkada Yanıp Sönen Yıldızlar */}
        <div className={styles.StarsBackground}>
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`${styles.Star} ${styles[`star-${i + 1}`]}`} />
          ))}
        </div>

        {/* Merkezdeki Güneş */}
        <div className={styles.Sun}>
          <span>SKILLS</span>
        </div>

        {/* 1. Halka: Frontend */}
        <div className={`${styles.OrbitRing} ${styles.OrbitFrontend}`}>
          {frontendSkills.map((skill, index) => {
            const angle = (index / frontendSkills.length) * 360;
            return (
              <div
                key={skill.id}
                className={styles.PlanetWrapper}
                style={{
                  transform: `rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`,
                }}
              >
                <div className={styles.PlanetCard} title={skill.name}>
                  <div className={styles.PlanetIcon}>{skill.icon}</div>
                  <span className={styles.PlanetName}>{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Halka: Backend */}
        <div className={`${styles.OrbitRing} ${styles.OrbitBackend}`}>
          {backendSkills.map((skill, index) => {
            const angle = (index / backendSkills.length) * 360;
            return (
              <div
                key={skill.id}
                className={styles.PlanetWrapper}
                style={{
                  transform: `rotate(${angle}deg) translate(210px) rotate(-${angle}deg)`,
                }}
              >
                <div className={styles.PlanetCard} title={skill.name}>
                  <div className={styles.PlanetIcon}>{skill.icon}</div>
                  <span className={styles.PlanetName}>{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Halka: Database & Tools */}
        <div className={`${styles.OrbitRing} ${styles.OrbitDatabase}`}>
          {databaseSkills.map((skill, index) => {
            const angle = (index / databaseSkills.length) * 360;
            return (
              <div
                key={skill.id}
                className={styles.PlanetWrapper}
                style={{
                  transform: `rotate(${angle}deg) translate(290px) rotate(-${angle}deg)`,
                }}
              >
                <div className={styles.PlanetCard} title={skill.name}>
                  <div className={styles.PlanetIcon}>{skill.icon}</div>
                  <span className={styles.PlanetName}>{skill.name}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}