'use client';

import React from 'react';
import styles from './page.module.css';
import Htag from '@/components/htag/htag';
import Banner from '@/components/banner/banner';
import Script from 'next/script';
import LavaLampScene from '@/components/LavaScene/LavaScene';
import {usePathname} from 'next/navigation';


export default function CatalogPage() {

  const pathname = usePathname();
  return (
    <>


      <title>Каталог продукции — COSMOMIX</title>
      <meta
        name="description"
        content="Каталог декоративной косметики, произведённой COSMOMIX. Современные формулы, трендовые текстуры, стойкие пигменты и качественные ингредиенты."
      />



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

      <Script type="application/ld+json" id="breadcrumbs-catalog-schema" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Главная',
              'item': 'https://cosmo-mix.ru'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Каталог продукции',
              'item': 'https://cosmo-mix.ru/catalog'
            }
          ]
        })}
      </Script>



      <div className={styles.page}>
        <Banner title="Продукты"/>
        <div className={styles.background}>
          <LavaLampScene remountKey={pathname}/>
          <div className={styles.liquidGlass}></div>
        </div>
        {/* Жидкие продукты для губ */}
        <section className={styles.section} aria-labelledby="liquid-lips">
          <Htag tag="h2" color="gradient" uppercase className={styles.title}>
                        Жидкие продукты для губ
          </Htag>
          <ul className={styles.list}>
            {[
              {
                title: 'Блеск',
                description: 'Блеск придает губам сияние и объем, увлажняет и подчеркивает натуральный цвет.'
              },
              {title: 'Масло', description: 'Масло питает губы, смягчает их и защищает от пересыхания.'},
              {
                title: 'Плампер',
                description: 'Плампер создает эффект увеличения объема, делает губы более выразительными.'
              },
              {
                title: 'Бальзам',
                description: 'Бальзам ухаживает за губами, увлажняет и предотвращает шелушение.'
              },
              {
                title: 'Матовая помада фиксирующаяся',
                description: 'Водостойкая матовая помада с насыщенным цветом и бархатистой текстурой.'
              },
              {
                title: 'Матовая помада с блюр-эффектом',
                description: 'Жидкая комфортная помада с блюр-эффектом, мягкой матовой текстурой и насыщенным цветом.'
              }
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
          <Htag tag="h2" color="gradient" uppercase className={styles.title}>
                        Продукты для губ в стике
          </Htag>
          <ul className={styles.list}>
            {[
              {
                title: 'Бальзам',
                description: 'Бальзам в стике ухаживает и защищает губы, легко наносится и комфортен в течение дня.'
              },
              {
                title: 'Матовая помада',
                description: 'Матовая помада в стике создает насыщенный цвет и стойкость на протяжении дня.'
              },
              {
                title: 'Помада с блюр-эффектом',
                description: 'Комфортная помада в стике с блюр-эффектом, мягкой матовой текстурой и насыщенным цветом.'
              },
              {
                title: 'Увлажняющая помада',
                description: 'Увлажняющая помада питает губы, делает их мягкими и блестящими.'
              },
              {
                title: 'Глянцевая помада',
                description: 'Глянцевая помада придает губам сияние и визуальный объем.'
              }
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
          <Htag tag="h2" color="gradient" uppercase className={styles.title}>
                        Продукты для глаз
          </Htag>
          <ul className={styles.list}>
            {[
              {
                title: 'Классическая тушь',
                description: 'Классическая тушь удлиняет и подкручивает ресницы, создавая естественный объем.'
              },
              {
                title: 'Термотушь',
                description: 'Термотушь - тушь со стойкой текстурой, которая смывается тёплой водой.'
              },
              {
                title: 'Водостойкая тушь',
                description: 'Водостойкая тушь не смазывается и держится весь день, даже при контакте с водой.'
              },
              {
                title: 'Водостойкая подводка',
                description: 'Кремовая текстура с насыщенным цветом и стойким эффектом в баночке.'
              },
              {
                title: 'Гель для бровей',
                description: 'Гель фиксирует форму бровей, придавая естественный вид и аккуратность.'
              },
              {
                title: 'Кремовые тени',
                description: 'Водостойкая комфортная текстура с насыщенным цветом.'
              },
              {
                title: 'Клей для ресниц',
                description: 'Клей надёжно фиксирует ресницы, безопасен для кожи и глаз.'
              }
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
          <Htag tag="h2" color="gradient" uppercase className={styles.title}>
                        Продукты для лица
          </Htag>
          <ul className={styles.list}>
            {[
              {title: 'Румяна в стике', description: 'Легко наносятся, создают естественный румянец.'},
              {
                title: 'Скульптор в стике',
                description: 'Помогает моделировать контур лица, создавая объём и глубину.'
              },
              {title: 'Хайлайтер в стике', description: 'Добавляет сияние на выступающие зоны лица.'},
              {title: 'Лёгкий консилер', description: 'Маскирует мелкие недостатки, легкая текстура.'},
              {title: 'Плотный консилер', description: 'Скрывает выраженные несовершенства кожи, высокопигментированная стойкая текстура.'},
              {title: 'Тональный bb-крем', description: 'Выравнивает тон кожи, увлажняет и придает сияние.'},
              {title: 'Тональный крем с натуральным финишем', description: 'Легкая текстура, естественный результат.'},
              {title: 'Жидкий скульптор', description: 'Моделирует лицо, легко растушёвывается.'},
              {title: 'Жидкие румяна', description: 'Придают свежий вид, легко растушёвывается.'},
              {title: 'Жидкий хайлайтер', description: 'Создает деликатное сияние.'},
              {title: 'Спрей-фиксатор макияжа', description: 'Закрепляет макияж на весь день.'},
              {
                title: 'Силиконовая база под макияж (затирка пор)',
                description: 'Сглаживает поры, матирует и подготавливает кожу к макияжу.'
              },
              {
                title: 'Увлажняющая база под макияж',
                description: 'Увлажняет и подготавливает кожу к нанесению косметики.'
              },
              {
                title: 'Цветная база под макияж',
                description: 'Нейтрализует нежелательные оттенки кожи, подготавливает лицо к макияжу.'
              },
              {
                title: 'Прозрачная рассыпчатая пудра для лица',
                description: 'Закрепляет макияж, матирует и создаёт "soft-focus" эффект.'
              },
              {title: 'Тоники для лица', description: 'Средства ухода для разных типов кожи.'},
              {title: 'Мицеллярная вода', description: 'Очищает кожу, удаляет макияж и загрязнения.'},
              {title: 'Двухфазное средство для снятия макияжа', description: 'Средство для удаления стойкого и водостойкого макияжа.'},
              {title: 'Пенка для умывания лица', description: 'Мягко очищает кожу, не пересушивая её.'},
              {
                title: 'Жидкий гидрофильный бальзам',
                description: 'Средство для снятия водостойкого макияжа.'
              },
              {
                title: 'Гидрофильный бальзам в твердом формате',
                description: 'Тающая гидрофильная текстура для снятия водостойкого макияжа.'
              }
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
              'Запеченные пудры',
              'Запеченные румяна',
              'Запеченные хайлайтеры',
              'Запеченные бронзеры',
              'Гелевые карандаши для губ',
              'Гелевые карандаши для глаз',
              'Гелевые карандаши для бровей'
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
