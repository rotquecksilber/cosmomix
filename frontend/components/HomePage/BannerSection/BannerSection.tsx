import styles from './BannerSection.module.css';
import Image from 'next/image';
import Htag from '@/components/htag/htag';
import Button from '@/components/button/button';

export default function BannerSection() {
  return (
    <section className={styles.banner_wrapper} aria-label="Hero section баннера COSMOMIX">
      {/* Фоновое изображение */}
      <Image
        src="/banner/banner_background.png"
        width={1513}
        height={565}
        alt="Фоновое изображение баннера производства COSMOMIX"
        priority
        className={styles.banner_image}
      />

      {/* Модель на баннере */}
      <Image
        src="/banner/banner_model.png"
        width={821}
        height={886}
        alt="Модель рядом с косметической продукцией COSMOMIX"
        priority
        className={styles.banner_model}
      />

      {/* Текстовая обёртка */}
      <div className={styles.banner_textWrapper}>
        {/* Логотип */}
        <Image
          src="/banner/banner_logo.png"
          width={530}
          height={68}
          alt="Логотип COSMOMIX"
          priority
          className={styles.text_upper}
        />

        {/* Заголовок */}
        <Htag className={styles.desktop} color="white" tag="h1" uppercase>
                    Контрактное производство косметики
        </Htag>
        <Htag className={styles.mobile} color="white" tag="h1" uppercase>
                    Контрактное производство косметики
        </Htag>

        {/* Описание */}
        <p className={styles.text_description}>
                    Контрактное производство — это не просто услуга, а тонкий процесс, где технологии встречаются с
                    креативом, а качество становится приоритетом.
        </p>

        {/* Кнопки */}
        <Button href="/capability" color="soft" uppercase type="standard" className={styles.desktop}>
                    Наши возможности
        </Button>
        <Button href="/capability" color="soft" uppercase type="standard" className={styles.mobile_button}>
                    Наши возможности
        </Button>
      </div>
    </section>
  );
}
