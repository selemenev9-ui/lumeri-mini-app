import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import bridge from '@vkontakte/vk-bridge';
import Marquee from '../components/Marquee.jsx';
import MagneticButton from '../components/MagneticButton.jsx';
import { haptic } from '../utils/haptic.js';
import styles from './HomeScreen.module.css';

const CATEGORIES = [
  { id: 'lashes', label: 'Ресницы' },
  { id: 'brows', label: 'Брови' },
  { id: 'care', label: 'Уход' }
];

const GREETINGS = [
  (name, time) => `${name}, пусть ${time} наполнится сиянием`,
  (name, time) => `Добро пожаловать, ${name}. Время для вашего ритуала`,
  (name, time) => `${name}, вы заслуживаете лучшего. Именно сегодня`,
  (name, time) => `Тихий ${time}, ${name}. Студия ждёт вас`,
  (name, time) => `${name}, красота начинается здесь`,
  (name) => `${name}, ваш следующий ритуал уже близко`,
  (name) => `Рады видеть вас снова, ${name}`
];

const getTimeWord = () => {
  const h = new Date().getHours();
  if (h < 12) return 'утренний час';
  if (h < 17) return 'день';
  if (h < 21) return 'вечер';
  return 'поздний час';
};

const getGreeting = (name) => {
  if (!name) {
    const h = new Date().getHours();
    if (h < 12) return 'Доброе утро';
    if (h < 17) return 'Добрый день';
    return 'Добрый вечер';
  }
  const fn = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
  return fn(name, getTimeWord());
};

export default function HomeScreen({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('lashes');
  const [userName, setUserName] = useState('');
  const [timeTint, setTimeTint] = useState('rgba(0,0,0,0)');
  const now = new Date();
  const localizedDate = now.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  const nextSlot = useMemo(() => {
    const future = new Date();
    future.setDate(future.getDate() + 1);
    future.setHours(14, 30, 0, 0);
    return future;
  }, []);

  const countdown = useMemo(() => formatCountdown(nextSlot - now), [nextSlot, now]);
  const greeting = getGreeting(userName);

  useEffect(() => {
    bridge
      .send('VKWebAppGetUserInfo')
      .then((data) => setUserName(data.first_name || ''))
      .catch(() => setUserName(''));
  }, []);

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

  const handleNavigateBooking = () => {
    haptic.light();
    onNavigate?.('booking');
  };

  const handleCategorySelect = (id) => {
    haptic.select();
    setActiveCategory(id);
  };

  return (
    <>
      <div className="material" />
      <div className={styles.home}>
        <div className={styles.heroPhoto}>
          <img src="/master/master-1.webp" alt="" className={styles.heroImg} />
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
          <motion.div
            className={`${styles.slotCard} glass`}
            whileTap={{ scale: 0.98 }}
          >
            <div>
              <p className={styles.slotLabel}>Ближайшее окошко</p>
              <p className={styles.slotTime}>{nextSlot.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</p>
              <p className={styles.slotMeta}>{nextSlot.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</p>
            </div>
            <MagneticButton className="btn-ink" onClick={handleNavigateBooking}>
              Записаться
            </MagneticButton>
          </motion.div>

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

          <div className={styles.countdownWrap}>
            <div className={styles.countdownCard}>
              <p className={styles.countLabel}>До вашей трансформации</p>
              <p className={styles.countValue}>{countdown}</p>
              <MagneticButton className="btn-glass" onClick={() => onNavigate?.('booking')}>
                Детали визита
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function formatCountdown(ms) {
  const totalMinutes = Math.max(0, Math.floor(ms / 60000));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return `${pad(days)} дня · ${pad(hours)} ч · ${pad(minutes)} м`;
}

function pad(num) {
  return String(num).padStart(2, '0');
}
