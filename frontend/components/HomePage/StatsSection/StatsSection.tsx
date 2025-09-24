// components/sections/StatsSection.tsx
import styles from './StatsSection.module.css';
import Image from 'next/image';
import Htag from '@/components/htag/htag';
import { montserrat } from '@/lib/fonts';
import cn from 'classnames';

const numbers = [
  { number: '20+', text: 'Партнеров по всей России' },
  { number: '30+', text: 'Экспертов в команде' },
  { number: '200 кт', text: 'Производится ежемесячно' }
];

export default function StatsSection() {
  return (
    <section className={styles.numbers}>
      <div className={styles.numbers_wrapper}>
        <Image
          src="/home_page/numbers_top.png"
          alt="Женщина с образцами косметики для производства по контракту"
          width={602}
          height={10}
          className={styles.numbers_picture}
        />
        <Htag color="gradient" uppercase tag="h2" className={styles.numbers_h2}>
                    COSMOMIX В ЦИФРАХ
        </Htag>
        <ul className={styles.numbers_text}>
          {numbers.map(({ number, text }, index) => (
            <li key={`${number}-${index}`} className={styles.numbers_text__position}>
              <span className={cn(montserrat.className, styles.numbers_1line)}>{number}</span>
              <span className={styles.numbers_2line}>{text}</span>
            </li>
          ))}
        </ul>
        <Image
          src="/home_page/numbers_top.png"
          alt="Женщина с образцами косметики для производства по контракту"
          width={602}
          height={10}
          className={cn(styles.numbers_picture, styles.numbers_picture_top)}
        />
      </div>
    </section>
  );
}
