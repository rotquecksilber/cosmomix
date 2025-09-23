'use client';
import { useState } from 'react';
import Htag from '@/components/htag/htag';
import styles from './page.module.css';
import Image from 'next/image';
import Banner from '@/components/banner/banner';



export default function AboutPage() {
  const [open, setOpen] = useState<'manlypro' | 'production' | null>('manlypro');

  return (
    <>
      {/* Баннер */}
      <Banner title={'О COSMOMIX'}/>

      {/* Основная часть */}
      <div className={styles.about}>
        {/* Левая часть */}
        <div className={styles.about_left}>
          <div className={styles.about_text}>
                      COSMOMIX — дочерняя компания бренда MANLYPRO. Собственные лаборатория
                      и производство начали работу в 2024 году для обеспечения потребностей
                      компании в условиях импортозамещения, ускорения оборачиваемости,
                      наилучшего контроля качества и запуска новых брендов.
          </div>

          <div className={styles.about_images}>
            <div className={styles.about_wrapper}>
              <Image
                alt="Импорт в COSMOMIX"
                src="/about/import.jpg"
                width={609}
                height={391}
                className={styles.about_image}
              />
              <p className={styles.about_description}>
                              В COSMOMIX есть отдел собственного импорта ингредиентов, чтобы не
                              ограничиваться сырьем, доступным у российских поставщиков.
              </p>
            </div>

            <div className={styles.about_wrapper}>
              <Image
                alt="Работа в COSMOMIX"
                src="/about/work.jpg"
                width={609}
                height={391}
                className={styles.about_image}
              />
              <p className={styles.about_description}>
                              Всего за один год COSMOMIX была проделана значительная работа,
                              результат которой — качественные формулы, которыми мы гордимся и
                              готовы делиться с вами.
              </p>
            </div>
          </div>
        </div>

        {/* Правая часть с аккордеонами */}
        <div className={styles.about_right}>
          <div className={`${styles.about_right_wrapper} ${open ? styles.opened : ''}`}>
            <button
              className={`${styles.accordion} ${
                open === 'manlypro'
                  ? styles.active
                  : open === null
                    ? ''
                    : styles.close
              }`}
              onClick={() => setOpen(open === 'manlypro' ? null : 'manlypro')}
            >
              <Htag tag={'h2'} color={'white'} uppercase={true} className={styles.accordion_title}>
                        О сотрудничестве с MANLYPRO
              </Htag>
              <Image
                alt="Работа в COSMOMIX"
                src="/about/manlypro.png"
                width={291}
                height={368}
                className={styles.accordion_picture}
              />
            </button>
            {open === 'manlypro' && (
              <div className={styles.panel}>
                <p>
                            COSMOMIX тесно сотрудничает с командой MANLYPRO, обмениваясь богатым опытом. В штате
                            лаборатории и
                            производства работают опытные визажисты и колористы, которые следят за последними трендами.
                            Технологи компании непрерывно обучаются у российских и иностранных технологов и
                            совершенствуют
                            формулы продуктов.
                  <br/><br/>
                            Российский бренд MANLYPRO лидирует в премиум-сегменте декоративной косметики и кистей и
                            известен
                            строгими критериями качества косметических продуктов. Такие же высокие стандарты бренд задал
                            и для
                            собственных лаборатории и производства.
                </p>
              </div>
            )}

            <button
              className={`${styles.accordion} ${
                open === 'production'
                  ? styles.active
                  : open === null
                    ? ''
                    : styles.close
              }`}
              onClick={() => setOpen(open === 'production' ? null : 'production')}
            >
              <Htag tag={'h2'} color={'white'} uppercase={true} className={styles.accordion_title}>
                        Производство
              </Htag>
              <Image
                alt="Сотрудничество с MANLYPRO"
                src="/logo.svg"
                width={609}
                height={391}
                className={styles.accordion_picture}
              />
            </button>
            {open === 'production' && (
              <div className={styles.panel}>
                <p>
                            Цехи на производстве оборудованы современными высокопроизводительными автоматическими и
                            полуавтоматическими станками, благодаря которым Cosmomix может обеспечить потребности в
                            больших количествах крупных заказчиков.
                  <br/><br/>
                            На данный момент производство располагается на арендуемых площадях в Москве. А летом 2025
                            года
                            планируется запустить собственную площадку COSMOMIX в Солнечногорске. Строительство первого
                            здания площадью 1500 кв.метров сейчас находится на этапе сдачи в эксплуатацию.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
