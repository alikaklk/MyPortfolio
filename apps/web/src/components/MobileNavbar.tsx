import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Code2, LayoutGrid, Mail } from 'lucide-react';
import styles from './MobileNavbar.module.css';

const navItems = [
  { id: 'home', icon: Home, label: 'Home', path: '/' },
  { id: 'about', icon: User, label: 'About', path: '/about' },
  { id: 'skills', icon: Code2, label: 'Skills', path: '/skills' },
  { id: 'projects', icon: LayoutGrid, label: 'Projects', path: '/projects' },
  { id: 'contact', icon: Mail, label: 'Contact', path: '/contact' },
];

export default function MobileNavbar() {
  const location = useLocation();

  return (
    <div className={styles.Wrapper}>
      <nav className={styles.NavContainer}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link key={item.id} to={item.path} className={styles.NavLink}>
              {/* Aktiflik animasyonu (Framer Motion ile) */}
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className={styles.ActivePill}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <div className={styles.IconContent}>
                <Icon 
                  size={20} 
                  color={isActive ? "#ffffff" : "#808080"} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={styles.Label}
                  >
                    {item.label}
                  </motion.span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}