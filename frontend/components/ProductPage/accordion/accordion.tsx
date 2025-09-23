
'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './accordion.module.css';
import Image from 'next/image';

interface Props {
    title: string | React.ReactNode;
    content?: string | React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    defaultOpen?: boolean;
    className?: string;
}

export default function CollapsibleAccordion({
  title,
  content,
  imageSrc,
  imageAlt = '',
  defaultOpen = false,
  className = ''
}: Props) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>('0px');

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [open, contentRef]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const resizeObserverCb = () => {
      if (open) {
        setMaxHeight(`${el.scrollHeight}px`);
      }
    };

    const ro = new ResizeObserver(resizeObserverCb);
    ro.observe(el);

    return () => {
      ro.disconnect();
    };
  }, [open]);
  return (
    <div   className={`${styles.wrapper} ${open ? styles.openWrapper : ''} ${className}`}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
      >
        <div className={styles.titleRow}>
          <div className={styles.title}>{title}</div>

          <div className={`${styles.icon} ${open ? styles.open : ''}`} aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </button>

      <div
        className={styles.contentOuter}
        style={{ maxHeight }}
        aria-hidden={!open}
      >
        <div ref={contentRef} className={styles.contentInner}>
          {imageSrc && (
            <div className={styles.imageWrap}>
              <Image src={imageSrc} alt={imageAlt} className={styles.image} width={608} height={340}/>
            </div>
          )}

          <div className={styles.text}>{content}</div>
        </div>
      </div>
    </div>
  );
}


