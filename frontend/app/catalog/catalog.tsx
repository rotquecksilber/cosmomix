'use client';

import React from 'react';
import styles from './page.module.css';
import Htag from '@/components/htag/htag';
import Banner from '@/components/banner/banner';
import Script from 'next/script';

export default function CatalogPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <Script
        id="catalog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'name': 'Каталог косметических продуктов COSMOMIX',
          'url': 'https://cosmomix.ru/catalog',
          'description': 'Каталог декоративной и уходовой косметики: продукты для губ, глаз, лица, а также продукты в разработке.',
          'mainEntity': [
            {
              '@type': 'Product',
              'name': 'Блеск для губ',
              'category': 'Жидкие продукты для губ'
            },
            {
              '@type': 'Product',
              'name': 'Масло для губ',
              'category': 'Жидкие продукты для губ'
            }
            // …остальные продукты
          ]
        })}
      </Script>


      <div className={styles.page}>
        <Banner title="Продукты" />

        {/* Жидкие продукты для губ */}
        <section className={styles.section} aria-labelledby="liquid-lips">
          <Htag tag="h2" color="gradient" uppercase className={styles.title} >
                        Жидкие продукты для губ
          </Htag>
          <ul className={styles.list}>
            {[
              { title: 'Блеск', description: 'Блеск придает губам сияние и объем, увлажняет и подчеркивает натуральный цвет.' },
              { title: 'Масло', description: 'Масло питает губы, смягчает их и защищает от пересыхания.' },
              { title: 'Плампер', description: 'Плампер создает эффект увеличения объема, делает губы более выразительными.' },
              { title: 'Бальзам', description: 'Бальзам ухаживает за губами, увлажняет и предотвращает шелушение.' },
              { title: 'Матовая помада фиксирующаяся', description: 'Матовая помада с долгой фиксацией, насыщенный цвет и бархатистая текстура.' },
              { title: 'Матовая помада blur', description: 'Помада с эффектом размытого контура, мягкая матовая текстура и комфортное нанесение.' }
            ].map((item) => (
              <li key={item.title}>
                <span className={styles.itemTitle}>{item.title}</span>
                <p className={styles.itemDescription}>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Продукты для губ в стике */}
        <section className={styles.section} aria-labelledby="stick-lips">
          <Htag tag="h2" color="gradient" uppercase className={styles.title} >
                        Продукты для губ в стике
          </Htag>
          <ul className={styles.list}>
            {[
              { title: 'Бальзам', description: 'Бальзам в стике ухаживает и защищает губы, легко наносится и комфортен в течение дня.' },
              { title: 'Помада матовая', description: 'Матовая помада в стике создает насыщенный цвет и стойкость на протяжении дня.' },
              { title: 'Помада блюр', description: 'Помада с эффектом размытого контура делает губы мягкими и естественными.' },
              { title: 'Помада увлажняющая', description: 'Увлажняющая помада питает губы, делает их мягкими и блестящими.' },
              { title: 'Помада глянцевая', description: 'Глянцевая помада придает губам сияние и визуальный объем.' }
            ].map((item) => (
              <li key={item.title}>
                <span className={styles.itemTitle}>{item.title}</span>
                <p className={styles.itemDescription}>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Продукты для глаз */}
        <section className={styles.section} aria-labelledby="eyes">
          <Htag tag="h2" color="gradient" uppercase className={styles.title} >
                        Продукты для глаз
          </Htag>
          <ul className={styles.list}>
            {[
              { title: 'Тушь классическая', description: 'Классическая тушь удлиняет и подкручивает ресницы, создавая естественный объем.' },
              { title: 'Тушь термо', description: 'Термоустойчивая тушь сохраняет форму ресниц даже при высокой температуре.' },
              { title: 'Тушь водостойкая', description: 'Водостойкая тушь не смазывается и держится весь день, даже при контакте с водой.' },
              { title: 'Подводка в баночке', description: 'Кремовая подводка легко наносится и создаёт чёткие линии с насыщенным цветом.' },
              { title: 'Гель для бровей', description: 'Гель фиксирует форму бровей, придавая естественный вид и аккуратность.' },
              { title: 'Кремовые тени', description: 'Кремовые тени легко растушёвываются, дают насыщенный цвет и стойкость.' },
              { title: 'Клей для ресниц', description: 'Клей надёжно фиксирует ресницы, безопасен для кожи и глаз.' }
            ].map((item) => (
              <li key={item.title}>
                <span className={styles.itemTitle}>{item.title}</span>
                <p className={styles.itemDescription}>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Продукты для лица */}
        <section className={styles.section} aria-labelledby="face">
          <Htag tag="h2" color="gradient" uppercase className={styles.title} >
                        Продукты для лица
          </Htag>
          <ul className={styles.list}>
            {[
              { title: 'Румяна в стике', description: 'Легко наносятся, создают естественный румянец.' },
              { title: 'Скульптор в стике', description: 'Помогает моделировать контур лица, создавая объём и глубину.' },
              { title: 'Хайлайтер в стике', description: 'Добавляет сияние на выступающие зоны лица.' },
              { title: 'Консилер легкий', description: 'Маскирует мелкие недостатки, легкая текстура.' },
              { title: 'Консилер плотный', description: 'Скрывает выраженные дефекты кожи, плотное покрытие.' },
              { title: 'Тональный крем bb', description: 'Выравнивает тон кожи, увлажняет и придает сияние.' },
              { title: 'Тон с натуральным финишем', description: 'Легкая текстура, естественный результат.' },
              { title: 'Жидкий скульптор', description: 'Моделирует лицо, легко растушёвывается.' },
              { title: 'Жидкие румяна', description: 'Придают свежий цвет щекам, легко смешиваются.' },
              { title: 'Жидкий хайлайтер', description: 'Создает сияние и подчеркнутые зоны лица.' },
              { title: 'Фиксатор макияжа', description: 'Закрепляет макияж на весь день.' },
              { title: 'База под макияж затирка пор силиконовая', description: 'Сглаживает поры и обеспечивает ровную поверхность для макияжа.' },
              { title: 'База под макияж увлажняющая', description: 'Увлажняет и подготавливает кожу к нанесению косметики.' },
              { title: 'База под макияж цветная', description: 'Выравнивает тон кожи и добавляет лёгкий оттенок.' },
              { title: 'Пудра для лица рассыпчатая прозрачная', description: 'Закрепляет макияж, матирует и фиксирует тон.' },
              { title: 'Тоники для лица', description: 'Освежает и увлажняет кожу, подготавливает к уходу.' },
              { title: 'Мицеллярная вода', description: 'Очищает кожу, удаляет макияж и загрязнения.' },
              { title: 'Двухфазное средство', description: 'Удаляет стойкий макияж и тушь водостойкую.' },
              { title: 'Умывашка для лица пенка', description: 'Мягко очищает кожу, не пересушивая её.' },
              { title: 'Гидрофильный бальзам жидкий', description: 'Растворяет макияж и загрязнения, увлажняет кожу.' },
              { title: 'Гидрофильный бальзам в твердом формате', description: 'Комфортно очищает кожу, легко наносится и смывается.' }
            ].map((item) => (
              <li key={item.title}>
                <span className={styles.itemTitle}>{item.title}</span>
                <p className={styles.itemDescription}>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* В стадии разработки */}
        <section className={styles.section} aria-labelledby="development">
          <Htag tag="h2" color="gradient" uppercase className={styles.title} >
                        В стадии разработки
          </Htag>
          <p className={styles.developmentText}>
                        Мы активно ведем разработки следующих продуктов:
          </p>
          <ul className={styles.list}>
            {[
              'Прессованные тени',
              'Прессованные пудры',
              'Прессованные румяна',
              'Прессованные скульпторы',
              'Прессованные бронзеры',
              'Запеченые пудры',
              'Запеченые румяна',
              'Запеченые хайлайтеры',
              'Запеченые бронзеры',
              'Карандаши гелевые для губ',
              'Карандаши гелевые для глаз',
              'Карандаши гелевые для бровей'
            ].map((item) => (
              <li key={item}>
                <span className={styles.itemTitle}>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
