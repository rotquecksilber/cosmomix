'use client';
import { useEffect, useState } from 'react';

type Format = 'webp' | 'avif';

export function useMinimalImageSupport(requiredFormats: Format[] = ['webp']) {
  const [isSupported, setIsSupported] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFormat = (format: Format): boolean => {
      const canvas = document.createElement('canvas');
      if (!canvas.getContext) return false;

      switch (format) {
      case 'webp':
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      case 'avif':
        return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
      default:
        return false;
      }
    };

    const results = requiredFormats.map(f => checkFormat(f));
    setIsSupported(results.every(r => r));
  }, [requiredFormats]);

  return isSupported;
}
