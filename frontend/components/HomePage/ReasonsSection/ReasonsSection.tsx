import styles from './ReasonsSection.module.css';
import Htag from '@/components/htag/htag';
import { montserrat } from '@/lib/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ReasonsSection() {
  return (
    <section className={styles.reasons} aria-labelledby="production-heading">
      <div className={styles.reasons_wrapper}>
        <Htag tag="h2" color="gradient" uppercase>
                    Производственное направление
        </Htag>

        <div className={styles.reasons_grid}>
          {/* Декоративная косметика */}
          <Link
            href={'/decorative_cosmetics'}
            className={styles.gradientBorder}
            aria-label="Перейти к производству декоративной косметики COSMOMIX"
          >
            <div className={styles.imageWrapper}>
              <Image
                className={styles.reasons_photo}
                src="/home_page/decor.png"
                alt="Производство декоративной косметики COSMOMIX"
                fill
                priority
              />
              <div className={styles.overlayContent}>
                <Htag tag="h3" color="primary" uppercase>
                                    Производство декоративной косметики
                </Htag>
                <p className={styles.reasons_text}>
                  <span className={montserrat.className}>COSMOMIX</span> специализируется на контрактном
                                    производстве декоративной косметики, предлагая индивидуальный подход и высочайшее качество.
                </p>
              </div>
            </div>
          </Link>

          {/* Можно раскомментировать и добавить другие направления */}
          {/*
          <Link
            href={'/care_cosmetics'}
            className={styles.gradientBorder_reverse}
            aria-label="Перейти к производству уходовой косметики COSMOMIX"
          >
            <div className={styles.imageWrapper}>
              <Image
                className={styles.reasons_photo}
                src="/home_page/uhod.png"
                alt="Производство уходовой косметики COSMOMIX"
                fill
                priority
              />
              <div className={styles.overlayContent}>
                <Htag tag="h3" color="primary" uppercase>
                  Производство уходовой косметики
                </Htag>
                <p className={styles.reasons_text}>
                  Мы также занимаемся контрактным производством уходовой косметики, гарантируя эффективность
                  и безопасность каждого продукта.
                </p>
              </div>
            </div>
          </Link>
          */}
        </div>
      </div>
    </section>
  );
}
