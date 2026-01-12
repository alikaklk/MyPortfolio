import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.NavUl}>
          <li>
            <Link to="/" className={styles.NavLink}>Home</Link>
          </li>
          <li>
            <Link to="/apps/web/src/pages/About.tsx" className={styles.NavLink}>About</Link>
          </li>
          <li>
            <Link to="/skills" className={styles.NavLink}>Skills</Link>
          </li>
          <li>
            <Link to="/projects" className={styles.NavLink}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" className={styles.NavLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}