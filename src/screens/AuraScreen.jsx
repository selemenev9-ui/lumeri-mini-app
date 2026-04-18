import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './AuraScreen.module.css';

export default function AuraScreen() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mountRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let stream = null;
    let animId = null;
    let renderer = null;

    const init = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: 390, height: 844 }
        });
        setHasPermission(true);

        const video = videoRef.current;
        video.srcObject = stream;
        await video.play();
        setIsLoading(false);

        const mount = mountRef.current;
        const W = mount.clientWidth;
        const H = mount.clientHeight;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(W, H);
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);
        canvasRef.current = renderer.domElement;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
        camera.position.z = 4;

        const COUNT = 300;
        const positions = new Float32Array(COUNT * 3);
        const speeds = [];

        for (let i = 0; i < COUNT; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = 0.8 + Math.random() * 1.5;
          positions[i * 3] = Math.cos(angle) * radius;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
          positions[i * 3 + 2] = Math.sin(angle) * radius * 0.3;
          speeds.push({
            angle,
            radius,
            speed: 0.003 + Math.random() * 0.008,
            ySpeed: (Math.random() - 0.5) * 0.005,
            life: Math.random()
          });
        }

        const geo = new THREE.BufferGeometry();
        const posAttr = new THREE.BufferAttribute(positions, 3);
        geo.setAttribute('position', posAttr);

        const mat = new THREE.ShaderMaterial({
          uniforms: { uTime: { value: 0 } },
          vertexShader: `
            uniform float uTime;
            varying float vLife;
            void main() {
              vLife = 0.5 + 0.5 * sin(uTime * 1.5 + position.x * 3.0);
              vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = (3.0 + vLife * 4.0) * (300.0 / -mvPos.z);
              gl_Position = projectionMatrix * mvPos;
            }
          `,
          fragmentShader: `
            varying float vLife;
            void main() {
              vec2 uv = gl_PointCoord - 0.5;
              float d = length(uv);
              if (d > 0.5) discard;
              float alpha = (1.0 - d * 2.0) * vLife * 0.85;
              vec3 col = mix(
                vec3(0.85, 0.65, 0.90),
                vec3(0.95, 0.85, 0.70),
                vLife
              );
              gl_FragColor = vec4(col, alpha);
            }
          `,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        });

        const points = new THREE.Points(geo, mat);
        scene.add(points);

        const clock = new THREE.Clock();

        const animate = () => {
          animId = requestAnimationFrame(animate);
          const t = clock.getElapsedTime();
          mat.uniforms.uTime.value = t;

          const pos = geo.attributes.position.array;
          for (let i = 0; i < COUNT; i++) {
            const s = speeds[i];
            s.angle += s.speed;
            s.life += 0.005;
            const pulse = 1.0 + 0.15 * Math.sin(t * 2 + i);
            pos[i * 3] = Math.cos(s.angle) * s.radius * pulse;
            pos[i * 3 + 1] += s.ySpeed;
            if (pos[i * 3 + 1] > 2) pos[i * 3 + 1] = -2;
            if (pos[i * 3 + 1] < -2) pos[i * 3 + 1] = 2;
            pos[i * 3 + 2] = Math.sin(s.angle) * s.radius * 0.4 * pulse;
          }
          geo.attributes.position.needsUpdate = true;
          points.rotation.y = t * 0.05;

          renderer.render(scene, camera);
        };
        animate();
      } catch (e) {
        setHasPermission(false);
        setIsLoading(false);
      }
    };

    init();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (renderer && mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  if (hasPermission === false) {
    return (
      <div className={styles.denied}>
        <p className={styles.deniedText}>Нужен доступ к камере</p>
        <p className={styles.deniedSub}>Разрешите доступ в настройках браузера</p>
      </div>
    );
  }

  return (
    <div className={styles.aura}>
      <video
        ref={videoRef}
        className={styles.video}
        playsInline
        muted
        autoPlay
      />
      <div ref={mountRef} className={styles.particles} />
      {isLoading && (
        <div className={styles.loading}>
          <p className={styles.loadingText}>инициализация ауры...</p>
        </div>
      )}
      <div className={styles.overlay}>
        <p className={styles.title}>ЛЮМЭРИ</p>
        <p className={styles.sub}>ваше сияние</p>
      </div>
    </div>
  );
}
