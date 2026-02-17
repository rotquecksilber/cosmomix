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

