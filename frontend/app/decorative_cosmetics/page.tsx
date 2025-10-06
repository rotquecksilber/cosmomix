'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Htag from '@/components/htag/htag';
import Button from '@/components/button/button';
import PopUpConnect from '@/components/PopUpConnect/PopUpConnect';
import Script from 'next/script';

export default function DecorativeCosmeticsPage() {
  return (
    <>
      {/* Schema для страницы */}
      <Script type="application/ld+json" id="decorative-cosmetics-schema" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'Декоративная косметика COSMOMIX',
          'brand': {
            '@type': 'Organization',
            'name': 'COSMOMIX',
            'logo': 'https://cosmo-mix.ru/logo.svg',
            'url': 'https://cosmo-mix.ru'
          },
          'description': 'Создание декоративной косметики, инновационные формулы, соответствие трендам и высоким стандартам качества.',
          'category': ['Помады', 'Блески для губ', 'Пудры', 'Тушь']
        })}
      </Script>

      <main className={styles.wrapper}>
        {/* Hero */}
        <section className={styles.hero} aria-label="Главный раздел о декоративной косметике">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Htag tag={'h1'} color={'gradient'}>Декоративная косметика</Htag>
            <p>
                            Мы создаём продукты, которые задают тренды и соответствуют высоким
                            стандартам качества.
            </p>

            <PopUpConnect
              trigger={
                <Button
                  color={'primary'}
                  type={'small'}
                  aria-label="Открыть форму для связи с нами"
                >
                                    Связаться с нами
                </Button>
              }
            />
          </motion.div>
        </section>

        {/* About */}
        <section className={styles.section} aria-labelledby="about-decorative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Htag tag={'h2'} color={'gradient'}>Что такое декоративная косметика сегодня</Htag>
          </motion.div>

          <div className={styles.cards}>
            {[
              { icon: '🌿', text: 'Современные формулы' },
              { icon: '✨', text: 'Соответствие актуальным трендам' },
              { icon: '🔬', text: 'Научный подход и инновации' },
            ].map((item, i) => (
              <motion.article
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span aria-hidden="true">{item.icon}</span>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Expertise */}
        <section className={styles.section} aria-labelledby="expertise">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Htag tag={'h2'} color={'gradient'}>Наши компетенции</Htag>
          </motion.div>

          <div className={styles.grid}>
            {[
              'R&D лаборатория',
              'Качественные ингредиенты',
              'Современные технологии',
              'Российские стандарты качества',
            ].map((tile, i) => (
              <motion.article
                key={i}
                className={styles.tile}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {tile}
              </motion.article>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className={styles.section} aria-labelledby="products">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Htag tag={'h2'} color={'gradient'} >Примеры продукции</Htag>
          </motion.div>

          <div className={styles.products}>
            {[
              { src: '/images/lipstick.jpg', alt: 'Помада', text: 'Любые виды помад' },
              { src: '/images/eyeshadow.jpg', alt: 'Блески', text: 'Блески для губ' },
              { src: '/images/foundation.jpg', alt: 'Рассыпчатые пудры', text: 'Рассыпчатые пудры' },
              { src: '/images/highlighter.jpg', alt: 'Тушь', text: 'Тушь' },
            ].map((p, i) => (
              <motion.article
                key={i}
                className={styles.product}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3}}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image src={p.src} alt={p.alt} width={300} height={200} />
                <p>{p.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalCta} aria-labelledby="cta">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Htag tag={'h2'} color={'gradient'} >Хотите разработать и выпустить собственный продукт?</Htag>
            <p>Расскажите нам о своём проекте — мы подготовим предложение под ваши задачи.</p>
            <PopUpConnect
              trigger={
                <Button
                  color={'primary'}
                  type={'small'}
                  className={styles.ctaButton}
                  aria-label="Оставить заявку на разработку продукта"
                >
                                    Оставить заявку
                </Button>
              }
            />
          </motion.div>
        </section>
      </main>
    </>
  );
}
