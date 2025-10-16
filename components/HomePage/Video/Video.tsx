'use client';
import React, { useEffect, useRef } from 'react';

type Props = {
    src: string; // путь к видео без расширения
    poster?: string;
    className?: string;
};

export const BackgroundVideo: React.FC<Props> = ({ src, poster, className }) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const playPromise = v.play();
    if (playPromise && playPromise.catch) playPromise.catch(() => {});
    return () => {
      if (!v.paused) v.pause();
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}
      aria-hidden
    >
      {/* Сначала webm, затем mp4 как fallback */}
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
    </video>
  );
};
