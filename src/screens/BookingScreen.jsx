import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplitText from '../components/SplitText.jsx';
import useViscousScroll from '../hooks/useViscousScroll.js';
import { useVK } from '../contexts/VKContext.jsx';
import { SERVICES_CATEGORIES, SERVICES_DATA } from '../data/services.js';
import styles from './BookingScreen.module.css';

const CATEGORY_COLORS = {
  default: '#B8916A',
  brows: '#C4836A',
  lashes: '#7AAF94',
  cosmetology: '#9A7AB8'
};

export default function BookingScreen({ onDarkChange, onConfirmChange }) {
  const listRef = useRef(null);
  const { triggerHaptic } = useVK();
  const [activeTab, setActiveTab] = useState('brows');
  const [activeService, setActiveService] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const filteredServices = SERVICES_DATA.filter((service) => service.category === activeTab);
  useViscousScroll(listRef);

  useEffect(() => {
    onConfirmChange?.(false);
    onDarkChange?.(false);
  }, [onConfirmChange, onDarkChange]);

  const handleServiceSelect = (service) => {
    triggerHaptic('medium');

    if (activeService?.id === service.id) {
      setActiveService(null);
      setActiveCategory(null);
      return;
    }

    setActiveService(service);
    setActiveCategory(service.category);
  };

  return (
    <div className={styles.booking}>
      <motion.div
        className={styles.ambientGlow}
        animate={{
          background: `radial-gradient(circle at 50% 50%, ${CATEGORY_COLORS[activeCategory || 'default']}, transparent 70%)`
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      <div className={styles.contentLayer}>
        <div className={styles.header}>
          <span className={styles.kicker}>ЗАПИСЬ</span>
          <SplitText text="ваш ритуал" className={styles.title} delay={0.1} />
        </div>

        <div className={styles.tabsContainer}>
          {SERVICES_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.tab} glass-panel ${activeTab === category.id ? `${styles.activeTab} glass-panel-active` : ''}`}
              onClick={() => {
                triggerHaptic('light');
                setActiveTab(category.id);
                setActiveService(null);
                setActiveCategory(null);
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className={styles.sectionTitle}>Услуги</p>
          <motion.div className={styles.cardStack} ref={listRef}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                role="button"
                tabIndex={0}
                data-viscous
                className={`${styles.serviceCard} glass-panel ${activeService?.id === service.id ? `${styles.activeCard} glass-panel-active` : ''}`}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut', delay: index * 0.04 } }}
                onClick={() => handleServiceSelect(service)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleServiceSelect(service);
                  }
                }}
              >
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>

                  <div className={styles.serviceMetadata}>
                    <span className={styles.serviceDuration}>{service.duration}</span>
                    <span className={styles.servicePrice}>{service.price}</span>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {activeService?.id === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      style={{ overflow: 'hidden', width: '100%' }}
                    >
                      <button
                        type="button"
                        className={styles.inlineBookButton}
                        onClick={(event) => {
                          event.stopPropagation();
                          triggerHaptic('heavy');
                          window.open('https://dikidi.ru/1109266', '_blank');
                        }}
                      >
                        Записаться онлайн
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
