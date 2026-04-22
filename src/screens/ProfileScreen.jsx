import { useEffect, useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { motion } from 'framer-motion';
import { useVK } from '../contexts/VKContext.jsx';
import BeautyCard from '../components/BeautyCard.jsx';
import CareAccordion from '../components/CareAccordion.jsx';
import { getDailyTips } from '../data/careHub';
import styles from './ProfileScreen.module.css';

export default function ProfileScreen() {
  const { user, cardTheme, toggleTheme, seenTips, isBridgeLoading, isVKEnv } = useVK();
  const firstName = user?.first_name || 'гость';
  const avatar = user?.photo_200 || '';
  const [dailyMix, setDailyMix] = useState([]);

  useEffect(() => {
    if (isBridgeLoading) return;

    const { tips, newSeenIds } = getDailyTips(3, seenTips);
    setDailyMix(tips);

    if (newSeenIds.length > seenTips.length && isVKEnv) {
      bridge
        .send('VKWebAppStorageSet', {
          key: 'seen_tips',
          value: JSON.stringify(newSeenIds)
        })
        .catch((error) => {
          console.error('VK Storage seen_tips update failed:', error);
        });
    }
  }, [isBridgeLoading, isVKEnv, seenTips]);

  const openAdmin = () => {
    window.open('https://vk.com/lumeri.studio', '_blank');
  };

  return (
    <div className={styles.profile}>
      <motion.div
        className={styles.ambientGlow}
        animate={{
          background: 'radial-gradient(circle at 50% 50%, rgba(200, 160, 220, 0.8), transparent 70%)'
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Рады видеть тебя, {firstName}</h1>
          {avatar ? (
            <img className={styles.avatar} src={avatar} alt={firstName} />
          ) : (
            <div className={styles.avatarPlaceholder} aria-hidden="true" />
          )}
        </header>

        <section className={styles.beautyIdSection}>
          <p className={styles.sectionLabel}>Beauty ID</p>
          <button className={`${styles.themeToggle} glass-panel`} onClick={toggleTheme} type="button">
            {cardTheme === 'dark' ? '☀️ Светлый дизайн' : '🌙 Тёмный дизайн'}
          </button>
          <div className={`${styles.beautyIdContainer} glass-panel`}>
            <BeautyCard firstName={user?.first_name} vkId={user?.id} theme={cardTheme} />
          </div>

          <div className={`${styles.careLibrary} glass-panel`}>
            <h2 className={styles.careTitle}>Beauty Mix на сегодня</h2>
            <CareAccordion data={dailyMix} />
          </div>
        </section>

        <footer className={styles.footer}>
          <button className="btn-ink glass-panel" onClick={openAdmin}>
            Написать администратору
          </button>
        </footer>
      </div>
    </div>
  );
}
