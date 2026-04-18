import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AuraScreen.module.css';

const WASM_CANDIDATES = [
  `${import.meta.env.BASE_URL}mediapipe/wasm`,
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
];

const MODEL_CANDIDATES = [
  `${import.meta.env.BASE_URL}mediapipe/face_landmarker.task`,
  'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task'
];

const VIDEO_FIT_MODE = 'cover';

function withTimeout(promise, ms, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`${label} timeout (${ms}ms)`)), ms);
    })
  ]);
}

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

function mapLandmarkToViewport(point, videoEl, containerEl, fitMode = VIDEO_FIT_MODE) {
  if (!point || !videoEl || !containerEl) {
    return { x: point?.x ?? 0.5, y: point?.y ?? 0.5, z: point?.z ?? 0 };
  }

  const vw = videoEl.videoWidth || 1;
  const vh = videoEl.videoHeight || 1;
  const cw = containerEl.clientWidth || 1;
  const ch = containerEl.clientHeight || 1;

  const videoAspect = vw / vh;
  const containerAspect = cw / ch;

  let nx = point.x;
  let ny = point.y;

  if (fitMode === 'cover') {
    if (videoAspect > containerAspect) {
      const scale = ch / vh;
      const scaledW = vw * scale;
      const cropX = (scaledW - cw) * 0.5;
      nx = (point.x * scaledW - cropX) / cw;
    } else if (videoAspect < containerAspect) {
      const scale = cw / vw;
      const scaledH = vh * scale;
      const cropY = (scaledH - ch) * 0.5;
      ny = (point.y * scaledH - cropY) / ch;
    }
  } else {
    if (videoAspect > containerAspect) {
      const scale = cw / vw;
      const scaledH = vh * scale;
      const padY = (ch - scaledH) * 0.5;
      ny = (point.y * scaledH + padY) / ch;
    } else if (videoAspect < containerAspect) {
      const scale = ch / vh;
      const scaledW = vw * scale;
      const padX = (cw - scaledW) * 0.5;
      nx = (point.x * scaledW + padX) / cw;
    }
  }

  return { x: clamp01(nx), y: clamp01(ny), z: point.z ?? 0 };
}

function getSmileScore(categories = []) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < categories.length; i++) {
    const item = categories[i];
    if (item.categoryName === 'mouthSmileLeft') left = item.score || 0;
    else if (item.categoryName === 'mouthSmileRight') right = item.score || 0;
  }
  return (left + right) * 0.5;
}

function getRuntimeProfile() {
  const ua = navigator.userAgent || '';
  const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 0;

  let particleCount = 180;
  let pixelRatioCap = 2;
  let detectIntervalMs = 20;
  let preferNaturalFov = false;

  if (isIOS) {
    particleCount = 150;
    pixelRatioCap = 1.7;
    detectIntervalMs = 28;
    preferNaturalFov = true;
  }

  if (cores <= 4 || (memory && memory <= 4)) {
    particleCount = Math.min(particleCount, 120);
    pixelRatioCap = Math.min(pixelRatioCap, 1.4);
    detectIntervalMs = Math.max(detectIntervalMs, 34);
  }

  if (cores >= 8 && !isIOS) {
    particleCount = 180;
    pixelRatioCap = 2;
    detectIntervalMs = 18;
  }

  return { isIOS, particleCount, pixelRatioCap, detectIntervalMs, preferNaturalFov };
}

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
function createAuraScene(mount, auraType, profile) {
  const W = mount.clientWidth || 1;
  const H = mount.clientHeight || 1;
  const pixelRatio = Math.min(window.devicePixelRatio, profile.pixelRatioCap ?? 2);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.background = 'transparent';
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;

  const [c1, c2] = auraType.colors;
  const RIBBON_COUNT = 6;
  const WINDOW_POINTS = 6;
  const TRAIL_SEGMENTS = 30;
  const OVAL_COUNT = FACE_OVAL.length;
  const INNER_WIDTH = 0.034;
  const OUTER_WIDTH = 0.012;

  const ribbons = [];
  const allGeometries = [];
  const allMaterials = [];
  const allTargets = [];

  const state = {
    intensity: 0,
    smile: 0,
    faceCenter: [0, 0],
    faceSize: 0.3,
    landmarks: null,
    destroyed: false,
  };

  const ndcFromLandmark = (pt) => ({
    x: -(pt.x * 2 - 1),
    y: -(pt.y * 2 - 1),
  });

  const makeRibbonGeometry = () => {
    const vertexCount = TRAIL_SEGMENTS * 2;
    const positions = new Float32Array(vertexCount * 3);
    const normals = new Float32Array(vertexCount * 3);
    const uvs = new Float32Array(vertexCount * 2);
    const trail = new Float32Array(vertexCount);
    const indices = new Uint16Array((TRAIL_SEGMENTS - 1) * 6);

    for (let s = 0; s < TRAIL_SEGMENTS; s++) {
      const t = s / (TRAIL_SEGMENTS - 1);
      const headToTail = 1 - t;
      const i0 = s * 2;
      const i1 = i0 + 1;

      normals[i0 * 3 + 2] = 1;
      normals[i1 * 3 + 2] = 1;

      uvs[i0 * 2] = 0;
      uvs[i0 * 2 + 1] = t;
      uvs[i1 * 2] = 1;
      uvs[i1 * 2 + 1] = t;

      trail[i0] = headToTail;
      trail[i1] = headToTail;

      if (s < TRAIL_SEGMENTS - 1) {
        const base = s * 6;
        const a = i0;
        const b = i1;
        const c = i0 + 2;
        const d = i1 + 2;
        indices[base] = a;
        indices[base + 1] = c;
        indices[base + 2] = b;
        indices[base + 3] = b;
        indices[base + 4] = c;
        indices[base + 5] = d;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geometry.setAttribute('aTrail', new THREE.BufferAttribute(trail, 1));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    return geometry;
  };

  for (let i = 0; i < RIBBON_COUNT; i++) {
    const innerLayer = i < RIBBON_COUNT / 2;
    const start = Math.floor((i / RIBBON_COUNT) * OVAL_COUNT);
    const geometry = makeRibbonGeometry();
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: c1.clone() },
        uColorB: { value: c2.clone() },
        uIntensity: { value: 0 },
        uSmile: { value: 0 },
      },
      vertexShader: `
        attribute float aTrail;
        varying float vTrail;
        varying vec3 vNormalW;
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vNormalW = normalize(mat3(modelMatrix) * normal);
          vTrail = aTrail;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uIntensity;
        uniform float uSmile;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        varying float vTrail;
        varying vec3 vNormalW;
        varying vec3 vWorldPos;
        void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPos);
          float fresnel = clamp(dot(viewDirection, normalize(vNormalW)), 0.0, 1.0);
          float holo = 0.5 + 0.5 * sin((1.0 - fresnel) * 8.0 + uTime * 0.3 + vTrail * 6.0);
          vec3 color = mix(uColorA, uColorB, holo);
          color += 0.2 * vec3(vTrail);
          float tail = smoothstep(0.0, 1.0, vTrail);
          float alpha = (0.12 + tail * 0.88) * (0.35 + 0.65 * uIntensity) * (1.0 + uSmile * 0.3);
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const trail = new Float32Array(TRAIL_SEGMENTS * 2);
    ribbons.push({
      mesh,
      geometry,
      material,
      trail,
      anchors: new Float32Array(WINDOW_POINTS * 2),
      seeded: false,
      start,
      phase: Math.random() * Math.PI * 2,
      innerLayer,
      upper: i === 0 || i === 1,
    });

    allGeometries.push(geometry);
    allMaterials.push(material);
  }

  const rtScene = new THREE.WebGLRenderTarget(Math.max(1, Math.floor(W * pixelRatio)), Math.max(1, Math.floor(H * pixelRatio)), {
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    depthBuffer: false,
    stencilBuffer: false,
  });
  const bloomW = Math.max(1, Math.floor(W * pixelRatio * 0.5));
  const bloomH = Math.max(1, Math.floor(H * pixelRatio * 0.5));
  const rtBloomA = new THREE.WebGLRenderTarget(bloomW, bloomH, {
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    depthBuffer: false,
    stencilBuffer: false,
  });
  const rtBloomB = new THREE.WebGLRenderTarget(bloomW, bloomH, {
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    depthBuffer: false,
    stencilBuffer: false,
  });
  allTargets.push(rtScene, rtBloomA, rtBloomB);

  const postScene = new THREE.Scene();
  const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const postQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
  postScene.add(postQuad);
  allGeometries.push(postQuad.geometry);

  const blurShader = {
    uniforms: {
      tDiffuse: { value: null },
      uTexelSize: { value: new THREE.Vector2(1 / bloomW, 1 / bloomH) },
      uDirection: { value: new THREE.Vector2(1, 0) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec2 uTexelSize;
      uniform vec2 uDirection;
      varying vec2 vUv;
      void main() {
        vec2 stepUV = uTexelSize * uDirection;
        vec4 color = vec4(0.0);
        color += texture2D(tDiffuse, vUv - stepUV * 4.0) * 0.016216;
        color += texture2D(tDiffuse, vUv - stepUV * 3.0) * 0.054054;
        color += texture2D(tDiffuse, vUv - stepUV * 2.0) * 0.121621;
        color += texture2D(tDiffuse, vUv - stepUV * 1.0) * 0.194594;
        color += texture2D(tDiffuse, vUv) * 0.227027;
        color += texture2D(tDiffuse, vUv + stepUV * 1.0) * 0.194594;
        color += texture2D(tDiffuse, vUv + stepUV * 2.0) * 0.121621;
        color += texture2D(tDiffuse, vUv + stepUV * 3.0) * 0.054054;
        color += texture2D(tDiffuse, vUv + stepUV * 4.0) * 0.016216;
        gl_FragColor = color;
      }
    `,
  };

  const blurMaterial = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(blurShader.uniforms),
    vertexShader: blurShader.vertexShader,
    fragmentShader: blurShader.fragmentShader,
    depthWrite: false,
    depthTest: false,
    transparent: true,
  });

  const compositeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      tScene: { value: rtScene.texture },
      tBloom: { value: rtBloomA.texture },
      uTime: { value: 0 },
      uFaceCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uFaceSize: { value: 0.3 },
      uBloomStrength: { value: 0.4 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tScene;
      uniform sampler2D tBloom;
      uniform float uTime;
      uniform vec2 uFaceCenter;
      uniform float uFaceSize;
      uniform float uBloomStrength;
      varying vec2 vUv;
      void main() {
        float dist = distance(vUv, uFaceCenter);
        float radius = max(0.12, uFaceSize * 0.75);
        float inner = smoothstep(radius * 0.35, radius * 0.75, dist);
        float outer = 1.0 - smoothstep(radius * 0.95, radius * 1.5, dist);
        float ring = inner * outer;
        float wave = sin(vUv.y * 25.0 + uTime * 2.0) * 0.003 * ring;
        vec2 distortUv = vec2(vUv.x + wave, vUv.y);
        vec4 base = texture2D(tScene, distortUv);
        vec4 bloom = texture2D(tBloom, vUv) * uBloomStrength;
        gl_FragColor = vec4(base.rgb + bloom.rgb, max(base.a, bloom.a));
      }
    `,
    depthWrite: false,
    depthTest: false,
    transparent: true,
  });
  allMaterials.push(blurMaterial, compositeMaterial);

  let browBaseline = null;
  const clock = new THREE.Clock();
  let animId;

  const updateRibbonFromLandmarks = (ribbon, lm, t) => {
    let avgX = 0;
    let avgY = 0;
    let count = 0;

    for (let i = 0; i < WINDOW_POINTS; i++) {
      const idx = FACE_OVAL[(ribbon.start + i) % OVAL_COUNT];
      const pt = lm[idx];
      if (!pt) continue;
      const ndc = ndcFromLandmark(pt);
      ribbon.anchors[i * 2] = ndc.x;
      ribbon.anchors[i * 2 + 1] = ndc.y;
      avgX += ndc.x;
      avgY += ndc.y;
      count++;
    }

    if (count < 2) return false;
    avgX /= count;
    avgY /= count;

    const spin = (0.9 + ribbon.start * 0.015) * (1 + state.smile * 0.3);
    const orbit = (ribbon.innerLayer ? 0.012 : 0.02) + state.smile * 0.008;
    const headX = avgX + Math.sin(t * spin + ribbon.phase) * orbit;
    const headY = avgY + Math.cos(t * spin + ribbon.phase) * orbit;

    if (!ribbon.seeded) {
      for (let s = 0; s < TRAIL_SEGMENTS; s++) {
        const u = (s / (TRAIL_SEGMENTS - 1)) * (WINDOW_POINTS - 1);
        const i0 = Math.floor(u);
        const i1 = Math.min(WINDOW_POINTS - 1, i0 + 1);
        const mix = u - i0;
        const x0 = ribbon.anchors[i0 * 2];
        const y0 = ribbon.anchors[i0 * 2 + 1];
        const x1 = ribbon.anchors[i1 * 2];
        const y1 = ribbon.anchors[i1 * 2 + 1];
        ribbon.trail[s * 2] = x0 + (x1 - x0) * mix;
        ribbon.trail[s * 2 + 1] = y0 + (y1 - y0) * mix;
      }
      ribbon.seeded = true;
    }

    for (let s = TRAIL_SEGMENTS - 1; s > 0; s--) {
      ribbon.trail[s * 2] = ribbon.trail[(s - 1) * 2];
      ribbon.trail[s * 2 + 1] = ribbon.trail[(s - 1) * 2 + 1];
    }
    ribbon.trail[0] = headX;
    ribbon.trail[1] = headY;

    for (let s = 1; s < TRAIL_SEGMENTS; s++) {
      const u = (s / (TRAIL_SEGMENTS - 1)) * (WINDOW_POINTS - 1);
      const i0 = Math.floor(u);
      const i1 = Math.min(WINDOW_POINTS - 1, i0 + 1);
      const mix = u - i0;
      const targetX = ribbon.anchors[i0 * 2] + (ribbon.anchors[i1 * 2] - ribbon.anchors[i0 * 2]) * mix;
      const targetY = ribbon.anchors[i0 * 2 + 1] + (ribbon.anchors[i1 * 2 + 1] - ribbon.anchors[i0 * 2 + 1]) * mix;
      const follow = 0.1 + (1 - s / (TRAIL_SEGMENTS - 1)) * 0.2;
      ribbon.trail[s * 2] = THREE.MathUtils.lerp(ribbon.trail[s * 2], targetX, follow);
      ribbon.trail[s * 2 + 1] = THREE.MathUtils.lerp(ribbon.trail[s * 2 + 1], targetY, follow);
    }

    return true;
  };

  const updateRibbonGeometry = (ribbon, browLift) => {
    const posAttr = ribbon.geometry.getAttribute('position');
    const trailAttr = ribbon.geometry.getAttribute('aTrail');
    const pos = posAttr.array;
    const trail = trailAttr.array;

    const baseWidth = ribbon.innerLayer ? INNER_WIDTH : OUTER_WIDTH;
    const smileWidth = 1 + state.smile * 0.5;

    for (let s = 0; s < TRAIL_SEGMENTS; s++) {
      const idx2 = s * 2;
      const cx = ribbon.trail[idx2];
      const cy = ribbon.trail[idx2 + 1];

      const prevS = Math.max(0, s - 1) * 2;
      const nextS = Math.min(TRAIL_SEGMENTS - 1, s + 1) * 2;
      const dx = ribbon.trail[nextS] - ribbon.trail[prevS];
      const dy = ribbon.trail[nextS + 1] - ribbon.trail[prevS + 1];
      const dLen = Math.hypot(dx, dy) || 1;
      const nx = -dy / dLen;
      const ny = dx / dLen;

      const t = s / (TRAIL_SEGMENTS - 1);
      const headToTail = 1 - t;
      const taper = 0.35 + 0.65 * headToTail;
      let width = baseWidth * taper * smileWidth;

      if (ribbon.upper) {
        width *= 1 + browLift * 0.45 * headToTail;
      }

      width = Math.max(width, ribbon.innerLayer ? 0.006 : 0.003);

      const centerOffset = ribbon.upper ? browLift * 0.01 * headToTail : 0;
      const toCenterX = cx - state.faceCenter[0];
      const toCenterY = cy - state.faceCenter[1];
      const centerLen = Math.hypot(toCenterX, toCenterY) || 1;
      const ux = toCenterX / centerLen;
      const uy = toCenterY / centerLen;
      const px = cx + ux * centerOffset;
      const py = cy + uy * centerOffset;

      const i0 = s * 2;
      const i1 = i0 + 1;

      pos[i0 * 3] = px - nx * width;
      pos[i0 * 3 + 1] = py - ny * width;
      pos[i0 * 3 + 2] = ribbon.innerLayer ? 0.001 : 0;

      pos[i1 * 3] = px + nx * width;
      pos[i1 * 3 + 1] = py + ny * width;
      pos[i1 * 3 + 2] = ribbon.innerLayer ? 0.001 : 0;

      trail[i0] = headToTail;
      trail[i1] = headToTail;
    }

    posAttr.needsUpdate = true;
    trailAttr.needsUpdate = true;
  };

  const resize = () => {
    const rw = mount.clientWidth || 1;
    const rh = mount.clientHeight || 1;
    const pr = Math.min(window.devicePixelRatio, profile.pixelRatioCap ?? 2);
    renderer.setPixelRatio(pr);
    renderer.setSize(rw, rh);
    rtScene.setSize(Math.max(1, Math.floor(rw * pr)), Math.max(1, Math.floor(rh * pr)));
    const bw = Math.max(1, Math.floor(rw * pr * 0.5));
    const bh = Math.max(1, Math.floor(rh * pr * 0.5));
    rtBloomA.setSize(bw, bh);
    rtBloomB.setSize(bw, bh);
    blurMaterial.uniforms.uTexelSize.value.set(1 / bw, 1 / bh);
  };
  window.addEventListener('resize', resize);

  const animate = () => {
    if (state.destroyed) return;
    animId = requestAnimationFrame(animate);

    const t = clock.getElapsedTime();
    state.intensity = Math.min(state.intensity + 0.008, 1.0);

    let browLift = 0;
    if (state.landmarks?.length) {
      const browPt = state.landmarks[10];
      if (browPt) {
        if (browBaseline == null) browBaseline = browPt.y;
        browBaseline = browBaseline * 0.985 + browPt.y * 0.015;
        browLift = THREE.MathUtils.clamp((browBaseline - browPt.y) * 8.0, 0, 1);
      }

      for (let i = 0; i < ribbons.length; i++) {
        const ok = updateRibbonFromLandmarks(ribbons[i], state.landmarks, t);
        if (ok) updateRibbonGeometry(ribbons[i], browLift);
      }
    }

    for (let i = 0; i < ribbons.length; i++) {
      ribbons[i].material.uniforms.uTime.value = t;
      ribbons[i].material.uniforms.uIntensity.value = state.intensity;
      ribbons[i].material.uniforms.uSmile.value = state.smile;
    }

    renderer.setRenderTarget(rtScene);
    renderer.clear();
    renderer.render(scene, camera);

    renderer.setRenderTarget(rtBloomA);
    renderer.clear();
    renderer.render(scene, camera);

    postQuad.material = blurMaterial;
    blurMaterial.uniforms.tDiffuse.value = rtBloomA.texture;
    blurMaterial.uniforms.uDirection.value.set(1, 0);
    renderer.setRenderTarget(rtBloomB);
    renderer.clear();
    renderer.render(postScene, postCamera);

    blurMaterial.uniforms.tDiffuse.value = rtBloomB.texture;
    blurMaterial.uniforms.uDirection.value.set(0, 1);
    renderer.setRenderTarget(rtBloomA);
    renderer.clear();
    renderer.render(postScene, postCamera);

    postQuad.material = compositeMaterial;
    compositeMaterial.uniforms.uTime.value = t;
    compositeMaterial.uniforms.uFaceCenter.value.set(state.faceCenter[0] * 0.5 + 0.5, state.faceCenter[1] * 0.5 + 0.5);
    compositeMaterial.uniforms.uFaceSize.value = state.faceSize * 1.5;
    compositeMaterial.uniforms.uBloomStrength.value = 0.4 * (1 + state.smile * 0.4) * state.intensity;

    renderer.setRenderTarget(null);
    renderer.clear();
    renderer.render(postScene, postCamera);
  };

  animate();

  return {
    state,
    destroy: () => {
      state.destroyed = true;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);

      for (let i = 0; i < allTargets.length; i++) allTargets[i].dispose();
      for (let i = 0; i < allGeometries.length; i++) allGeometries[i].dispose();
      for (let i = 0; i < allMaterials.length; i++) allMaterials[i].dispose();

      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    },
  };
}

/* ─── MediaPipe init ─── */
async function initFaceLandmarker() {
  const errors = [];

  for (const wasmPath of WASM_CANDIDATES) {
    let vision = null;
    try {
      vision = await withTimeout(FilesetResolver.forVisionTasks(wasmPath), 12000, `wasm init: ${wasmPath}`);
    } catch (e) {
      errors.push(`WASM(${wasmPath}) -> ${e?.message || e}`);
      continue;
    }

    for (const modelPath of MODEL_CANDIDATES) {
      for (const delegate of ['GPU', 'CPU']) {
        try {
          return await withTimeout(
            FaceLandmarker.createFromOptions(vision, {
              baseOptions: {
                modelAssetPath: modelPath,
                delegate
              },
              runningMode: 'VIDEO',
              numFaces: 1,
              outputFaceBlendshapes: true
            }),
            15000,
            `landmarker init: ${delegate}/${modelPath}`
          );
        } catch (e) {
          errors.push(`FaceLandmarker(${delegate}, ${modelPath}) -> ${e?.message || e}`);
        }
      }
    }
  }

  throw new Error(`Unable to initialize FaceLandmarker. ${errors.join(' | ')}`);
}

async function requestCameraStream(profile) {
  const naturalPrimary = { facingMode: 'user' };
  const naturalSecondary = { facingMode: { ideal: 'user' } };
  const stableFallback = {
    facingMode: 'user',
    width: { ideal: 1280 },
    height: { ideal: 720 },
    frameRate: { ideal: 30, max: 60 }
  };

  const candidates = profile.preferNaturalFov
    ? [naturalPrimary, naturalSecondary, stableFallback, true]
    : [naturalPrimary, stableFallback, naturalSecondary, true];

  const errors = [];
  for (const video of candidates) {
    try {
      return await withTimeout(navigator.mediaDevices.getUserMedia({ video }), 12000, 'camera init');
    } catch (e) {
      errors.push(e?.message || String(e));
    }
  }

  throw new Error(`Unable to get camera stream. ${errors.join(' | ')}`);
}

/* ─── Component ─── */
export default function AuraScreen() {
  const videoRef = useRef(null);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const landmarkerRef = useRef(null);
  const trackingRef = useRef(null);
  const timerRef = useRef(null);
  const sessionRef = useRef(0);
  const runtimeProfileRef = useRef(getRuntimeProfile());

  const [phase, setPhase] = useState('intro');
  const [aura, setAura] = useState(null);
  const [cameraError, setCameraError] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const stopRuntime = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (trackingRef.current) {
      cancelAnimationFrame(trackingRef.current);
      trackingRef.current = null;
    }
    if (sceneRef.current?.destroy) {
      sceneRef.current.destroy();
      sceneRef.current = null;
    }
    if (landmarkerRef.current) {
      try {
        landmarkerRef.current.close();
      } catch {
      }
      landmarkerRef.current = null;
    }
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      videoRef.current.srcObject = null;
    }
  }, []);

  const startScanning = useCallback(async () => {
    if (phase !== 'intro') return;
    const sessionId = ++sessionRef.current;
    stopRuntime();
    setAura(null);
    setCameraError(false);
    setPhase('loading');
    setLoadingText('загрузка модели...');
    try {
      const landmarker = await initFaceLandmarker();
      if (sessionRef.current !== sessionId) {
        try {
          landmarker.close();
        } catch {
        }
        return;
      }
      landmarkerRef.current = landmarker;

      setLoadingText('подключение камеры...');
      const stream = await requestCameraStream(runtimeProfileRef.current);
      if (sessionRef.current !== sessionId) {
        stream.getTracks().forEach((t) => t.stop());
        return;
      }
      const video = videoRef.current;
      if (!video) throw new Error('Video element is not mounted');
      video.srcObject = stream;
      const track = stream.getVideoTracks()[0];
      if (track?.applyConstraints) {
        try {
          await track.applyConstraints({ advanced: [{ focusMode: 'continuous' }] });
        } catch {
        }
      }
      await video.play();
      if (sessionRef.current !== sessionId) {
        stream.getTracks().forEach((t) => t.stop());
        return;
      }
      setPhase('scanning');
      setLoadingText('');

      const chosen = AURA_TYPES[Math.floor(Math.random() * AURA_TYPES.length)];
      let faceDetected = false;
      let lastTime = -1;
      let lastDetectAt = 0;
      let detectIntervalMs = runtimeProfileRef.current.detectIntervalMs;
      let overloadScore = 0;

      const trackFace = () => {
        if (sessionRef.current !== sessionId) return;
        if (!video || video.paused || video.readyState < 2) {
          trackingRef.current = requestAnimationFrame(trackFace);
          return;
        }
        const now = performance.now();
        if (now === lastTime) { trackingRef.current = requestAnimationFrame(trackFace); return; }
        lastTime = now;
        if (now - lastDetectAt < detectIntervalMs) {
          trackingRef.current = requestAnimationFrame(trackFace);
          return;
        }
        lastDetectAt = now;

        let result;
        try {
          const detectStartedAt = performance.now();
          result = landmarker.detectForVideo(video, now);
          const detectCost = performance.now() - detectStartedAt;
          if (detectCost > 26) {
            overloadScore = Math.min(overloadScore + 1, 8);
          } else {
            overloadScore = Math.max(overloadScore - 1, 0);
          }
          if (overloadScore >= 5 && detectIntervalMs < 50) {
            detectIntervalMs += 4;
            overloadScore = 2;
          } else if (overloadScore === 0 && detectIntervalMs > runtimeProfileRef.current.detectIntervalMs) {
            detectIntervalMs = Math.max(runtimeProfileRef.current.detectIntervalMs, detectIntervalMs - 2);
          }
        } catch (e) {
          console.error('Face tracking error:', e);
          setCameraError(true);
          setPhase('intro');
          return;
        }
        if (result.faceLandmarks?.length > 0) {
          const landmarks = result.faceLandmarks[0];
          const mappedLandmarks = landmarks.map((pt) => mapLandmarkToViewport(pt, video, mountRef.current, VIDEO_FIT_MODE));
          if (!faceDetected) {
            faceDetected = true;
            timerRef.current = setTimeout(() => {
              if (sessionRef.current !== sessionId) return;
              setAura(chosen);
              setPhase('reveal');
              if (mountRef.current) sceneRef.current = createAuraScene(mountRef.current, chosen, runtimeProfileRef.current);
            }, 1500);
          }
          if (sceneRef.current?.state) {
            const s = sceneRef.current.state;
            s.landmarks = mappedLandmarks;
            const nose = mappedLandmarks[1];
            s.faceCenter[0] = 1 - nose.x * 2;
            s.faceCenter[1] = 1 - nose.y * 2;
            const fh = mappedLandmarks[10];
            const ch = mappedLandmarks[152];
            s.faceSize = Math.max(0.16, Math.min(0.65, Math.abs(ch.y - fh.y)));
            if (result.faceBlendshapes?.length > 0) {
              const sv = getSmileScore(result.faceBlendshapes[0].categories);
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
      setLoadingText('');
    }
  }, [phase, stopRuntime]);

  useEffect(() => () => {
    sessionRef.current += 1;
    stopRuntime();
  }, [stopRuntime]);

  const retry = useCallback(() => {
    sessionRef.current += 1;
    stopRuntime();
    setAura(null);
    setCameraError(false);
    setLoadingText('');
    setPhase('intro');
  }, [stopRuntime]);

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

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        playsInline
        muted
        autoPlay
        style={phase === 'loading' ? { opacity: 0, pointerEvents: 'none' } : undefined}
      />
      <div ref={mountRef} className={styles.particles} />
      {phase === 'loading' && (
        <div className={styles.introInner}>
          <div className={styles.loadingSpinner} />
          <p className={styles.loadingText}>{loadingText}</p>
        </div>
      )}
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
