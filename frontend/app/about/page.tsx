'use client';
import { useState } from 'react';
import Htag from '@/components/htag/htag';
import styles from './page.module.css';
import Image from 'next/image';
import Banner from '@/components/banner/banner';
import Script from 'next/script';

export default function AboutPage() {
  const [open, setOpen] = useState<'manlypro' | 'production' | null>('manlypro');

  return (
    <>
      {/* Schema для организации */}
      <Script type="application/ld+json" id="organization-schema" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'COSMOMIX',
          'url': 'https://cosmo-mix.ru',
          'logo': 'https://cosmo-mix.ru/logo.svg',
          'founder': [
            {
              '@type': 'Person',
              'name': 'Семёнова Дарья',
              'jobTitle': 'Основатель COSMOMIX'
            },
            {
              '@type': 'Person',
              'name': 'Богданова Любовь',
              'jobTitle': 'Старший технолог'
            }
          ]
        })}
      </Script>

      {/* Баннер */}
      <Banner title={'О COSMOMIX'} />

      <main className={styles.about}>

        {/* Левая колонка */}
        <section className={styles.about_left}>
          <p className={styles.about_text}>
                        COSMOMIX — дочерняя компания бренда MANLYPRO. Собственные лаборатория
                        и производство начали работу в начале 2024 года для обеспечения потребностей
                        компании в условиях импортозамещения, ускорения оборачиваемости,
                        наилучшего контроля качества и запуска новых брендов. Летом 2025 года было построено и введено в
                        эксплуатацию новое помещение площадью 1500 м².
          </p>

          <div className={styles.about_images}>
            <figure className={styles.about_wrapper}>
              <Image
                alt="Отдел собственного импорта ингредиентов COSMOMIX"
                src="/about/import.jpg"
                width={609}
                height={391}
                className={styles.about_image}
              />
              <figcaption className={styles.about_description}>
                                В COSMOMIX есть отдел собственного импорта ингредиентов, чтобы не ограничиваться сырьем, доступным у российских поставщиков.
              </figcaption>
            </figure>

            <figure className={styles.about_wrapper}>
              <Image
                alt="Работа лаборатории и производства COSMOMIX"
                src="/about/work.jpg"
                width={609}
                height={391}
                className={styles.about_image}
              />
              <figcaption className={styles.about_description}>
                                Всего за два года COSMOMIX проделала значительную работу, результат которой — качественные формулы, которыми мы гордимся и готовы делиться с вами.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Правая колонка с аккордеонами */}
        <section className={styles.about_right}>
          <div className={`${styles.about_right_wrapper} ${open ? styles.opened : ''}`}>

            {/* Аккордеон MANLYPRO */}
            <button
              className={`${styles.accordion} ${open === 'manlypro' ? styles.active : open === null ? '' : styles.close}`}
              aria-expanded={open === 'manlypro'}
              aria-controls="panel-manlypro"
              id="accordion-manlypro"
              onClick={() => setOpen(open === 'manlypro' ? null : 'manlypro')}
            >
              <Htag tag="h2" color="white" uppercase className={styles.accordion_title}>
                                MANLYPRO
              </Htag>
              <Image
                alt="MANLYPRO сотрудничает с COSMOMIX"
                src="/about/manlypro.png"
                width={291}
                height={368}
                className={styles.accordion_picture}
              />
            </button>
            <div
              id="panel-manlypro"
              role="region"
              aria-labelledby="accordion-manlypro"
              hidden={open !== 'manlypro'}
              className={styles.panel}
            >
              <p>
                                COSMOMIX тесно сотрудничает с командой MANLYPRO, обмениваясь богатым опытом. В штате лаборатории и
                                производства работают опытные визажисты и колористы, которые следят за последними трендами.
                                Технологи компании непрерывно обучаются у российских и иностранных технологов и совершенствуют
                                формулы продуктов.
                <br /><br />
                                Российский бренд MANLYPRO лидирует в миддл-сегменте декоративной косметики и кистей и известен
                                строгими критериями качества косметических продуктов. Такие же высокие стандарты бренд задал и для
                                собственных лаборатории и производства.
              </p>
            </div>

            {/* Аккордеон Производство */}
            <button
              className={`${styles.accordion} ${open === 'production' ? styles.active : open === null ? '' : styles.close}`}
              aria-expanded={open === 'production'}
              aria-controls="panel-production"
              id="accordion-production"
              onClick={() => setOpen(open === 'production' ? null : 'production')}
            >
              <Htag tag="h2" color="white" uppercase className={styles.accordion_title}>
                                Производство
              </Htag>
              <Image
                alt="Производственные мощности COSMOMIX"
                src="/logo.svg"
                width={609}
                height={391}
                className={styles.accordion_picture}
              />
            </button>
            <div
              id="panel-production"
              role="region"
              aria-labelledby="accordion-production"
              hidden={open !== 'production'}
              className={styles.panel}
            >
              <p>
                                Цехи на производстве оборудованы современными высокопроизводительными автоматическими и полуавтоматическими станками, благодаря которым Cosmomix может обеспечить потребности в больших количествах крупных заказчиков.
                <br /><br />
                                На данный момент производство располагается на арендуемых площадях в Москве. А летом 2025 года планируется запустить собственную площадку COSMOMIX в Солнечногорске.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Секция команды */}
      <section className={styles.team_section}>
        <Htag tag="h2" color="gradient" uppercase className={styles.team_title}>
                    Наша команда
        </Htag>

        <figure className={styles.team_main}>
          <Image
            src="/team/team_group.jpg"
            alt="Команда COSMOMIX"
            width={1200}
            height={500}
            className={styles.team_main_image}
          />
          <figcaption className={styles.team_main_text}>
                        Наша команда - это талантливые жаждущие энтузиасты, которые непрерывно совершенствуются. Новые формулы и цвета всегда возникают и утверждаются нами в творческом потоке неподдельного стремления к высокому результату.
          </figcaption>
        </figure>

        {/* Индивидуальные карточки */}
        <Htag tag="h2" color="gradient" uppercase className={styles.team_title}>
                    Главный технолог и основатель
        </Htag>
        <div className={styles.team_wrapper}>

          <section className={styles.team_member} aria-labelledby="member-lyubov">
            <figure className={styles.team_image_wrapper}>
              <Image
                src="/team/technologist.jpg"
                alt="Богданова Любовь — Старший технолог"
                width={400}
                height={500}
                className={styles.team_image}
              />
            </figure>
            <Htag tag="h3" color="primary" className={styles.team_name}>
                            Богданова Любовь
            </Htag>
            <p className={styles.team_position_title}>Старший технолог</p>
            <p className={styles.team_position}>
                            С детства меня завораживала химия, как простые компоненты, соединяясь, могут создавать что-то новое и прекрасное. Сейчас это увлечение превратилось в профессию, полную вызовов и открытий.
                            Моя страсть — создавать формулы с характером и доказанной эффективностью. Я погружаюсь в процесс полностью: от анализа рынка и поиска инновационных компонентов до тестирования готового продукта. Разрабатываю продукты, которые будут не просто на полке, а в ежедневной бьюти-рутине довольных потребителей.
            </p>
          </section>

          <section className={styles.team_member} aria-labelledby="member-daria">
            <figure className={styles.team_image_wrapper}>
              <Image
                src="/team/founder.jpg"
                alt="Семёнова Дарья — Основатель COSMOMIX"
                width={400}
                height={500}
                className={styles.team_image}
              />
            </figure>
            <Htag tag="h3" color="primary" className={styles.team_name}>
                            Семёнова Дарья
            </Htag>
            <p className={styles.team_position_title}>Основатель COSMOMIX</p>
            <p className={styles.team_position}>
                            Уже 15 лет наша компания Manly pro занимается работой с контрактными производствами и в начале 2024 года мы открыли новую веху — собственные лаборатория и завод, для наших производственных нужд и реализации контрактных заказов.
              <br /><br />
                            Если другие говорят «невозможно» — в Cosmomix мы берем испытание и шанс!
            </p>
          </section>

        </div>
      </section>
    </>
  );
}
