import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AuraScreen.module.css';

/* ─── Aura types ─── */
const AURA_TYPES = [
  {
    name: 'Золотое сияние',
    desc: 'Энергия уверенности и внутренней силы. Вы излучаете тепло и притягиваете взгляды.',
    colors: [new THREE.Color(1.0, 0.85, 0.4), new THREE.Color(0.95, 0.7, 0.2)],
    accent: '#D4A534',
    warmShift: new THREE.Color(1.0, 0.9, 0.5),
  },
  {
    name: 'Розовый кварц',
    desc: 'Энергия нежности и гармонии. Вы дарите спокойствие всем вокруг.',
    colors: [new THREE.Color(1.0, 0.65, 0.78), new THREE.Color(0.92, 0.5, 0.7)],
    accent: '#E8829E',
    warmShift: new THREE.Color(1.0, 0.75, 0.65),
  },
  {
    name: 'Лавандовый свет',
    desc: 'Энергия интуиции и творчества. Ваша аура завораживает глубиной.',
    colors: [new THREE.Color(0.75, 0.6, 1.0), new THREE.Color(0.6, 0.4, 0.9)],
    accent: '#9B7BD4',
    warmShift: new THREE.Color(0.85, 0.65, 1.0),
  },
  {
    name: 'Жемчужный свет',
    desc: 'Энергия чистоты и обновления. Вы сияете изнутри, как утренняя роса.',
    colors: [new THREE.Color(0.9, 0.95, 1.0), new THREE.Color(0.8, 0.88, 0.98)],
    accent: '#C2D4E8',
    warmShift: new THREE.Color(1.0, 0.95, 0.9),
  },
  {
    name: 'Изумрудная аура',
    desc: 'Энергия роста и баланса. Вы наполняете пространство свежестью и жизнью.',
    colors: [new THREE.Color(0.4, 0.9, 0.7), new THREE.Color(0.25, 0.8, 0.6)],
    accent: '#5CC9A0',
    warmShift: new THREE.Color(0.6, 1.0, 0.7),
  },
];

/* Face oval landmark indices (MediaPipe) */
const FACE_OVAL = [
  10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288,
  397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136,
  172, 58, 132, 93, 234, 127, 162, 21, 54, 103, 67, 109,
];

/* Glow texture */
function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.2, 'rgba(255,255,255,0.7)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.2)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

/* ─── Scene builder ─── */
function createAuraScene(mount, auraType) {
  const W = mount.clientWidth;
  const H = mount.clientHeight;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.background = 'transparent';
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  const glowTex = makeGlowTexture();
  const [c1, c2] = auraType.colors;
  const LAYERS = 3;
  const COUNT = 180;

  const positions = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);
  const phases = new Float32Array(COUNT);
  const layersArr = new Float32Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = positions[i * 3 + 1] = positions[i * 3 + 2] = 0;
    const layer = i % LAYERS;
    layersArr[i] = layer;
    sizes[i] = layer === 0 ? 15 + Math.random() * 10
             : layer === 1 ? 10 + Math.random() * 15
             : 5 + Math.random() * 20;
    phases[i] = Math.random() * Math.PI * 2;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  geo.setAttribute('aLayer', new THREE.BufferAttribute(layersArr, 1));

  const particleMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }, uColor1: { value: c1 }, uColor2: { value: c2 },
      uWarmShift: { value: auraType.warmShift }, uGlow: { value: glowTex },
      uIntensity: { value: 0 }, uSmile: { value: 0 },
      uPixelRatio: { value: renderer.getPixelRatio() },
    },
    vertexShader: `
      attribute float aSize; attribute float aPhase; attribute float aLayer;
      uniform float uTime, uIntensity, uSmile, uPixelRatio;
      varying float vLife, vPhase, vLayer;
      void main() {
        vPhase = aPhase; vLayer = aLayer;
        float speed = 1.0 + uSmile * 0.5;
        vLife = 0.5 + 0.5 * sin(uTime * speed * 1.2 + aPhase * 6.28);
        float smileBoost = 1.0 + uSmile * 0.4;
        gl_PointSize = aSize * uIntensity * smileBoost * (1.0 + vLife * 0.5) * uPixelRatio;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor1, uColor2, uWarmShift;
      uniform sampler2D uGlow; uniform float uIntensity, uSmile;
      varying float vLife, vPhase, vLayer;
      void main() {
        vec4 tex = texture2D(uGlow, gl_PointCoord);
        float mixer = 0.5 + 0.5 * sin(vPhase * 3.14);
        vec3 col = mix(mix(uColor1, uColor2, mixer), uWarmShift, uSmile * 0.4);
        col += 0.15 * vLife;
        float layerA = vLayer == 0.0 ? 0.7 : vLayer == 1.0 ? 0.5 : 0.3;
        float alpha = tex.a * layerA * (0.3 + vLife * 0.6) * uIntensity * (1.0 + uSmile * 0.3);
        gl_FragColor = vec4(col, alpha);
      }
    `,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, particleMat);
  scene.add(points);

  // Soft glow behind
  const glowMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }, uColor: { value: c1 },
      uCenter: { value: new THREE.Vector2(0, 0) },
      uSize: { value: 0.3 }, uIntensity: { value: 0 }, uSmile: { value: 0 },
    },
    vertexShader: `varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `
      uniform float uTime; uniform vec3 uColor; uniform vec2 uCenter;
      uniform float uSize, uIntensity, uSmile; varying vec2 vUv;
      void main() {
        vec2 pos = (vUv - 0.5) * 2.0;
        float dist = length(pos - uCenter);
        float pulse = 1.0 + 0.08 * sin(uTime * 1.5);
        float glow = smoothstep(uSize * 2.5 * pulse, 0.0, dist);
        float alpha = glow * 0.2 * uIntensity * (1.0 + uSmile * 0.3);
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const glowPlane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), glowMat);
  glowPlane.position.z = -0.1;
  scene.add(glowPlane);

  // State
  const state = { intensity: 0, smile: 0, faceCenter: [0, 0], faceSize: 0.3, landmarks: null, destroyed: false };
  const clock = new THREE.Clock();
  let animId;

  const animate = () => {
    if (state.destroyed) return;
    animId = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    state.intensity = Math.min(state.intensity + 0.006, 1.0);

    particleMat.uniforms.uTime.value = t;
    particleMat.uniforms.uIntensity.value = state.intensity;
    particleMat.uniforms.uSmile.value = state.smile;
    glowMat.uniforms.uTime.value = t;
    glowMat.uniforms.uIntensity.value = state.intensity;
    glowMat.uniforms.uSmile.value = state.smile;
    glowMat.uniforms.uCenter.value.set(state.faceCenter[0], state.faceCenter[1]);
    glowMat.uniforms.uSize.value = state.faceSize;

    if (state.landmarks) {
      const pos = geo.attributes.position.array;
      const lm = state.landmarks;
      const ovalCount = FACE_OVAL.length;
      for (let i = 0; i < COUNT; i++) {
        const layer = i % LAYERS;
        const lmIdx = FACE_OVAL[i % ovalCount];
        const pt = lm[lmIdx];
        if (!pt) continue;
        const baseX = -(pt.x * 2 - 1);
        const baseY = -(pt.y * 2 - 1);
        const angle = phases[i] + t * (0.3 + layer * 0.15);
        const layerDist = (layer + 1) * 0.04 + 0.02;
        const wobble = Math.sin(t * 1.5 + phases[i] * 3) * 0.015;
        const dx = baseX - state.faceCenter[0];
        const dy = baseY - state.faceCenter[1];
        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        pos[i * 3] = baseX + (dx / len) * (layerDist + wobble) + Math.sin(angle) * 0.01;
        pos[i * 3 + 1] = baseY + (dy / len) * (layerDist + wobble) + Math.cos(angle) * 0.01;
        pos[i * 3 + 2] = 0;
      }
      geo.attributes.position.needsUpdate = true;
    }
    renderer.render(scene, camera);
  };
  animate();

  return {
    state,
    destroy: () => {
      state.destroyed = true;
      cancelAnimationFrame(animId);
      renderer.dispose(); glowTex.dispose(); geo.dispose();
      particleMat.dispose(); glowMat.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    },
  };
}

/* ─── MediaPipe init ─── */
async function initFaceLandmarker() {
  const vision = await FilesetResolver.forVisionTasks(
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
  );
  return FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
      delegate: 'GPU',
    },
    runningMode: 'VIDEO', numFaces: 1, outputFaceBlendshapes: true,
  });
}

/* ─── Component ─── */
export default function AuraScreen() {
  const videoRef = useRef(null);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const landmarkerRef = useRef(null);
  const trackingRef = useRef(null);
  const timerRef = useRef(null);

  const [phase, setPhase] = useState('intro');
  const [aura, setAura] = useState(null);
  const [cameraError, setCameraError] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const startScanning = useCallback(async () => {
    if (phase !== 'intro') return;
    setPhase('loading');
    setLoadingText('загрузка модели...');
    try {
      const landmarker = await initFaceLandmarker();
      landmarkerRef.current = landmarker;

      setLoadingText('подключение камеры...');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 720 }, height: { ideal: 1280 } },
      });
      const video = videoRef.current;
      if (!video) return;
      video.srcObject = stream;
      await video.play();
      setPhase('scanning');

      const chosen = AURA_TYPES[Math.floor(Math.random() * AURA_TYPES.length)];
      let faceDetected = false;
      let lastTime = -1;

      const trackFace = () => {
        if (!video || video.paused) return;
        const now = performance.now();
        if (now === lastTime) { trackingRef.current = requestAnimationFrame(trackFace); return; }
        lastTime = now;

        const result = landmarker.detectForVideo(video, now);
        if (result.faceLandmarks?.length > 0) {
          const landmarks = result.faceLandmarks[0];
          if (!faceDetected) {
            faceDetected = true;
            timerRef.current = setTimeout(() => {
              setAura(chosen);
              setPhase('reveal');
              if (mountRef.current) sceneRef.current = createAuraScene(mountRef.current, chosen);
            }, 1500);
          }
          if (sceneRef.current?.state) {
            const s = sceneRef.current.state;
            s.landmarks = landmarks;
            const nose = landmarks[1];
            s.faceCenter[0] = -(nose.x * 2 - 1);
            s.faceCenter[1] = -(nose.y * 2 - 1);
            const fh = landmarks[10], ch = landmarks[152];
            s.faceSize = Math.abs(ch.y - fh.y);
            if (result.faceBlendshapes?.length > 0) {
              const shapes = result.faceBlendshapes[0].categories;
              const sL = shapes.find(x => x.categoryName === 'mouthSmileLeft');
              const sR = shapes.find(x => x.categoryName === 'mouthSmileRight');
              const sv = ((sL?.score || 0) + (sR?.score || 0)) / 2;
              s.smile += (sv - s.smile) * 0.15;
            }
          }
        }
        trackingRef.current = requestAnimationFrame(trackFace);
      };
      trackingRef.current = requestAnimationFrame(trackFace);
    } catch (err) {
      console.error('Aura init error:', err);
      setCameraError(true);
      setPhase('intro');
    }
  }, [phase]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (trackingRef.current) cancelAnimationFrame(trackingRef.current);
    if (sceneRef.current?.destroy) sceneRef.current.destroy();
    if (landmarkerRef.current) landmarkerRef.current.close();
    if (videoRef.current?.srcObject) videoRef.current.srcObject.getTracks().forEach(t => t.stop());
  }, []);

  const retry = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (trackingRef.current) cancelAnimationFrame(trackingRef.current);
    if (sceneRef.current?.destroy) { sceneRef.current.destroy(); sceneRef.current = null; }
    if (videoRef.current?.srcObject) { videoRef.current.srcObject.getTracks().forEach(t => t.stop()); videoRef.current.srcObject = null; }
    setAura(null); setCameraError(false); setPhase('intro');
  }, []);

  if (phase === 'intro') {
    return (
      <div className={styles.container}>
        <div className={styles.introInner}>
          <div className={styles.iconWrap}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 4L26.5 18.5L38 8L28 21.5L44 24L28 26.5L38 40L26.5 29.5L24 44L21.5 29.5L10 40L20 26.5L4 24L20 21.5L10 8L21.5 18.5L24 4Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          <h2 className={styles.introTitle}>Раскройте своё сияние</h2>
          <p className={styles.introDesc}>Камера считает контуры вашего лица и покажет уникальную ауру, реагирующую на вашу мимику в реальном времени</p>
          {cameraError && <p className={styles.errorText}>Не удалось получить доступ к камере. Разрешите камеру в настройках браузера.</p>}
          <button className={styles.startBtn} onClick={startScanning}><span className={styles.startBtnText}>Начать</span></button>
        </div>
      </div>
    );
  }

  if (phase === 'loading') {
    return (
      <div className={styles.container}>
        <div className={styles.introInner}>
          <div className={styles.loadingSpinner} />
          <p className={styles.loadingText}>{loadingText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <video ref={videoRef} className={styles.video} playsInline muted autoPlay />
      <div ref={mountRef} className={styles.particles} />
      <AnimatePresence>
        {phase === 'scanning' && (
          <motion.div className={styles.scanOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.8 } }}>
            <div className={styles.scanRing}>
              <svg viewBox="0 0 120 120" className={styles.scanSvg}>
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeDasharray="40 300" className={styles.scanArc}/>
              </svg>
            </div>
            <p className={styles.scanText}>ищу ваше лицо...</p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {phase === 'reveal' && aura && (
          <motion.div className={styles.revealOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.0 }}>
            <motion.p className={styles.auraName} style={{ color: aura.accent }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }}>{aura.name}</motion.p>
            <motion.p className={styles.auraDesc} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.0 }}>{aura.desc}</motion.p>
            <motion.p className={styles.smileHint} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>попробуйте улыбнуться ✦</motion.p>
            <motion.button className={styles.retryBtn} onClick={retry} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>Считать заново</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.brand}><p className={styles.brandTitle}>ЛЮМЭРИ</p></div>
    </div>
  );
}
