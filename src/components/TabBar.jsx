import { motion } from 'framer-motion';
import { haptic } from '../utils/haptic.js';
import useMagnetic from '../hooks/useMagnetic.js';
import styles from './TabBar.module.css';

const TABS = [
  { id: 'home', label: 'Дом', icon: IconHome },
  { id: 'booking', label: 'Запись', icon: IconBooking },
  { id: 'portfolio', label: 'Работы', icon: IconPortfolio },
  { id: 'info', label: 'О нас', icon: IconInfo },
  { id: 'aura', label: 'Аура', icon: IconAura }
];

export default function TabBar({ active = 'home', onChange, isHidden = false }) {
  return (
    <nav
      className={styles.bar}
      style={{ opacity: isHidden ? 0 : 1, pointerEvents: isHidden ? 'none' : 'auto', transition: 'opacity 0.3s ease' }}
    >
      {TABS.map((tab) => (
        <MagneticTab
          key={tab.id}
          tab={tab}
          isActive={active === tab.id}
          onChange={onChange}
        />
      ))}
    </nav>
  );
}

function MagneticTab({ tab, isActive, onChange }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.25);
  const Icon = tab.icon;
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <button
        className={`${styles.tab} ${isActive ? styles.active : ''}`}
        onClick={() => {
          haptic.light();
          onChange?.(tab.id);
        }}
      >
        <div className={styles.iconWrap}>
          <Icon active={isActive} />
          {isActive && (
            <motion.span
              layoutId="tab-dot"
              className={styles.dot}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            />
          )}
        </div>
        <span className={styles.label}>{tab.label}</span>
      </button>
    </div>
  );
}

function IconHome({ active }) {
  return (
    <svg viewBox="0 0 32 32" className={`${styles.icon} ${active ? styles.iconActive : ''}`}>
      <path d="M4 13.5 16 4l12 9.5V28a1 1 0 0 1-1 1h-6.5a.5.5 0 0 1-.5-.5V21h-8v7.5a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1Z" />
    </svg>
  );
}

function IconBooking({ active }) {
  return (
    <svg viewBox="0 0 32 32" className={`${styles.icon} ${active ? styles.iconActive : ''}`}>
      <path d="M8 6h2l.5 2h11L22 6h2a2 2 0 0 1 2 2v18H6V8a2 2 0 0 1 2-2Zm0 7h16" />
      <path d="M11 17h3v7h-3zM18 17h3v7h-3z" />
    </svg>
  );
}

function IconPortfolio({ active }) {
  return (
    <svg viewBox="0 0 32 32" className={`${styles.icon} ${active ? styles.iconActive : ''}`}>
      <path d="M6 10h20v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" />
      <path d="M12 10V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <path d="M6 15h20" />
    </svg>
  );
}

function IconInfo({ active }) {
  return (
    <svg viewBox="0 0 32 32" className={`${styles.icon} ${active ? styles.iconActive : ''}`}>
      <path d="M16 28a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z" />
      <path d="M16 9.5v.2" />
      <path d="M16 14v8" />
    </svg>
  );
}

function IconAura({ active }) {
  return (
    <svg viewBox="0 0 32 32" className={`${styles.icon} ${active ? styles.iconActive : ''}`}>
      <path d="M16 4 L17.5 13 L26 16 L17.5 19 L16 28 L14.5 19 L6 16 L14.5 13 Z" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="3" strokeWidth="1.4" />
    </svg>
  );
}
