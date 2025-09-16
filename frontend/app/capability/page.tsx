'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css'; // правильное подключение CSS Modules

export default function CapabilitiesPage() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>Возможности</h1>
        <p className={styles.sub}>
                    Выберите направление, чтобы узнать подробнее
        </p>
      </header>

      <main className={styles.grid} role="navigation" aria-label="Навигация по возможностям">
        <Link href="/capability/production" className={styles.cardLink} aria-label="Перейти в возможности производства">
          <div className={styles.card} tabIndex={0}>
            <div className={`${styles.cardMedia} ${styles.production}`}></div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Производство</h2>
              <p className={styles.cardDesc}>
                                Современные технологии и оборудование для уникальных проектов.
              </p>
              <span className={styles.cardCta}>Перейти →</span>
            </div>
          </div>
        </Link>

        <Link href="/capability/laboratory" className={styles.cardLink} aria-label="Перейти в возможности лаборатории">
          <div className={styles.card} tabIndex={0}>
            <div className={`${styles.cardMedia} ${styles.laboratory}`}></div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Лаборатория</h2>
              <p className={styles.cardDesc}>
                                Исследования, эксперименты и разработка новых материалов.
              </p>
              <span className={styles.cardCta}>Перейти →</span>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
}
