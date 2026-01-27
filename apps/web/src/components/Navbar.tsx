import { Link, useLocation } from "react-router-dom";
import { Home, User, Code2, LayoutGrid, Mail } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className={styles.Header}>
      {/* 1. SENİN ESKİ NAVBARIN (Dokunulmadı) */}
      <nav className={styles.DesktopNav}>
        <ul className={styles.NavUl}>
          <li><Link to="/" className={styles.NavLink}>Home</Link></li>
          <li><Link to="/about" className={styles.NavLink}>About</Link></li>
          <li><Link to="/skills" className={styles.NavLink}>Skills</Link></li>
          <li><Link to="/projects" className={styles.NavLink}>Projects</Link></li>
          <li><Link to="/contact" className={styles.NavLink}>Contact</Link></li>
        </ul>
      </nav>

      {/* 2. MOBİL NAVBAR (Sadece mobil için eklendi) */}
      <nav className={styles.MobileNav}>
        <div className={styles.MobileWrapper}>
          {[
            { id: 'home', icon: Home, label: 'Home', path: '/' },
            { id: 'about', icon: User, label: 'About', path: '/about' },
            { id: 'skills', icon: Code2, label: 'Skills', path: '/skills' },
            { id: 'projects', icon: LayoutGrid, label: 'Projects', path: '/projects' },
            { id: 'contact', icon: Mail, label: 'Contact', path: '/contact' }
          ].map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.id} to={item.path} className={styles.MobileLink}>
                {isActive && (
                  <motion.div
                    layoutId="pill"
                    className={styles.ActivePill}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className={styles.IconContent}>
                  <Icon size={20} color={isActive ? "#fff" : "#808080"} />
                  {isActive && <span className={styles.MobileLabel}>{item.label}</span>}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}