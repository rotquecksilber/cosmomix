'use client';
import React, { useState } from 'react';
import { useMinimalImageSupport } from '@/hooks/useMinimalImageSupport';

export default function OldBrowserWarning() {
  const isSupported = useMinimalImageSupport(['webp']); // проверяем минимально допустимый формат
  const [hidden, setHidden] = useState(false);

  if (isSupported === null || isSupported || hidden) return null;

  return (
    <div
      style={{
        background: '#ffdddd',
        color: '#600',
        padding: '10px 40px 10px 10px',
        textAlign: 'center',
        fontSize: '14px',
        zIndex: 1000,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
            Ваш браузер устарел и не поддерживает минимально требуемые форматы изображений (WebP).<br />
            Пожалуйста, обновите его для корректного отображения сайта.
      <button
        onClick={() => setHidden(true)}
        aria-label="Закрыть предупреждение"
        style={{
          position: 'absolute',
          top: 4,
          right: 10,
          background: 'transparent',
          border: 'none',
          color: '#600',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
                ×
      </button>
    </div>
  );
}
