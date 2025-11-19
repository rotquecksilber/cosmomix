'use client';
import { useEffect, useState } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cosmomix_cookie_accepted');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cosmomix_cookie_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.bannerContent}>
        {/* SVG Icon слева на всю высоту */}
        <div className={styles.iconWrapper}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#6a4ff7"
          >
            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15a1 1 0 11-1-1 1 1 0 011 1zm4-4a1 1 0 11-1-1 1 1 0 011 1zm-8 0a1 1 0 11-1-1 1 1 0 011 1zm2-3a1 1 0 11-1-1 1 1 0 011 1z"/>
          </svg>
        </div>

        {/* Текст и кнопка справа */}
        <div className={styles.content}>
          <p className={styles.text}>
                        Продолжая пользоваться сайтом, вы соглашаетесь на использование файлов cookie.
          </p>
          <button className={styles.accept} onClick={accept}>
                        Принять
          </button>
        </div>
      </div>
    </div>
  );
}

