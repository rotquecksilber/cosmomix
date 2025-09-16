'use client';

import { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes.js';

export default function LavaLampScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Сцена и камера
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0f0f0'); // Более светлый белый фон

    const camera = new THREE.PerspectiveCamera(20, width / height, 1, 5000);
    camera.position.set(0, 0, 1500);

    // Рендерер
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Освещение
    const pointLight = new THREE.PointLight('#e0d0ff', 1.7, 2, 1); // Более яркий и чуть фиолетовый свет
    pointLight.position.set(1000, 1000, 1000);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight('#ffffff', 1.5); // Увеличиваем амбиентное освещение
    scene.add(ambientLight);

    // Цвета капель - добавим более светлые и разнообразные оттенки
    const colors = [
      '#d4bde7',
      '#e2beff',
      '#E2D5FF',
      '#c5adff',
      '#D4C6F0',
      '#A080D0',
    ].map(c => new THREE.Color(c));

    // Материал с поддержкой света
    const material = new THREE.MeshPhongMaterial({
      vertexColors: true,
      shininess: 70,
      specular: new THREE.Color('#ffffff'),
    });

    // MarchingCubes
    const resolution = 100;
    const effect = new MarchingCubes(resolution, material, true, true, 100000);
    effect.scale.set(700, 700, 700); // Равный масштаб по всем осям
    effect.isolation = 100;
    scene.add(effect);

    // Создаем капли
    type Blob = {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      color: THREE.Color;
      xDir: number;
    };

    const blobs: Blob[] = [];
    const numLargeBlobs = 1;
    const numMediumBlobs = 2;
    const numSmallBlobs = 8;
    const margin = 0.02; // отступ от границ

    const randomX = () => margin + Math.random() * (1 - 2 * margin);
    const randomSpeed = (min: number, max: number) => min + Math.random() * (max - min);
    const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const randomXDir = () => (Math.random() - 0.5) * 0.0005;

    // Большие шарики
    for (let i = 0; i < numLargeBlobs; i++) {
      blobs.push({
        x: randomX(),
        y: randomX(),
        z: 0.5,
        size: 1 + Math.random() * 0.1,
        speed: randomSpeed(0.0001, 0.0002),
        color: randomColor(),
        xDir: randomXDir(),
      });
    }

    // Средние шарики
    for (let i = 0; i < numMediumBlobs; i++) {
      blobs.push({
        x: randomX(),
        y: randomX(),
        z: 0.5,
        size: 0.7 + Math.random() * 0.05,
        speed: randomSpeed(0.0002, 0.0004),
        color: randomColor(),
        xDir: randomXDir(),
      });
    }

    // Маленькие шарики
    for (let i = 0; i < numSmallBlobs; i++) {
      blobs.push({
        x: randomX(),
        y: randomX(),
        z: 0.5,
        size: 0.5 + Math.random() * 0.05,
        speed: randomSpeed(0.0005, 0.0006),
        color: randomColor(),
        xDir: randomXDir(),
      });
    }



    const animate = () => {


      effect.reset();
      const subtract = 10;

      blobs.forEach(blob => {
        // Движение вниз с горизонтальным колебанием
        blob.y -= blob.speed;
        blob.x += blob.xDir;

        // Отскок от боков
        if (blob.x > 1 - margin || blob.x < margin) blob.xDir *= -1;

        // Циклическое движение по вертикали
        if (blob.y < -margin) {
          blob.y += 1 + 2 * margin;
          blob.x = randomX();
          blob.xDir = randomXDir();
        }

        // Плавное появление/исчезновение сверху/снизу
        const fade = Math.min(1, Math.max(0, (blob.y + margin) / (2 * margin)));
        const ballColor = blob.color.clone().multiplyScalar(fade);

        effect.addBall(blob.x, blob.y, blob.z, blob.size, subtract, ballColor);
      });

      effect.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Обработка ресайза
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh', background: '#f0f0f0' }} />;
}

