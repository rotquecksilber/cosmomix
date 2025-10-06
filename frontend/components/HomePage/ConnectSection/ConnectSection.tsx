import styles from './ConnectSection.module.css';
import Image from 'next/image';
import Htag from '@/components/htag/htag';
import Button from '@/components/button/button';
import { montserrat } from '@/lib/fonts';
import PopUpConnect from '@/components/PopUpConnect/PopUpConnect';

export default function ConnectSection() {
  return (
    <section className={styles.connect} aria-labelledby="connectTitle">
      <div className={styles.connect_wrapper}>
        {/* Десктоп изображение */}
        <Image
          src="/home_page/connect.png"
          alt="Женщина с образцами косметики для производства по контракту"
          width={349}
          height={852}
          className={styles.connect_image}
        />

        {/* Текстовый блок */}
        <div className={styles.connect_text}>
          <Htag tag="h2" color="gradient" uppercase className={styles.connect_title}>
                        Создавайте косметику с <span className={montserrat.className}>Cosmomix</span>
          </Htag>

          <p className={styles.connect_text_description}>
                        Наша команда экспертов обеспечивает полный цикл производства, гибкость масштабирования и
                        индивидуальный подход к каждому проекту. Мы создаём не просто продукцию — мы создаём
                        результат, который говорит сам за себя.
          </p>

          {/* Мобильное изображение */}
          <Image
            src="/home_page/connect_mobile.png"
            alt="Женщина с образцами косметики для производства по контракту"
            width={244}
            height={305}
            className={styles.connect_image_mobile}
          />

          {/* Кнопка открытия попапа */}
          <PopUpConnect
            trigger={
              <Button color="primary" uppercase type="standard">
                                Свяжитесь с нами
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
