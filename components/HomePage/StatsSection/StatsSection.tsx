import styles from './StatsSection.module.css';
import Image from 'next/image';
import Htag from '@/components/htag/htag';
import { montserrat } from '@/lib/fonts';
import cn from 'classnames';
import React from 'react';

const numbers = [
  { number: '20+', text: 'партнеров по всей России' },
  { number: '500000+', text: 'единиц в месяц производственные возможности' },
  { number: '30+', text: 'экспертов\nв команде' }
];

export default function StatsSection() {
  return (
    <section className={styles.numbers} aria-labelledby="statsTitle">
      <div className={styles.numbers_wrapper}>
        {/* Верхняя декоративная линия */}
        <Image
          src="/home_page/numbers_top.webp"
          alt="Декоративная линия"
          width={602}
          height={10}
          className={styles.numbers_picture}
        />

        {/* Заголовок секции */}
        <Htag color="gradient" uppercase tag="h2" className={styles.numbers_h2}>
            COSMOMIX В ЦИФРАХ
        </Htag>

        {/* Список статистики */}
        <ul className={styles.numbers_text}>
          {numbers.map(({ number, text }, index) => (
            <li key={`${number}-${index}`} className={styles.numbers_text__position}>
              <span className={cn(montserrat.className, styles.numbers_1line)}>{number}</span>
              <span className={styles.numbers_2line}>
                {text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </li>
          ))}
        </ul>

        {/* Нижняя декоративная линия */}
        <Image
          src="/home_page/numbers_top.webp"
          alt="Декоративная линия"
          width={602}
          height={10}
          className={cn(styles.numbers_picture, styles.numbers_picture_top)}
        />
      </div>
    </section>
  );
}
