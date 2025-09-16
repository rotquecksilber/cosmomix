'use client';

import { useState } from 'react';
import styles from './FAQSection.module.css';
import cn from 'classnames';
import Htag from '@/components/htag/htag';
import Image from 'next/image';


export default function FAQSection() {

  const questionsData = [
    {
      question: 'Каковы минимальные объемы заказа для контрактного производства косметики?',
      answer: 'Минимальный объем зависит от типа продукции. Обычно начинается от 500–1000 единиц.'
    },
    {
      question: 'Как долго занимает процесс разработки и производства нового продукта?',
      answer: 'В среднем от 2 до 6 месяцев в зависимости от сложности формулы и упаковки.'
    },
    {
      question: 'Какие услуги включены в контрактное производство, и какие дополнительные услуги доступны?',
      answer: 'Мы предлагаем полный цикл: от разработки формулы и дизайна упаковки до производства и логистики.'
    },
    {
      question: 'Как обеспечивается контроль качества продукции в процессе производства?',
      answer: 'Каждый этап проходит внутренний контроль: сырье, упаковка, производство, хранение и отгрузка.'
    }
  ];


  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq}>
      <Image src={'/home_page/questions/logo.png'} alt={'контрактное производство косметики'} width={946} height={996} className={styles.logo}/>
      <Htag tag={'h2'} color={'gradient'} className={styles.title} uppercase={true}>Ответы на самые <span>частые вопросы</span></Htag>
      <div className={styles.accordion}>
        {questionsData.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => toggleAnswer(index)}
          >
            <Htag tag={'h3'} color={'primary'}  className={styles.question}>
              {item.question}
              <span className={cn(styles.icon, openIndex === index && styles.open)}>+</span>
            </Htag>
            <div
              className={styles.answerWrapper}
              style={{
                maxHeight: openIndex === index ? '300px' : '0',
              }}
            >
              <div className={styles.answer}>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
