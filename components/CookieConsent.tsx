'use client';
import React, { useState, useEffect } from 'react';

const COOKIE_KEY = 'cookie-consent-accepted';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setIsClosing(true);

    // Ждём завершения анимации закрытия
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`cookie-banner ${isClosing ? 'closing' : ''}`}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#222',
        color: '#fff',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        fontSize: '14px',
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform: isClosing ? 'translateY(100%)' : 'translateY(0)',
        opacity: isClosing ? 0 : 1,
      }}
    >
      <span>
        Этот сайт использует cookies для улучшения работы. Продолжая использовать сайт, вы соглашаетесь с этим.
      </span>
      <button
        onClick={handleAccept}
        style={{
          marginLeft: '20px',
          background: '#fff',
          color: '#222',
          border: 'none',
          padding: '5px 12px',
          cursor: 'pointer',
          borderRadius: '4px',
        }}
      >
                Принять
      </button>
    </div>
  );
}
