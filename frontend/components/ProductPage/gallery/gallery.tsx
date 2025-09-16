'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './gallery.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Htag from '@/components/htag/htag';

interface GalleryProps {
  images: string[];
  title: string;
}

export default function Gallery({ images, title }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 815);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRealIndex = (i: number) => {
    return ((i % images.length) + images.length) % images.length;
  };

  const next = () => {
    setIndex(prev => prev + 1);
    setActiveImageIndex(getRealIndex(index + 1));
  };

  const prev = () => {
    setIndex(prev => prev - 1);
    setActiveImageIndex(getRealIndex(index - 1));
  };

  // --- MOBILE swipe logic ---
  const [dragX, setDragX] = useState(0);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) {
      next();
    } else if (info.offset.x > 100) {
      prev();
    }
    setDragX(0);
  };

  const visibleImages = isMobile
    ? [images[getRealIndex(index)]] // только одна картинка
    : [
      images[getRealIndex(index)],
      images[getRealIndex(index + 1)],
      images[getRealIndex(index + 2)],
    ];

  return (
    <div className={styles.gallery}>
      {/* --- Текстовый блок --- */}
      <div className={styles.glass}>
        <div>
          <Htag color={'white'} tag={'h1'} uppercase={true}>
            {title}
          </Htag>
          <p className={styles.subtitle}>LIP PLUMPING GLOSS</p>
          <p className={styles.description}>
              Мгновенный объём и сияние — губы, о которых мечтают.
          </p>
        </div>

        <div className={styles.ingredients}>
          <span>Ментол</span>
          <span>Красный перец</span>
          <span>Витамин E</span>
        </div>

        <div>
            MAXIMIZER — блеск-плампер нового поколения. Активные экстракты ментола
            и красного перца усиливают микроциркуляцию, придавая губам естественный
            объём. Витамин Е питает и смягчает кожу. Формула может быть адаптирована
            под прозрачные, пигментированные или сияющие варианты.
        </div>
        <button className={styles.ctaButton}>Запросить формулу</button>
      </div>

      {/* --- Слайдер --- */}
      <div className={styles.slideRowWrapper}>
        {isMobile ? (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              className={styles.slideWrapper}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{ x: dragX }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <img
                src={visibleImages[0]}
                alt={`Слайд ${index + 1}`}
                className={`${styles.slide} ${styles.active}`}
              />

            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            className={styles.slideRow}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {visibleImages.map((src, i) => (
              <div
                key={i}
                className={styles.slideWrapper}
                onClick={() => setIndex(prev => prev + i)}
              >
                <img
                  src={src}
                  alt={`Слайд ${i + 1}`}
                  className={`${styles.slide} ${i === 0 ? styles.active : ''}`}
                />
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* --- Контролы --- */}
      <div className={styles.controls}>
        <div className={styles.progressWrapper}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${((activeImageIndex + 1) / images.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className={styles.buttons}>
          <span className={styles.counter}>
            {activeImageIndex + 1} / {images.length}
          </span>
          <div>
            <button onClick={prev}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={next}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
