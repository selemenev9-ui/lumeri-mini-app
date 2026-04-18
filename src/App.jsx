import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import bridge from '@vkontakte/vk-bridge';

import HomeScreen from './screens/HomeScreen.jsx';
import BookingScreen from './screens/BookingScreen.jsx';
import PortfolioScreen from './screens/PortfolioScreen.jsx';
import InfoScreen from './screens/InfoScreen.jsx';
import AuraScreen from './screens/AuraScreen.jsx';
import TabBar from './components/TabBar.jsx';

/**
 * Routes map. We use internal state for simplicity; @vkontakte/vk-mini-apps-router
 * is wired as a dependency and can be swapped in here for hash-based routing
 * when the app is published inside VK.
 */
const ROUTES = ['home', 'booking', 'portfolio', 'info', 'aura'];

const pageVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: 'blur(4px)',
    transition: { duration: 0.25 }
  }
};

const homeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export default function App() {
  const [route, setRoute] = useState('home');
  const [isDark, setIsDark] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const currentScreen = route;

  useEffect(() => {
    document.body.style.background = isDark ? '#111820' : '#F5F0E8';
  }, [isDark]);

  useEffect(() => {
    // Sync status-bar / nav color with VK client
    bridge
      .send('VKWebAppSetViewSettings', {
        status_bar_style: 'dark',
        action_bar_color: '#F4F6F8',
        navigation_bar_color: '#FFFFFF'
      })
      .catch(() => {});
  }, []);

  const navigate = (next) => {
    if (!ROUTES.includes(next)) return;
    setRoute(next);
  };

  return (
    <div className="app-shell" style={{ background: isDark ? '#111820' : undefined }}>
      <AnimatePresence mode="wait">
        {currentScreen === 'home' && (
          <motion.div
            key={currentScreen}
            variants={homeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%', height: '100%' }}
          >
            <HomeScreen onNavigate={navigate} />
          </motion.div>
        )}

        {currentScreen === 'booking' && (
          <motion.div
            key={currentScreen}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%', height: '100%' }}
          >
            <BookingScreen onNavigate={navigate} onDarkChange={setIsDark} onConfirmChange={setIsConfirm} />
          </motion.div>
        )}

        {currentScreen === 'portfolio' && (
          <motion.div
            key={currentScreen}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%', height: '100%' }}
          >
            <PortfolioScreen />
          </motion.div>
        )}

        {currentScreen === 'info' && (
          <motion.div
            key={currentScreen}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%', height: '100%' }}
          >
            <InfoScreen />
          </motion.div>
        )}

        {currentScreen === 'aura' && (
          <motion.div
            key="aura"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: '100%', height: '100%' }}
          >
            <AuraScreen onNavigate={navigate} />
          </motion.div>
        )}
      </AnimatePresence>

      <TabBar active={route} onChange={navigate} isHidden={isConfirm} />
    </div>
  );
}
