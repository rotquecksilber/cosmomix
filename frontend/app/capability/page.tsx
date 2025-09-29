'use client';

import React from 'react';
import Link from 'next/link';
import { jura } from '@/lib/fonts';
import styles from './page.module.css';
import Banner from '@/components/banner/banner';

export default function CapabilitiesPage() {
  return (
    <div className={`${styles.page} ${jura.className}`}>
      <section role="navigation" aria-label="Навигация по возможностям">
        <Banner title="Возможности" />

        <div className={styles.grid}>
          <Link
            href="/capability/production"
            className={styles.cardLink}
            aria-label="Перейти в возможности производства"
          >
            <article className={styles.card}>
              <div className={`${styles.cardMedia} ${styles.production}`} />
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>Производство</h2>
                <p className={styles.cardDesc}>
                                    Современные технологии и оборудование для уникальных проектов.
                </p>
                <span className={styles.cardCta}>Перейти →</span>
              </div>
            </article>
          </Link>

          <Link
            href="/capability/laboratory"
            className={styles.cardLink}
            aria-label="Перейти в возможности лаборатории"
          >
            <article className={styles.card}>
              <div className={`${styles.cardMedia} ${styles.laboratory}`} />
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>Лаборатория</h2>
                <p className={styles.cardDesc}>
                                    Исследования, эксперименты и разработка новых материалов.
                </p>
                <span className={styles.cardCta}>Перейти →</span>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </div>
  );
}


