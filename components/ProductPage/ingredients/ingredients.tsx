'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ingredients.module.css';
import Image from 'next/image';
import Htag from '@/components/htag/htag';

interface Ingredient {
    name: string;
    description: string;
    image: string;
}

interface IngredientsProps {
    ingredients: Ingredient[];
}

export default function IngredientsCard({ ingredients }: IngredientsProps) {
  const [showFull, setShowFull] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const toggleFull = () => setShowFull(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1035);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // drag scroll
  useEffect(() => {
    const slider = galleryRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  const scrollToCard = (index: number) => {
    const slider = galleryRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll<HTMLElement>(`.${styles.card}`);
    const card = cards[index];
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const sliderRect = slider.getBoundingClientRect();

    const offset = cardRect.left - sliderRect.left - (sliderRect.width / 2 - cardRect.width / 2);

    slider.scrollBy({ left: offset, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const handleCardClick = (idx: number) => {
    if (idx === activeIndex - 1 || idx === activeIndex + 1) {
      scrollToCard(idx);
    }
  };

  const fullComposition = `
Aqua (Вода), Glycerin (Глицерин), Mentha Piperita Oil (Мятное масло), 
Capsicum Frutescens Extract (Экстракт красного перца), 
Tocopheryl Acetate (Витамин Е), Hyaluronic Acid (Гиалуроновая кислота), 
Collagen (Коллаген), Butyrospermum Parkii Butter (Масло ши), 
Ricinus Communis Seed Oil (Касторовое масло), 
Cocos Nucifera Oil (Кокосовое масло), 
Mica (Сияющие пигменты), Aroma (Ароматизатор).
  `;

  return (
    <section className={styles.container}>
      <Htag tag="h2" color="gradient" uppercase className={styles.title}>
                Ключевые активы
      </Htag>

      <p className={styles.subtitle}>
                Каждый компонент создан, чтобы заботиться о губах и делать их неотразимыми.
      </p>

      {isMobile ? (
        <div ref={galleryRef} className={`${styles.galleryWrapper} ${styles.draggable}`}>
          {ingredients.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.card} ${idx === activeIndex ? styles.active : ''}`}
              onClick={() => handleCardClick(idx)}
            >
              <div className={styles.imageWrapper}>
                <Image src={item.image} alt={item.name} width={80} height={80} />
              </div>
              <Htag tag="h3" color="primary" className={styles.name}>
                {item.name}
              </Htag>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.cards}>
          {ingredients.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={item.image} alt={item.name} width={80} height={80} className={styles.image}/>
              </div>
              <div className={styles.name_wrapper}>
                <Htag tag="h3" color="primary" className={styles.name}>
                  {item.name}
                </Htag>
              </div>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      )}

      <div className={styles.fullWrapper}>
        <div className={`${styles.fullComposition} ${showFull ? styles.open : ''}`}>
          <p className={styles.fullText}>{fullComposition}</p>
        </div>

        <button onClick={toggleFull} className={styles.toggleBtn}>
          {showFull ? 'Закрыть' : 'Посмотреть полный состав'}
        </button>
      </div>
    </section>
  );
}
