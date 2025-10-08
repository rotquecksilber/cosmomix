'use client';

import { useState, KeyboardEvent } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKey = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSection(index);
    }
  };

  const sections = [
    {
      title: 'Производство',
      links: [
        { text: 'Контрактное производство', href: '/capability' },
        { text: 'Продукты', href: '/catalog' },
        { text: 'Декоративная косметика', href: '/decorative_cosmetics' },
      ],
    },
    {
      title: 'Информация',
      links: [
        { text: 'Вакансии', href: '/job' },
        { text: 'Правовая информация', href: '/legal' },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {sections.map((section, i) => (
          <div className={styles.column} key={i}>
            <div
              className={styles.columnTitle}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === i}
              aria-controls={`section-links-${i}`}
              onClick={() => toggleSection(i)}
              onKeyDown={(e) => handleKey(e, i)}
            >
              {section.title}
              <span aria-hidden="true">{openIndex === i ? '−' : '+'}</span>
            </div>
            <div
              id={`section-links-${i}`}
              className={`${styles.columnLinks} ${openIndex === i ? styles.show : ''}`}
            >
              {section.links.map((link, idx) => (
                <Link href={link.href} key={idx}>
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.column}>
          <div className={styles.socials} aria-label="Социальные сети">
            <Link href="https://t.me/cosmomix1" target="_blank" rel="noopener noreferrer">
              <Image src="/socials/telegram.svg" alt="Telegram" width={24} height={24} />
            </Link>
            {/*Х*/}
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.emailGroup}>
            <strong>Для связи с нами</strong>
            <div>
              <Link href="mailto:info@cosmo-mix.ru">info@cosmo-mix.ru</Link>
            </div>
            <div>
              <Link href="tel:+74951200596">+7 (495) 120-05-96</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomRow}>
          <span>COSMOMIX</span>
          <span>{new Date().getFullYear()}</span>
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        </div>
      </div>
    </footer>
  );
}
