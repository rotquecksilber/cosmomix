'use client';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
    src: string; // путь к видео без расширения
    poster?: string;
    className?: string;
};

export const BackgroundVideo: React.FC<Props> = ({ src, poster, className }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ленивое подключение видео только когда оно в viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || !isVisible) return;

    const playPromise = v.play();
    if (playPromise && playPromise.catch) playPromise.catch(() => {});

    return () => {
      if (v && !v.paused) v.pause();
    };
  }, [isVisible]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      controls={false}
      aria-hidden

    >
      {isVisible && <source src={`${src}.webm`} type="video/webm" />}
      {isVisible && <source src={`${src}.mp4`} type="video/mp4" />}
    </video>
  );
};
