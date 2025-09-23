'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Htag from '@/components/htag/htag';

export default function DecorativeCosmeticsPage() {
  return (
    <main className={styles.wrapper}>
      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Htag tag={'h1'} color={'gradient'} >Декоративная косметика будущего</Htag>
          <p>
                        Мы создаём продукты, которые задают тренды и соответствуют высоким
                        стандартам качества.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/contacts" className={styles.ctaButton}>
                            Связаться с нами
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Htag tag={'h2'} color={'gradient'}>Что такое декоративная косметика сегодня</Htag>

        </motion.div>
        <div className={styles.cards}>
          {[
            { icon: '🌿', text: 'Натуральные ингредиенты' },
            { icon: '✨', text: 'Актуальные тренды рынка' },
            { icon: '🔬', text: 'Научный подход и инновации' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <span>{item.icon}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Htag tag={'h2'} color={'gradient'}>  Наши компетенции </Htag>
        </motion.div>
        <div className={styles.grid}>
          {[
            'R&D лаборатория',
            'Инновационные ингредиенты',
            'Собственные технологии',
            'Международные стандарты качества',
          ].map((tile, i) => (
            <motion.div
              key={i}
              className={styles.tile}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {tile}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Htag tag={'h2'} color={'gradient'}>  Примеры продукции </Htag>
        </motion.div>
        <div className={styles.products}>
          {[
            {
              src: '/images/lipstick.jpg',
              alt: 'Помада',
              text: 'Помады — матовые и глянцевые',
            },
            {
              src: '/images/eyeshadow.jpg',
              alt: 'Тени',
              text: 'Тени — пудровые и кремовые',
            },
            {
              src: '/images/foundation.jpg',
              alt: 'Тональное средство',
              text: 'Тональные средства',
            },
            {
              src: '/images/highlighter.jpg',
              alt: 'Хайлайтер',
              text: 'Хайлайтеры',
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className={styles.product}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={p.src} alt={p.alt} width={300} height={200} />
              <p>{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Htag tag={'h2'} color={'gradient'}> Качество и экологичность </Htag>
        </motion.div>
        <motion.div
          className={styles.standards}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span>ISO</span>
          <span>GMP</span>
          <span>ECOCERT</span>
          <span>Vegan</span>
          <span>Cruelty Free</span>
        </motion.div>
      </section>

      {/* Blog / Insights */}
      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Htag tag={'h2'} color={'gradient'}>  Мы знаем рынок </Htag>
        </motion.div>
        <div className={styles.blog}>
          {[
            {
              title: 'Тренды декоративной косметики в 2025 году',
              text: 'Актуальные направления в индустрии, которые формируют спрос.',
            },
            {
              title: 'Как создать успешный продукт в категории помад',
              text: 'Ключевые аспекты разработки и позиционирования.',
            },
            {
              title: 'Будущее гибридных формул',
              text: 'Слияние ухода и макияжа в одном продукте.',
            },
          ].map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Htag tag={'h3'} color={'primary'}>{post.title}</Htag>
              <p>{post.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Htag tag={'h2'} color={'gradient'}>Хотите разработать уникальную линейку?</Htag>
          <p>
                        Расскажите нам о своём проекте — мы подготовим предложение под ваши
                        задачи.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/contacts" className={styles.ctaButton}>
                            Оставить заявку
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
