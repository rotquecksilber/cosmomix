// app/catalog/page.tsx
'use client';

import React from 'react';
import styles from './page.module.css';
import Htag from '@/components/htag/htag';
import Banner from '@/components/banner/banner';

export default function CatalogPage() {
  return (
    <div className={styles.page}>
      <Banner title="Продукты" />

      {/* Жидкие продукты для губ */}
      <section className={styles.section}>
        <Htag tag="h2" color="gradient" uppercase className={styles.title}>
            Жидкие продукты для губ
        </Htag>
        <ul className={styles.list}>
          <li>
            <span className={styles.itemTitle}>Блеск</span>
            <p className={styles.itemDescription}>
                Блеск придает губам сияние и объем, увлажняет и подчеркивает натуральный цвет.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Масло</span>
            <p className={styles.itemDescription}>
                Масло питает губы, смягчает их и защищает от пересыхания.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Плампер</span>
            <p className={styles.itemDescription}>
                Плампер создает эффект увеличения объема, делает губы более выразительными.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Бальзам</span>
            <p className={styles.itemDescription}>
                Бальзам ухаживает за губами, увлажняет и предотвращает шелушение.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Матовая помада фиксирующаяся</span>
            <p className={styles.itemDescription}>
                Матовая помада с долгой фиксацией, насыщенный цвет и бархатистая текстура.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Матовая помада blur</span>
            <p className={styles.itemDescription}>
                Помада с эффектом размытого контура, мягкая матовая текстура и комфортное нанесение.
            </p>
          </li>
        </ul>
      </section>

      {/* Продукты для губ в стике */}
      <section className={styles.section}>
        <Htag tag="h2" color="gradient" uppercase className={styles.title}>
            Продукты для губ в стике
        </Htag>
        <ul className={styles.list}>
          <li>
            <span className={styles.itemTitle}>Бальзам</span>
            <p className={styles.itemDescription}>
                Бальзам в стике ухаживает и защищает губы, легко наносится и комфортен в течение дня.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Помада матовая</span>
            <p className={styles.itemDescription}>
                Матовая помада в стике создает насыщенный цвет и стойкость на протяжении дня.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Помада блюр</span>
            <p className={styles.itemDescription}>
                Помада с эффектом размытого контура делает губы мягкими и естественными.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Помада увлажняющая</span>
            <p className={styles.itemDescription}>
                Увлажняющая помада питает губы, делает их мягкими и блестящими.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Помада глянцевая</span>
            <p className={styles.itemDescription}>
                Глянцевая помада придает губам сияние и визуальный объем.
            </p>
          </li>
        </ul>
      </section>

      {/* Продукты для глаз */}
      <section className={styles.section}>
        <Htag tag="h2" color="gradient" uppercase className={styles.title}>
            Продукты для глаз
        </Htag>
        <ul className={styles.list}>
          <li>
            <span className={styles.itemTitle}>Тушь классическая</span>
            <p className={styles.itemDescription}>
                Классическая тушь удлиняет и подкручивает ресницы, создавая естественный объем.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Тушь термо</span>
            <p className={styles.itemDescription}>
                Термоустойчивая тушь сохраняет форму ресниц даже при высокой температуре.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Тушь водостойкая</span>
            <p className={styles.itemDescription}>
                Водостойкая тушь не смазывается и держится весь день, даже при контакте с водой.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Подводка в баночке</span>
            <p className={styles.itemDescription}>
                Кремовая подводка легко наносится и создаёт чёткие линии с насыщенным цветом.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Гель для бровей</span>
            <p className={styles.itemDescription}>
                Гель фиксирует форму бровей, придавая естественный вид и аккуратность.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Кремовые тени</span>
            <p className={styles.itemDescription}>
                Кремовые тени легко растушёвываются, дают насыщенный цвет и стойкость.
            </p>
          </li>
          <li>
            <span className={styles.itemTitle}>Клей для ресниц</span>
            <p className={styles.itemDescription}>
                Клей надёжно фиксирует ресницы, безопасен для кожи и глаз.
            </p>
          </li>
        </ul>
      </section>

      {/* Продукты для лица */}
      <section className={styles.section}>
        <Htag tag="h2" color="gradient" uppercase className={styles.title}>
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
      <section className={styles.section}>
        <Htag tag="h2" color="gradient" uppercase className={styles.title}>
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
              <p className={styles.itemDescription}>

              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
