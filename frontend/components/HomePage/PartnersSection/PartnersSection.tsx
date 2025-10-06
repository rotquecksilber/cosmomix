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
        <Image
          role="listitem"
          alt="Bloomy – партнер COSMOMIX"
          src={'/home_page/partners/bloomy.jpeg'}
          width={255}
          height={255}
          className={styles.partners_image}
        />
        <Image
          role="listitem"
          alt="ManlyPro – партнер COSMOMIX"
          src={'/about/manlypro.png'}
          width={255}
          height={255}
          className={styles.partners_image}
        />
      </div>
    </section>
  );
}

