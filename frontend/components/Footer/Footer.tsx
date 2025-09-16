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
        'Производство декоративной косметики',
        'Производство уходовой косметики',
        'Собственная торговая марка',
        'Производственные направления',
      ],
    },
    {
      title: 'Сотрудничество',
      links: [
        'Варианты сотрудничества',
        'Партнерство',
        'Вакансии',
        'Пресса',
        'Правовая информация',
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
                <Link href="#" key={idx}>
                  {link}
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
            <div>
              <strong>Партнерство</strong>
              <Link href="mailto:info@yourcosmeticfactory.com">info@yourcosmeticfactory.com</Link>
            </div>
            <div>
              <strong>Вакансии</strong>
              <Link href="mailto:info@yourcosmeticfactory.com">info@yourcosmeticfactory.com</Link>
            </div>
            <div>
              <strong>Пресса</strong>
              <Link href="mailto:info@yourcosmeticfactory.com">info@yourcosmeticfactory.com</Link>
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
