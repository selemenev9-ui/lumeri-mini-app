import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SplitText from '../components/SplitText.jsx';
import useViscousScroll from '../hooks/useViscousScroll.js';
import styles from './BookingScreen.module.css';

// TODO: replace with Dikidi API services once token is provided
const SERVICES = [
  { id: 'lashes-classic', title: 'Наращивание ресниц', price: 'от 1 800 ₽', duration: '120 мин', category: 'lashes' },
  { id: 'lashes-led', title: 'LED-наращивание', price: 'от 2 100 ₽', duration: '120 мин', category: 'lashes' },
  { id: 'lamination-lashes', title: 'Ламинирование ресниц', price: '1 700 ₽', duration: '60 мин', category: 'lashes' },
  { id: 'lamination-brows', title: 'Ламинирование бровей', price: '1 600 ₽', duration: '45 мин', category: 'brows' },
  { id: 'removal-lashes', title: 'Снятие ресниц', price: '300 ₽', duration: '20 мин', category: 'lashes' },
  { id: 'tint-lashes', title: 'Окрашивание ресниц', price: '300 ₽', duration: '20 мин', category: 'lashes' },
  { id: 'package-all', title: 'Пакет «Всё включено»', price: '1 800 ₽', duration: '90 мин', category: 'care' },
  { id: 'clean-face', title: 'Чистка лица атравматичная', price: 'от 1 500 ₽', duration: '60 мин', category: 'care' },
  { id: 'peeling-chemical', title: 'Химический пилинг', price: 'от 1 000 ₽', duration: '45 мин', category: 'care' },
  { id: 'microcurrent', title: 'Микротоки лицо/тело', price: 'от 1 500 ₽', duration: '60 мин', category: 'care' },
  { id: 'meso-biorevive', title: 'Мезотерапия/биоревитализация', price: 'от 2 000 ₽', duration: '60 мин', category: 'care' }
];

const SERVICE_COLORS = {
  'lashes':            'rgba(180,100,75,0.13)',
  'lashes-led':        'rgba(160,80,120,0.13)',
  'lamination-lashes': 'rgba(190,120,70,0.12)',
  'lamination-brows':  'rgba(120,80,150,0.12)',
  'removal':           'rgba(100,120,170,0.12)',
  'coloring':          'rgba(150,90,130,0.12)',
  'all-included':      'rgba(170,110,80,0.13)',
  'cleaning':          'rgba(80,130,120,0.12)',
  'peeling':           'rgba(140,160,100,0.11)',
  'microcurrent':      'rgba(90,110,160,0.12)',
  'meso':              'rgba(160,100,140,0.13)',
  'default':           '#F5F0E8',
};

export default function BookingScreen({ onDarkChange, onConfirmChange }) {
  const listRef = useRef(null);
  useViscousScroll(listRef);

  useEffect(() => {
    onConfirmChange?.(false);
    onDarkChange?.(false);
  }, [onConfirmChange, onDarkChange]);

  const ambientTint = SERVICE_COLORS.default;

  const handleOnlineBooking = () => {
    window.open('https://dikidi.ru/1109266', '_blank');
  };

  return (
    <div className={styles.booking}>
        <div className="material" />
        <div className={styles.ambient} style={{ background: ambientTint }} />

        <div className={styles.header}>
          <span className={styles.kicker}>ЗАПИСЬ</span>
          <SplitText text="ваш ритуал" className={styles.title} delay={0.1} />
        </div>

        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className={styles.sectionTitle}>Услуги</p>
          <div className={styles.cardStack} ref={listRef}>
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                data-viscous
                className={`${styles.serviceCard} glass`}
                whileTap={{ scale: 0.99 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div>
                  <p className={styles.serviceTitle}>{service.title}</p>
                  <p className={styles.serviceMeta}>{service.duration}</p>
                </div>
                <span className={styles.priceBadge}>{service.price}</span>
              </motion.div>
            ))}
          </div>
          <div className={styles.actionsSticky}>
            <button className="btn-ink" onClick={handleOnlineBooking}>
              Записаться онлайн
            </button>
          </div>
        </motion.div>
      </div>
  );
}
