import SplitText from '../components/SplitText.jsx';
import styles from './InfoScreen.module.css';

const GALLERY = ['/studio/studio-1.jpg', '/studio/studio-2.jpg', '/studio/studio-3.jpg'];

const LINKS = [
  { label: '2GIS', url: 'https://2gis.ru/rostov_on_don/firm/3379866562396441' },
  { label: 'Яндекс Карты', url: 'https://yandex.ru/maps/-/CDXT4dLr' },
  { label: 'ВКонтакте', url: 'https://vk.com/lumeri_salon' }
];

export default function InfoScreen() {
  return (
    <div className={styles.info}>
      <div className="material" />
      <div className={styles.inner}>
        <div className={styles.heading}>
          <SplitText text="О студии" className={styles.title} delay={0.1} />
        </div>

        <div className={styles.galleryRow}>
          {GALLERY.map((src, idx) => (
            <div key={src} className={styles.galleryCard}>
              <img src={src} alt={`Студия ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className={`glass ${styles.card}`}>
          <p className={styles.cardLabel}>Контакты</p>
          <p className={styles.cardValue}>Ростов-на-Дону, Каменобродская 33/22</p>
          <p className={styles.cardValue}>пн–вс · 10:00—20:00</p>
          <a href="tel:+79001292299" className={styles.cardLink}>+7 (900) 129-22-99</a>
        </div>

        <div className={`glass ${styles.card}`}>
          <p className={styles.cardLabel}>О мастере</p>
          <p className={styles.quote}>
            «Медицинский взгляд, ювелирная точность и абсолютный комфорт на каждой процедуре.»
          </p>
        </div>

        <div className={styles.links}>
          {LINKS.map((link) => (
            <a key={link.label} className={`glass ${styles.link}`} href={link.url} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <svg viewBox="0 0 24 24">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
