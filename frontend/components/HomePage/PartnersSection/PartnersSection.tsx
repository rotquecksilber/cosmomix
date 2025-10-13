'use client';

import Htag from '@/components/htag/htag';
import Image from 'next/image';
import styles from './PartnersSection.module.css';

export default function PartnersSection() {
  return (
    <section className={styles.partners} role="region" aria-labelledby="partners-heading">
      <Htag color={'gradient'} tag={'h2'} uppercase>
                Партнеры
      </Htag>
      <div className={styles.partners_image__wrapper} role="list">

        <div className={styles.partners_wrapper}>
          <Image
            role="listitem"
            alt="ManlyPro – партнер COSMOMIX"
            src={'/home_page/partners/manlypro.jpg'}
            width={100}
            height={100}
            className={styles.partners_image}
          />
          <div className={styles.text_wrapper}>


            <Htag color={'primary'} tag={'h3'} uppercase>
                    MANLYPRO
            </Htag>
            <p>
                    @manlyprocosmetics
            </p>
          </div>
        </div>
        <div className={styles.partners_wrapper}>
          <Image
            role="listitem"
            alt="Bloomy – партнер COSMOMIX"
            src={'/home_page/partners/bloomy.jpg'}
            width={100}
            height={100}
            className={styles.partners_image}
          />
          <div className={styles.text_wrapper}>
            <Htag color={'primary'} tag={'h3'} uppercase>
                      BLOOMY
            </Htag>
            <p>
                      @bloomymakeupru
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

