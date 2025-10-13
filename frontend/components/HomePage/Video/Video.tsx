'use client';
import React, { useEffect, useRef } from 'react';

type Props = {
    src: string;
    poster?: string;
    className?: string;
};

export const BackgroundVideo: React.FC<Props> = ({ src, poster, className }) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
    return () => { if (!v.paused) v.pause(); };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}

      aria-hidden
    />
  );
};
