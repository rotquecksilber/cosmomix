'use client';

import { useState } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
              onClick={() => toggleSection(i)}
            >
              {section.title}
              <span>{openIndex === i ? '−' : '+'}</span>
            </div>
            <div
              className={`${styles.columnLinks} ${
                openIndex === i ? styles.show : ''
              }`}
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
          <div className={styles.socials}>
            <Image src="/socials/telegram.svg" alt="Telegram" width={24} height={24} />
            <Image src="/socials/vk.svg" alt="VK" width={24} height={24} />
            <Image src="/socials/youtube.svg" alt="YouTube" width={24} height={24} />
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
          <Image src="/logo.svg" alt="Logo" width={32} height={32}/>
        </div>
      </div>
    </footer>
  );
}
