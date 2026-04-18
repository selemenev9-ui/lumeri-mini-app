import { useState } from 'react';
import { motion } from 'framer-motion';
import SplitText from '../components/SplitText.jsx';
import Marquee from '../components/Marquee.jsx';
import styles from './PortfolioScreen.module.css';

const LANES = [
  {
    id: 'lashes',
    label: 'Ресницы',
    color: 'rgba(180,100,75,0.1)',
    items: [1, 2, 5, 6, 11].map((n) => `/portfolio/work_${n}.webp`),
  },
  {
    id: 'brows',
    label: 'Брови',
    color: 'rgba(120,80,150,0.1)',
    items: [3, 4, 7, 8, 12].map((n) => `/portfolio/work_${n}.webp`),
  },
  {
    id: 'cosmetology',
    label: 'Уход',
    color: 'rgba(80,130,120,0.1)',
    items: [9, 10].map((n) => `/portfolio/work_${n}.webp`),
  },
];

export default function PortfolioScreen() {
  const [activeLane, setActiveLane] = useState(null);

  return (
    <div className={styles.portfolio}>
      <div className="material" />

      <div
        className={styles.bgOverlay}
        style={{ background: activeLane ? activeLane.color : 'transparent' }}
      />

      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.kicker}>галерея</span>
          <SplitText text="портфолио" className={styles.title} delay={0.1} />
        </div>

        {LANES.map((lane, laneIndex) => (
          <div key={lane.id}>
            {laneIndex === 1 && <Marquee reverse speed={40} />}

            <div className={styles.lane}>
              <div className={styles.laneHeader}>
                <span className={styles.laneTitle}>{lane.label}</span>
                <div
                  className={styles.laneAccent}
                  style={{
                    background: activeLane?.id === lane.id ? lane.color.replace('0.1)', '0.5)') : 'transparent',
                  }}
                />
              </div>

              <div className={styles.laneScroll}>
                {lane.items.map((src, i) => (
                  <motion.div
                    key={src}
                    className={styles.card}
                    whileTap={{ scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    onTapStart={() => setActiveLane(lane)}
                  >
                    <img src={src} alt={lane.label} className={styles.cardImage} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
