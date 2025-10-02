
import styles from './ReasonsSection.module.css';
import Htag from '@/components/htag/htag';
import { montserrat } from '@/lib/fonts';

import Image from 'next/image';
import Link from 'next/link';

export default function ReasonsSection() {
  return (
    <section className={styles.reasons}>
      <div className={styles.reasons_wrapper}>
        <Htag tag="h2" color="gradient" uppercase>
                    Производственное направление
        </Htag>

        <div className={styles.reasons_grid}>
          {/* Декоративная косметика */}
          <Link href={'/decorative_cosmetics'} className={styles.gradientBorder}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.reasons_photo}
                src="/home_page/decor.png"
                alt="Производство декоративной косметики"
                fill
                priority
              />
              <div className={styles.overlayContent}>
                <Htag tag="h3" color="primary" uppercase>
                                    Производство декоративной косметики
                </Htag>
                <div className={styles.reasons_text}>
                  <span className={montserrat.className}>COSMOMIX</span> специализируется на контрактном
                                    производстве декоративной косметики, предлагая индивидуальный подход и высочайшее качество
                </div>
              </div>
            </div>
          </Link>

          {/* Уходовая косметика */}
          {/*<div className={cn(styles.gradientBorder, styles.gradientBorder_reverse)}>*/}
          {/*  <div className={styles.imageWrapper}>*/}
          {/*    <Image*/}
          {/*      className={styles.reasons_photo}*/}
          {/*      src="/home_page/uhod.png"*/}
          {/*      alt="Производство уходовой косметики"*/}
          {/*      fill*/}
          {/*      priority*/}
          {/*    />*/}
          {/*    <div className={styles.overlayContent}>*/}
          {/*      <Htag tag="h3" color="primary" uppercase>*/}
          {/*                          Производство уходовой косметики*/}
          {/*      </Htag>*/}
          {/*      <div className={styles.reasons_text}>*/}
          {/*                          Мы также занимаемся контрактным производством уходовой косметики, гарантируя эффективность*/}
          {/*                          и безопасность каждого продукта*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
