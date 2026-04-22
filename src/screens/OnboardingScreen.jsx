import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './OnboardingScreen.module.css';

const SLIDES = [
  {
    title: 'Добро пожаловать в Люмэри',
    text: 'Пространство красоты и эстетики, где каждая деталь создана для вашего комфорта.'
  },
  {
    title: 'Забота о себе каждый день',
    text: 'Персональные советы по уходу за бровями, ресницами и кожей — прямо в приложении.'
  },
  {
    title: 'Запись за секунды',
    text: 'Выбирайте услугу и записывайтесь онлайн — без звонков, без ожидания.'
  }
];

const contentVariants = {
  initial: { opacity: 0, y: 18, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: 'blur(3px)',
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] }
  }
};

export default function OnboardingScreen({ onComplete }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isLastSlide = currentSlide === SLIDES.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      onComplete?.();
      return;
    }

    setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
  };

  return (
    <section className={styles.onboarding}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.contentWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={styles.slide}
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p className={styles.kicker}>Lumeri Experience</p>
            <h1 className={styles.title}>{SLIDES[currentSlide].title}</h1>
            <p className={styles.text}>{SLIDES[currentSlide].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.footer}>
        <div className={styles.dots}>
          {SLIDES.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
              aria-hidden="true"
            />
          ))}
        </div>

        <button type="button" className="btn-ink glass-panel" onClick={handleNext}>
          {isLastSlide ? 'Начать' : 'Далее'}
        </button>
      </div>
    </section>
  );
}
