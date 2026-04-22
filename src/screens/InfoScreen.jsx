import { motion } from 'framer-motion';
import SplitText from '../components/SplitText.jsx';
import { asset } from '../utils/assetUrl.js';
import styles from './InfoScreen.module.css';

const GALLERY = [asset('/studio/studio-1.jpg'), asset('/studio/studio-2.jpg'), asset('/studio/studio-3.jpg')];

const LINKS = [
  { label: 'Яндекс Карты', url: 'https://yandex.ru/maps/org/lyumeri/28571972918?si=5pc6e661tcju2q3mh9c3be0nm4' },
  { label: '2ГИС', url: 'https://2gis.ru/rostov/geo/70000001106106590' },
  { label: 'ВКонтакте', url: 'https://vk.com/lumeri.studio' }
];

export default function InfoScreen() {
  const handleOpenExternal = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.info}>
      <motion.div
        className={styles.ambientGlow}
        animate={{
          background: 'radial-gradient(circle at 50% 50%, rgba(160, 220, 200, 0.8), transparent 70%)'
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <div className={styles.inner}>
        <div className={styles.heading}>
          <SplitText text="О студии" className={styles.title} delay={0.1} />
        </div>

        <div className={styles.galleryRow}>
          {GALLERY.map((src, idx) => (
            <div key={src} className={`${styles.galleryCard} glass-panel`}>
              <img src={src} alt={`Студия ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className={`${styles.card} glass-panel`}>
          <p className={styles.cardLabel}>Контакты</p>
          <p className={styles.cardValue}>Ростов-на-Дону, Каменобродская 33/22</p>
          <p className={styles.cardValue}>пн–вс · 10:00—20:00</p>
          <a href="tel:+79001292299" className={styles.cardLink}>+7 (900) 129-22-99</a>
        </div>

        <div className={`${styles.card} glass-panel`}>
          <p className={styles.cardLabel}>О мастере</p>
          <p className={styles.quote}>
            «Медицинский взгляд, ювелирная точность и абсолютный комфорт на каждой процедуре.»
          </p>
        </div>

        <div className={styles.links}>
          {LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`${styles.link} glass-panel`}
              onClick={() => handleOpenExternal(link.url)}
            >
              <span>{link.label}</span>
              <svg viewBox="0 0 24 24">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
