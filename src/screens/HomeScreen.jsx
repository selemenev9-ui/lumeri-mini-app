import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from '../components/Marquee.jsx';
import ServiceDrawer from '../components/ServiceDrawer.jsx';
import { useVK } from '../contexts/VKContext.jsx';
import { asset } from '../utils/assetUrl.js';
import styles from './HomeScreen.module.css';

const CATEGORIES = [
  { id: 'lashes', label: 'Ресницы' },
  { id: 'brows', label: 'Брови' },
  { id: 'care', label: 'Уход' }
];

const SERVICES_DATA = {
  lashes: {
    title: 'Наращивание ресниц',
    description:
      'Идеальный взгляд без макияжа. Мы используем ультратонкие материалы и гипоаллергенный клей, чтобы наращивание было невесомым и безопасным для ваших родных ресниц.',
    price: 'от 2 000 ₽',
    link: 'https://dikidi.ru/1109266'
  },
  brows: {
    title: 'Архитектура бровей',
    description:
      'Ламинирование, коррекция и бережное окрашивание. Подберем идеальную форму и оттенок, которые подчеркнут геометрию вашего лица.',
    price: 'от 1 200 ₽',
    link: 'https://dikidi.ru/1109266'
  },
  care: {
    title: 'Уход за кожей',
    description:
      'Эстетическая косметология и глубокое очищение. Процедуры, направленные на сияние, ровный тон и восстановление ресурса вашей кожи.',
    price: 'от 2 500 ₽',
    link: 'https://dikidi.ru/1109266'
  }
};

export default function HomeScreen() {
  const { triggerHaptic } = useVK();
  const [activeCategory, setActiveCategory] = useState('lashes');
  const [activeService, setActiveService] = useState(null);
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

  useEffect(() => {
    if (!activeService) return undefined;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [activeService]);

  const handleCategorySelect = (id) => {
    triggerHaptic('light');
    setActiveCategory(id);
    setActiveService(id);
  };

  return (
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
        <div className={styles.logoCenter}>ЛЮМЭРИ</div>
        <span className={styles.datePill}>{localizedDate}</span>

        <div className={styles.content}>
          <div className={styles.categories}>
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={`${styles.categoryChip} glass-panel ${activeCategory === cat.id ? `${styles.categoryActive} glass-panel-active` : ''}`}
                onClick={() => handleCategorySelect(cat.id)}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          <Marquee speed={30} />
        </div>
      </div>

      <ServiceDrawer
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
        data={activeService ? SERVICES_DATA[activeService] : null}
      />
    </div>
  );
}
