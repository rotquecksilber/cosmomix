'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';

// ПРИМЕЧАНИЕ: Принимаем remountKey вместо key
export default function LavaLampScene({ remountKey }: { remountKey?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Используем remountKey в зависимостях
  useEffect(() => {
    if (!containerRef.current) return;

    const currentContainer = containerRef.current;
    let animationFrameId: number; // Оставляем 'let', т.к. переназначается в цикле

    // --- ИЗМЕНЕНИЕ: объявляем timeoutId с 'const' ---
    // Это устраняет предупреждение ESLint
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      animate();
    }, 50);

    // ... весь код инициализации сцены, камеры, рендерера и эффекта Marching Cubes ...

    const width = currentContainer.clientWidth;
    const height = currentContainer.clientHeight;
    // ... (весь код инициализации scene, camera, renderer, lighting, materials, blobs)
    // ...
    // ... (тут должна быть вся инициализация до функции animate)
    // ...

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0f0f0');

    const camera = new THREE.PerspectiveCamera(20, width / height, 1, 5000);
    camera.position.set(0, 0, 1500);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentContainer.appendChild(renderer.domElement);

    const pointLight = new THREE.PointLight('#e0d0ff', 1.7, 2, 1);
    pointLight.position.set(1000, 1000, 1000);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight('#ffffff', 1.5);
    scene.add(ambientLight);

    const colors = ['#d4bde7', '#e2beff', '#E2D5FF', '#c5adff', '#D4C6F0', '#A080D0'].map(c => new THREE.Color(c));
    const material = new THREE.MeshPhongMaterial({
      vertexColors: true,
      shininess: 70,
      specular: new THREE.Color('#ffffff'),
    });

    const resolution = 100;
    const effect = new MarchingCubes(resolution, material, true, true, 100000);
    effect.scale.set(700, 700, 700);
    effect.isolation = 100;
    scene.add(effect);

    type Blob = { x: number; y: number; z: number; size: number; speed: number; color: THREE.Color; xDir: number; };
    const blobs: Blob[] = [];
    const margin = 0.02;

    const randomX = () => margin + Math.random() * (1 - 2 * margin);
    const randomSpeed = (min: number, max: number) => min + Math.random() * (max - min);
    const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const randomXDir = () => (Math.random() - 0.5) * 0.0005;

    const createBlobs = (num: number, minSize: number, maxSize: number, minSpeed: number, maxSpeed: number) => {
      for (let i = 0; i < num; i++) {
        blobs.push({
          x: randomX(), y: randomX(), z: 0.5,
          size: minSize + Math.random() * (maxSize - minSize),
          speed: randomSpeed(minSpeed, maxSpeed),
          color: randomColor(), xDir: randomXDir(),
        });
      }
    };

    createBlobs(1, 1.0, 1.1, 0.0001, 0.0002);
    createBlobs(2, 0.7, 0.75, 0.0002, 0.0004);
    createBlobs(8, 0.5, 0.55, 0.0005, 0.0006);

    // --- Функция анимации ---
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      effect.reset();
      const subtract = 10;

      blobs.forEach(blob => {
        blob.y -= blob.speed;
        blob.x += blob.xDir;
        if (blob.x > 1 - margin || blob.x < margin) blob.xDir *= -1;
        if (blob.y < -margin) {
          blob.y += 1 + 2 * margin;
          blob.x = randomX();
          blob.xDir = randomXDir();
        }
        const fade = Math.min(1, Math.max(0, (blob.y + margin) / (2 * margin)));
        const ballColor = blob.color.clone().multiplyScalar(fade);
        effect.addBall(blob.x, blob.y, blob.z, blob.size, subtract, ballColor);
      });

      effect.update();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!currentContainer) return;
      const newWidth = currentContainer.clientWidth;
      const newHeight = currentContainer.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Запуск анимации с задержкой, используется const timeoutId ---

    // --- Функция очистки ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId); // Очистка теперь корректна

      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();

          if (child.material.isMaterial) {

            child.material.dispose();
          }
        }
      });
      scene.clear();

      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
    };
  }, [remountKey]); // Используем remountKey

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh', background: '#f0f0f0' }} />;
}
