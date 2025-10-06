'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './StagesSection.module.css';
import Image from 'next/image';
import Htag from '@/components/htag/htag';

const steps = [
  { title: 'Первичная консультация', number: 1, description: 'Обсуждение ваших потребностей и целей', image: '/home_page/numbers/1.jpg' },
  { title: 'Заполнение брифа', number: 2, description: 'Совместное заполнение брифа, чтобы определить основные требования к продукции и дизайну', image: '/home_page/numbers/2.jpg' },
  { title: 'Заключение договора', number: 3, description: 'Официальное заключение договора о сотрудничестве и контрактном производстве косметики между вашей компанией и COSMOMIX', image: '/home_page/numbers/4.jpg' },
  { title: 'Разработка концепции', number: 4, description: 'Разработка цветов (для декоративной косметики), добавление ароматов и тд', image: '/home_page/numbers/3.jpg' },
  { title: 'Тестирование продуктов', number: 5, description: 'Тестирование в термокамере на старение, замораживание и тд', image: '/home_page/numbers/5.jpg' },
  { title: 'Производство', number: 6, description: 'Осуществление производства косметических продуктов с соблюдением всех стандартов качества и безопасности', image: '/home_page/numbers/6.jpg' },
  { title: 'Упаковка и доставка', number: 7, description: 'Упаковка готовой продукции и доставка в указанное вами место назначения', image: '/home_page/numbers/7.jpg' },
];

const CARD_OFFSET_X = 220;
const CARD_OFFSET_Y = 30;
const SCALE_FACTOR = 0.05;

const CardStack: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const moveToNext = () => {
    if (activeIndex < steps.length - 1) setActiveIndex((prev) => prev + 1);
  };
  const moveToPrev = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1);
  };

  return (
    <div className={styles.mobileSwiperWrap} role="region" aria-label="Этапы производства COSMOMIX">
      <ul className={styles.cardWrapStyle}>
        {steps.map((card, index) => {
          const isActive = index === activeIndex;
          const offsetFromActive = index - activeIndex;
          const x = offsetFromActive * CARD_OFFSET_X;
          const y = offsetFromActive === 0 ? CARD_OFFSET_Y : 0;
          const scale = 1 - Math.abs(offsetFromActive) * SCALE_FACTOR;
          const zIndex = isActive ? 100 : steps.length - Math.abs(offsetFromActive);

          return (
            <motion.li
              key={card.number}
              className={styles.slide}
              role="group"
              aria-label={`Этап ${card.number}: ${card.title}`}
              animate={{ x, y, scale, zIndex }}
              transition={{ type: 'spring', stiffness: 300, damping: 50 }}
              drag={isActive ? 'x' : false}
              dragConstraints={{ left: -100, right: 100 }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -50) moveToNext();
                else if (info.offset.x > 50) moveToPrev();
              }}
            >
              <div className={styles.mobileCard}>
                <div className={styles.title_wrapper}>
                  <Image
                    alt={`Этап ${card.number}`}
                    src={card.image}
                    width={96}
                    height={96}
                    className={styles.step_number}
                  />
                  <h3 className={styles.title}>{card.title}</h3>
                </div>
                <p className={styles.step_description}>{card.description}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default function StagesSection() {
  return (
    <section className={styles.stages} aria-labelledby="stages-heading">
      {/* --- DESKTOP --- */}
      <div className={styles.desktopVersion}>
        <div className={styles.stages_wrapper}>
          <Htag color={'gradient'} tag={'h2'} uppercase className={styles.title}>
              Этапы производства
          </Htag>
          <div className={styles.grid}>
            {steps.map(({ title, number, description, image }) => (
              <div key={number} className={styles.step} role="group" aria-label={`Этап ${number}: ${title}`}>
                <Image alt={`Этап ${number}`} src={image} width={138} height={144} className={styles.step_number} />
                <div>
                  <Htag color={'primary'} tag={'h3'} uppercase={false} className={styles.title}>
                    {title}
                  </Htag>
                  <p className={styles.step_description}>{description}</p>
                </div>
              </div>
            ))}
          </div>
          <Image alt={'Линия под этапами'} src={'/home_page/stages_line.png'} height={7} width={995} />
        </div>
        <Image alt={'Этапы сотрудничества'} src={'/home_page/stages_photo.png'} width={1260} height={1860} className={styles.stages_photo} />
      </div>

      {/* --- MOBILE --- */}
      <div className={styles.mobileVersion}>
        <Image alt={'Этапы сотрудничества'} src={'/home_page/stages_photo.png'} width={900} height={1200} className={styles.stages_photo_mobile} />
        <Htag color={'gradient'} tag={'h2'} uppercase className={styles.mobileTitle}>
            Этапы производства
        </Htag>
        <CardStack />
      </div>
    </section>
  );
}
