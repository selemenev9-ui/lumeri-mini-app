import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from '../components/Marquee.jsx';
import { asset } from '../utils/assetUrl.js';
import { haptic } from '../utils/haptic.js';
import styles from './HomeScreen.module.css';

const CATEGORIES = [
  { id: 'lashes', label: 'Ресницы' },
  { id: 'brows', label: 'Брови' },
  { id: 'care', label: 'Уход' }
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('lashes');
  const [timeTint, setTimeTint] = useState('rgba(0,0,0,0)');
  const now = new Date();
  const localizedDate = now.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  useEffect(() => {
    const h = new Date().getHours();
    let tint;
    if (h >= 5 && h < 9) {
      tint = 'rgba(255,180,80,0.18)';
    } else if (h >= 9 && h < 12) {
      tint = 'rgba(255,210,120,0.10)';
    } else if (h >= 12 && h < 16) {
      tint = 'rgba(180,200,220,0.08)';
    } else if (h >= 16 && h < 19) {
      tint = 'rgba(255,140,80,0.15)';
    } else if (h >= 19 && h < 22) {
      tint = 'rgba(160,80,120,0.18)';
    } else {
      tint = 'rgba(40,40,100,0.22)';
    }
    setTimeTint(tint);
  }, []);

  const handleCategorySelect = (id) => {
    haptic.select();
    setActiveCategory(id);
  };

  return (
    <>
      <div className="material" />
      <div className={styles.home}>
        <div className={styles.heroPhoto}>
          <img src={asset('/master/master-1.webp')} alt="" className={styles.heroImg} />
          <div className={styles.heroFade} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: timeTint,
              mixBlendMode: 'multiply',
              transition: 'background 3s ease',
              pointerEvents: 'none',
            }}
          />
        </div>

        <div className={styles.statusBar}>
          <span>{now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</span>
          <div className={styles.statusIcons}>
            <span className={styles.statDot} />
            <span className={styles.statLine} />
            <span className={styles.statBattery} />
          </div>
        </div>

        <div className={styles.logoCenter}>ЛЮМЭРИ</div>
        <span className={styles.datePill}>{localizedDate}</span>

        <div className={styles.content}>
          <div className={styles.categories}>
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.93 }}
                className={`${styles.categoryChip} ${activeCategory === cat.id ? styles.categoryActive : ''}`}
                onClick={() => handleCategorySelect(cat.id)}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          <Marquee speed={30} />
        </div>
      </div>
    </>
  );
}
