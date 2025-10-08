'use client';
import React from 'react';
import styles from './page.module.css';
import Banner from '@/components/banner/banner';
import Htag from '@/components/htag/htag';
import Script from 'next/script';

export default function ContractProductionPage() {
  return (
    <>
      {/* Schema для страницы */}
      <Script type="application/ld+json" id="contract-production-schema" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'COSMOMIX',
          'url': 'https://cosmo-mix.ru',
          'logo': 'https://cosmo-mix.ru/logo.svg',

          'department': [
            {
              '@type': 'Organization',
              'name': 'Лаборатория Cosmomix',
              'description': 'Разработка всех видов декоративной косметики, тестирование формул, подбор оттенков.'
            },
            {
              '@type': 'Organization',
              'name': 'Контрактное производство Cosmomix',
              'description': 'Все этапы производства декоративной косметики, фасовка, упаковка, сопровождение заказов.'
            }
          ]
        })}
      </Script>

      <main className={styles.page}>
        <Banner title="Контрактное производство" />

        <div className={styles.grid}>

          {/* 1. Возможности лаборатории */}
          <article className={styles.card}>
            <Htag tag="h2" color="gradient" className={styles.title}>
                            Возможности лаборатории Cosmomix
            </Htag>
            <ul className={styles.cardList}>
              <li>Разработка всех видов декоративной косметики, а также тестирование на стабильность.</li>
              <li>Разработка оттенков продукта.</li>
              <li>Тестирование формулы на совместимость с упаковкой.</li>
            </ul>
          </article>

          {/* 2. Возможности контрактного производства */}
          <article className={styles.card}>
            <Htag tag="h2" color="gradient" className={styles.title}>
                            Возможности контрактного производства Cosmomix
            </Htag>
            <ul className={styles.cardList}>
              <li>Все этапы производства любой декоративной косметики и ухода за лицом или отдельные операции, в том числе на основе давальческого сырья.</li>
              <li>Фасовка в первичную и вторичную упаковку: саше, монодозы, мини-форматы, пластиковые и алюминиевые тубы, все виды флаконов, банки, термоусадочный рукав, упаковка в картонные упаковки и стикеровка.</li>
            </ul>
          </article>

          {/* 3. Причины работать с нами */}
          <article className={styles.card}>
            <Htag tag="h2" color="gradient" className={styles.title}>
                            Причины работать с нами
            </Htag>
            <ul className={styles.cardList}>
              <li>Собственный импорт сырья из любой страны для лучших цен и сроков, постоянное исследование рынка инновационных ингредиентов.</li>
              <li>Современные молодые химики-технологи и колористы, экспертность команды Manlypro, регулярное повышение квалификации.</li>
              <li>Предлагаем готовые формулы, доработку существующих и новые разработки под заказ.</li>
              <li>Собственное свежее здание завода с высокопроизводительным оборудованием.</li>
              <li>Реализуем заказы от 5000 шт единиц на цвет, средние сроки 6–12 месяцев, быстрые запуски из библиотеки формул.</li>
              <li>Нацеленность на высокий уровень качества продукта и экспертный подход.</li>
            </ul>
          </article>

          {/* 4. Сопровождение */}
          <article className={styles.card}>
            <Htag tag="h2" color="gradient" className={styles.title}>
                            Сопровождение
            </Htag>
            <ul className={styles.cardList}>
              <li>Подбор и заказ упаковки в рамках Full service.</li>
              <li>Помощь в сертификации.</li>
              <li>Услуги дизайнера для запусков молодых брендов.</li>
            </ul>
          </article>

        </div>
      </main>
    </>
  );
}
