'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Htag from '@/components/htag/htag';
import Button from '@/components/button/button';
import PopUpConnect from '@/components/PopUpConnect/PopUpConnect';


import React from 'react';
import cn from 'classnames';
import {BackgroundVideo} from '@/components/HomePage/Video/Video';


export default function DecorativeCosmeticsPage() {

  return (
    <>



      <main className={styles.wrapper}>


        {/* Hero */}
        <section className={styles.heroBanner} aria-label="Главный раздел о декоративной косметике">
          <BackgroundVideo
            src="/decor/decor"
            className={styles.bannerVideo}
          />
          <BackgroundVideo
            src="/decor/decor_mobile"
            className={styles.bannerVideo_mobile}
          />
          <div className={styles.bannerOverlay}></div>

          <motion.div
            className={styles.heroContent}
            initial={{opacity: 0, y: -40}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
          >
            <Htag tag="h1" color="white" className={styles.h1} uppercase={true}>Декоративная косметика</Htag>
            <p>
                        Мы создаём продукты, которые задают тренды и соответствуют высоким
                        стандартам качества.
            </p>
            <PopUpConnect
              trigger={
                <Button color="soft" type="small" aria-label="Связаться с нами"
                  className={styles.button}>
                                Связаться с нами
                </Button>

              }
            />

          </motion.div>
        </section>

        {/* About */}
        <section className={cn(styles.section, styles.section_button)} aria-labelledby="about-decorative">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
            viewport={{once: true}}
          >
          </motion.div>

          <div className={styles.cards}>
            {[
              {icon: '/decor/1.webp', text: 'Современные формулы'},
              {icon: '/decor/2.webp', text: 'Соответствие актуальным трендам'},
              {icon: '/decor/3.webp', text: 'Научный подход и инновации'},
            ].map((item, i) => (
              <motion.article
                key={i}
                className={styles.card}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3}}
                viewport={{once: true}}
                whileHover={{scale: 1.05}}
              >
                <div className={styles.card_wrapper}>
                  <Image src={item.icon} alt={item.text} width={1184} height={864} aria-hidden="true"
                    className={styles.cards_image}/>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

        </section>

        {/* Expertise */}
        <section className={styles.section} aria-labelledby="expertise">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
            viewport={{once: true}}
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
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.3}}
                viewport={{once: true}}
                whileHover={{scale: 1.05}}
              >
                {tile}
              </motion.article>
            ))}
          </div>
        </section>

        <section className={cn(styles.section, styles.section_button)} aria-labelledby="about-decorative">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.3}}
            viewport={{once: true}}
          >
            <Htag tag={'h2'} color={'gradient'}>Примеры продукции</Htag>
          </motion.div>

          <div className={styles.cards}>
            {[
              {src: '/images/lipstick.webp', alt: 'Помада', text: 'Любые виды помад'},
              {src: '/images/eyeshadow.webp', alt: 'Блески', text: 'Блески для губ'},
              {src: '/images/foundation.webp', alt: 'Рассыпчатые пудры', text: 'Рассыпчатые пудры'},
              {src: '/images/highlighter.webp', alt: 'Тушь', text: 'Тушь'},
            ].map((item, i) => (
              <motion.article
                key={i}
                className={cn(styles.card, styles.pad)}
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.3}}
                viewport={{once: true}}
                whileHover={{scale: 1.05}}
              >
                <div className={styles.card_wrapper}>
                  <Image src={item.src} alt={item.text} width={1184} height={864} aria-hidden="true"
                    className={styles.cards_image}/>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <Button color={'primary'} type={'standard'} href={'/catalog'} className={styles.ctaButton_1}>Полный каталог</Button>
        </section>


        {/* Final CTA */}
        <section className={styles.finalCta} aria-labelledby="cta">
          <motion.div
            initial={{opacity: 0, scale: 0.95}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.3}}
            viewport={{once: true}}
          >
            <Htag tag={'h2'} color={'gradient'}>Хотите разработать и выпустить собственный продукт?</Htag>
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
