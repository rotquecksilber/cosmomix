'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQSection.module.css';
import Htag from '@/components/htag/htag';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const questionsData: FAQItem[] = [
    {
      question: 'Каковы минимальные объемы заказа для контрактного производства косметики?',
      answer: 'Минимальный объем зависит от типа продукции. Обычно начинается от 5000 единиц.'
    },
    {
      question: 'Как долго занимает процесс разработки и производства нового продукта?',
      answer: 'В среднем от 6 до 12 месяцев в зависимости от сложности формулы и упаковки.'
    },
    {
      question: 'Какие услуги входят в контрактное производство и какие дополнительные возможности доступны?',
      answer: 'Мы предоставляем полный цикл услуг: от разработки формулы до серийного производства.'
    },

  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleItem = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq}>
      <Image
        src={'/home_page/questions/logo.png'}
        alt={'контрактное производство косметики'}
        width={946}
        height={996}
        className={styles.logo}
      />
      <Htag
        tag={'h2'}
        color={'gradient'}
        className={styles.title}
        uppercase={true}
      >
          Ответы на самые <span>частые вопросы</span>
      </Htag>

      <div className={styles.accordion}>
        {questionsData.map((item, index) => {
          const isActive = activeIndex === index;

          const handlers = isMobile
            ? { onClick: () => toggleItem(index) }
            : {
              onMouseEnter: () => setActiveIndex(index),
              onMouseLeave: () => setActiveIndex(null),
            };

          return (
            <motion.div
              key={index}
              className={styles.item}
              {...handlers}
              animate={{
                borderColor: isActive ? 'var(--primary)' : '#ddd',
                backgroundColor: isActive ? '#fff' : '#fafafa',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.questionWrapper}>
                <Htag
                  tag={'h3'}
                  color={'primary'}
                  className={styles.question}
                >
                  {item.question}
                </Htag>
                <motion.span
                  className={styles.icon}
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                      +
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    className={styles.answerWrapper}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
