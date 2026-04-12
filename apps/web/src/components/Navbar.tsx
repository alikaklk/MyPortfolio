import { Link, useLocation } from "react-router-dom";
import { Home, User, Code2, LayoutGrid, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'about', icon: User, label: 'About', path: '/about' },
    { id: 'skills', icon: Code2, label: 'Skills', path: '/skills' },
    { id: 'projects', icon: LayoutGrid, label: 'Projects', path: '/projects' },
    { id: 'visitor', icon: Globe, label: 'Map', path: '/visitor' }, // BURASI EKLENDİ
    { id: 'contact', icon: Mail, label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={styles.Header}>
      {/* MASAÜSTÜ NAVBAR */}
      <nav className={styles.DesktopNav}>
        <ul className={styles.NavUl}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link 
                to={item.path} 
                className={styles.NavLink}
                style={{ color: location.pathname === item.path ? '#00ff88' : '' }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* MOBİL NAVBAR (Verdiğin CSS yapısı) */}
      <nav className={styles.MobileNav}>
        <div className={styles.MobileWrapper}>
          {navItems.map((item) => {
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
                  <Icon 
                    size={20} 
                    color={isActive ? "#fff" : "#808080"} 
                  />
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