import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplitText from '../components/SplitText.jsx';
import ConfirmationParticles from '../components/ConfirmationParticles.jsx';
import { haptic } from '../utils/haptic.js';
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

const STEP_TITLES = {
  1: 'ваш ритуал',
  2: 'когда удобно?',
  3: 'выберите время'
};

const TIME_SLOTS = ['10:00', '11:00', '12:30', '13:30', '15:00', '16:30', '18:00'];
const BUSY_SLOTS = ['11:00', '15:00'];

function buildDates() {
  const out = [];
  const today = new Date();
  for (let i = 0; i < 10; i += 1) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push({
      label: d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }).replace('.', ''),
      weekday: d.toLocaleDateString('ru-RU', { weekday: 'short' }).replace('.', ''),
      iso: d.toISOString().slice(0, 10)
    });
  }
  return out;
}

export default function BookingScreen({ onDarkChange, onConfirmChange }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = useMemo(() => { const d = buildDates(); return d.length > 0 ? d : buildDates(); }, []);
  const listRef = useRef(null);
  useViscousScroll(listRef);

  useEffect(() => {
    onConfirmChange?.(step === 4);
  }, [step]);

  const ambientTint = selectedService
    ? (SERVICE_COLORS[selectedService.id] || SERVICE_COLORS[selectedService.category] || SERVICE_COLORS['default'])
    : 'rgba(255,255,255,0)';
  const stepTitle = STEP_TITLES[step] || 'ваш ритуал';

  const goToStep = (nextStep) => {
    if (nextStep === 2 && !selectedService) {
      console.log('[BookingScreen] goToStep(2) blocked — no service selected');
      return;
    }
    console.log('[BookingScreen] goToStep', nextStep, 'service:', selectedService?.id ?? null);
    if (nextStep <= 1) {
      setSelectedDate(null);
      setSelectedTime(null);
    }
    if (nextStep === 4) {
      haptic.success();
      onDarkChange?.(true);
    } else {
      onDarkChange?.(false);
    }
    setStep(nextStep);
  };

  const handleConfirm = () => {
    window.location.href = 'https://dikidi.ru/1109266';
  };

  return (
    <div className={styles.booking}>
        <div className="material" />
        <div className={styles.ambient} style={{ background: ambientTint }} />

        {step !== 4 && (
          <div className={styles.header}>
            <span className={styles.kicker}>ЗАПИСЬ</span>
            <SplitText text={stepTitle} className={styles.title} delay={0.1} />
          </div>
        )}

        <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <p className={styles.sectionTitle}>Выберите ритуал</p>
            <div className={styles.cardStack} ref={listRef}>
              {SERVICES.map((service, index) => (
                <motion.button
                  key={service.id}
                  data-viscous
                  className={`${styles.serviceCard} glass ${selectedService?.id === service.id ? styles.serviceActive : ''}`}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ transitionDelay: `${index * 40}ms` }}
                  onClick={() => {
                    haptic.select();
                    setSelectedService(service);
                  }}
                >
                  <div>
                    <p className={styles.serviceTitle}>{service.title}</p>
                    <p className={styles.serviceMeta}>{service.duration}</p>
                  </div>
                  <span className={styles.priceBadge}>{service.price}</span>
                </motion.button>
              ))}
            </div>
            <div className={styles.actionsSticky}>
              <button
                className="btn-ink"
                disabled={!selectedService}
                onClick={() => goToStep(2)}
              >
                Далее
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {selectedService && (
              <div className={styles.selectedBar}>
                <span className={styles.selectedTitle}>{selectedService.title}</span>
                <span className={styles.selectedPrice}>{selectedService.price}</span>
              </div>
            )}
            <p className={styles.sectionTitle}>Когда удобно?</p>
            <div className={styles.dateStrip}>
              {dates.map((date) => (
                <button
                  key={date.iso}
                  className={`${styles.dateChip} ${selectedDate === date.iso ? styles.dateActive : ''}`}
                  onClick={() => {
                    haptic.select();
                    setSelectedDate(date.iso);
                  }}
                >
                  <span className={styles.dateNum}>{date.label}</span>
                  <span className={styles.dateWeek}>{date.weekday}</span>
                </button>
              ))}
            </div>
            <div className={styles.actionsSticky}>
              <button className="btn-glass" onClick={() => goToStep(1)}>
                Назад
              </button>
              <button
                className="btn-ink"
                disabled={!selectedDate}
                onClick={() => goToStep(3)}
              >
                Далее
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {selectedService && (
              <div className={styles.selectedBar}>
                <span className={styles.selectedTitle}>{selectedService.title}</span>
                <span className={styles.selectedPrice}>{selectedService.price}</span>
              </div>
            )}
            <p className={styles.sectionTitle}>Выберите время</p>
            <div className={styles.grid}>
              {TIME_SLOTS.map((slot) => {
                const busy = BUSY_SLOTS.includes(slot);
                const active = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    className={`${styles.slot} ${busy ? styles.slotBusy : ''} ${active ? styles.slotActive : ''}`}
                    onClick={() => {
                      if (busy) return;
                      haptic.select();
                      setSelectedTime(slot);
                    }}
                    disabled={busy}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            <div className={styles.actionsSticky}>
              <button className="btn-glass" onClick={() => goToStep(2)}>
                Назад
              </button>
              <button
                className="btn-ink"
                disabled={!selectedTime}
                onClick={() => goToStep(4)}
              >
                Далее
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            className={styles.confirm}
            style={{ overflow: 'hidden' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ConfirmationParticles />
            <img src="/logos/logo-white.png" alt="Люмэри" className={styles.confirmLogo} />
            <motion.svg width="60" height="60" viewBox="0 0 60 60">
              <motion.circle
                cx="30" cy="30" r="25"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M18 30 L26 38 L42 22"
                fill="none"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.svg>
            <p className={styles.confirmTitle}>Ритуал назначен</p>
            <div className={styles.confirmDetails}>
              <p className={styles.confirmService}>{selectedService?.title}</p>
              <p className={styles.confirmMeta}>
                {selectedDate && new Date(`${selectedDate}T12:00:00`).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                <span>·</span>
                {selectedTime}
                <span>·</span>
                {selectedService?.price}
              </p>
            </div>
            <div className={styles.confirmActions}>
              <button className="btn-glass" onClick={handleConfirm}>
                Подтвердить в Люмэри
              </button>
              <button className={styles.confirmOutline} onClick={() => goToStep(1)}>
                Изменить
              </button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
  );
}
