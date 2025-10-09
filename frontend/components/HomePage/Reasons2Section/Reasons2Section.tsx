'use client';

import styles from './Reasons2Section.module.css';
import Htag from '@/components/htag/htag';
import { montserrat } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Reasons2Section() {
  const reasons = [
    {
      title: 'Индивидуальный подход',
      description:
          'Мы готовы к работе с различными потребностями и запросами наших клиентов. COSMOMIX предлагает гибкие условия сотрудничества и возможность разработки индивидуальных решений под конкретные требования заказчика.',
      image: '/home_page/reasons/1.png',
      link: '/individual_approach',
    },
    {
      title: 'Инновационные решения',
      description:
          'COSMOMIX постоянно инвестирует в исследования и разработки, чтобы быть на передовой в индустрии косметики. Мы внедряем новые технологии и инновационные рецептуры, чтобы создавать продукцию, которая соответствует последним тенденциям и требованиям рынка.',
      image: '/home_page/reasons/2.png',
      link: '/innovations',
    },
    {
      title: 'Долгосрочные отношения',
      description:
          'Мы стремимся к установлению долгосрочных партнерских отношений с нашими клиентами, основанных на взаимном доверии и взаимной выгоде. Наша команда профессионалов всегда готова поддержать и помочь нашим клиентам на каждом этапе сотрудничества.',
      image: '/home_page/reasons/3.png',
      link: '/relations',
    },
  ];

  return (
    <section className={styles.reasons} aria-labelledby="reasons-heading">
      <div className={styles.reasons_wrapper}>
        <Htag tag="h2" color="gradient" uppercase>
            Причины выбрать нас
        </Htag>

        <div className={styles.reasons_grid}>
          {reasons.map((reason, index) => (
            <Link
              key={index}
              href={reason.link}
              className={
                index % 2 === 0
                  ? styles.gradientBorder
                  : styles.gradientBorder_reverse
              }
              aria-label={`Подробнее о разделе ${reason.title}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.reasons_photo}
                  src={reason.image}
                  alt={reason.title}
                  fill
                  priority
                />
                <div className={styles.overlayContent}>
                  <Htag tag="h3" color="primary" uppercase>
                    {reason.title}
                  </Htag>
                  <p className={styles.reasons_text}>
                    <span className={montserrat.className}>COSMOMIX</span>{' '}
                    {reason.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
