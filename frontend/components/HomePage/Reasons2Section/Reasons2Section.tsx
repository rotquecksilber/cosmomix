'use client';
import styles from './Reasons2Section.module.css';
import cn from 'classnames';
import Htag from '@/components/htag/htag';
import Image from 'next/image';
// import Button from '@/components/button/button';
import { motion } from 'framer-motion';

export default function Reasons2Section() {
  const reasons = [
    {
      title: 'Индивидуальный подход',
      description:
          'Мы готовы к работе с различными потребностями и запросами наших клиентов. COSMOMIX предлагает гибкие условия сотрудничества и возможность разработки индивидуальных решений под конкретные требования заказчика.',
    },
    {
      title: 'Инновационные решения',
      description:
          'COSMOMIX постоянно инвестирует в исследования и разработки, чтобы быть на передовой в индустрии косметики. Мы внедряем новые технологии и инновационные рецептуры, чтобы создавать продукцию, которая соответствует последним тенденциям и требованиям рынка.',
    },
    {
      title: 'Долгосрочные отношения',
      description:
          'Мы стремимся к установлению долгосрочных партнерских отношений с нашими клиентами, основанных на взаимном доверии и взаимной выгоде. Наша команда профессионалов всегда готова поддержать и помочь нашим клиентам на каждом этапе сотрудничества.',
    },
    {
      title: 'Долгосрочные отношения',
      description:
          'Мы стремимся к установлению долгосрочных партнерских отношений с нашими клиентами, основанных на взаимном доверии и взаимной выгоде. Наша команда профессионалов всегда готова поддержать и помочь нашим клиентам на каждом этапе сотрудничества.',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section className={styles.reasons}>
      <div className={styles.reasons_wrapper}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Htag tag="h2" color="gradient" uppercase>
              Причины выбрать нас
          </Htag>
        </motion.div>

        <div className={styles.reasons_grid}>
          {reasons.map((reason, index) => {
            const positionClass = [
              styles.first,
              styles.second,
              styles.third,
              styles.fourth,
            ][index];

            return (
              <motion.div
                key={index}
                className={cn(styles.reasons_reason, positionClass)}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Image
                  alt="Иконка"
                  src="/home_page/reasons/reasons.svg"
                  width={105}
                  height={105}
                  className={styles.reasons_icon}
                />
                <div>
                  <div className={styles.reason_titleWrapper}>
                    <Htag
                      tag="h3"
                      color="white"
                      uppercase
                      className={styles.reasons_title}
                    >
                      {reason.title}
                    </Htag>
                  </div>
                  <p className={styles.reasons_description}>
                    {reason.description}
                  </p>
                </div>
                {index === 2 && (
                  <div className={styles.reason_buttonWrapper}>
                    {/*<Button color="white" type="standard" href="/">*/}
                    {/*        Подробнее*/}
                    {/*</Button>*/}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
