'use client';

import { useState, useEffect } from 'react';

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

  const toggleFull = () => setShowFull(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1035);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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
      <Htag tag={'h2'} color={'gradient'} uppercase={true} className={styles.title}>
                Ключевые активы
      </Htag>

      <p className={styles.subtitle}>
                Каждый компонент создан, чтобы заботиться о губах и делать их неотразимыми.
      </p>

      {/* Отображение свайпера или сетки в зависимости от размера экрана */}
      {isMobile ? (
        <div className={styles.galleryWrapper}>
          {ingredients.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={item.image} alt={item.name} width={80} height={80} />
              </div>
              <Htag tag={'h3'} color={'primary'} className={styles.name}>
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
                <Image src={item.image} alt={item.name} width={80} height={80}  className={
                  styles.image
                }/>
              </div>
              <div className={styles.name_wrapper}>
                <Htag tag={'h3'} color={'primary'} className={styles.name}>
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
