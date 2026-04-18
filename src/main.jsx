import React from 'react';
import ReactDOM from 'react-dom/client';
import bridge from '@vkontakte/vk-bridge';
import Lenis from '@studio-freight/lenis';
import App from './App.jsx';
import './styles/global.css';

// Initialize VK Bridge for native VK Mini App integration
bridge.send('VKWebAppInit').catch(() => {
  // Not running inside VK — ignore in dev
});

const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.getElementById('root').style.overflow = 'visible';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
