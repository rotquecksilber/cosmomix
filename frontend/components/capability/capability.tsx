'use client';

import styles from './capability.module.css';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // переключение аккордеона по тапу (мобила)
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
          return (
            <motion.div
              key={item.id}
              className={styles.capabilityItem}
              onMouseEnter={() => setActiveIndex(index)} // десктоп
              onMouseLeave={() => setActiveIndex(null)} // десктоп
              onClick={() => toggleAccordion(index)} // мобила
              style={{
                background: isActive ? item.background : '#FFFFFF',
                transition: 'background 0.4s ease-in-out',
              }}
            >
              <div className={styles.capabilityHeader}>
                <span className={styles.capabilityId}>{item.id}</span>

                <div className={styles.capabilityIcon}>
                  <div>
                    <h3 className={styles.capabilityTitle}>{item.title}</h3>
                    <ul className={styles.capabilityFacts}>
                      {item.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                      ))}
                    </ul>
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
                          <motion.button className={styles.button}>
                                      Заказать звонок
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className={styles.accordionIcon}>
                    {isActive ? '×' : '+'}
                  </span>
                  {/* крестик / плюсик */}

                </div>

              </div>


            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

