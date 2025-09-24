'use client';

import styles from './capability.module.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Htag from '@/components/htag/htag';

interface CapabilityItem {
    id: string;
    title: string;
    facts: string[];
    description: string;
    background: string; // фон для активного элемента
}

interface CapabilityProps {
    items: CapabilityItem[];
    bgImage: string;
}

export default function Capability({ items, bgImage }: CapabilityProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.capability}>
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          const eventHandlers = isMobile
            ? { onClick: () => toggleAccordion(index) }
            : {
              onMouseEnter: () => setActiveIndex(index),
              onMouseLeave: () => setActiveIndex(null),
            };

          return (
            <motion.div
              key={item.id}
              className={styles.capabilityItem}
              {...eventHandlers}
              style={{
                background: isActive ? item.background : '#FFFFFF',
                transition: 'background 0.4s ease-in-out',
              }}
            >
              <div className={styles.capabilityHeader}>
                <span className={styles.capabilityId}>{item.id}</span>

                <div className={styles.capabilityIcon}>
                  <div>
                    <Htag tag={'h2'} color={'production'} className={styles.capabilityTitle}>{item.title}</Htag>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className={styles.capabilityDescriptionWrapper}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                          <p className={styles.capabilityDescription}>
                            {item.description}
                          </p>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {isMobile && (
                    <span className={styles.accordionIcon}>

                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
