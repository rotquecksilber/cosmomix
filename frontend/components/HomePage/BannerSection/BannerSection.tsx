import styles from './BannerSection.module.css';
import Image from 'next/image';
import Htag from '@/components/htag/htag';
import Button from '@/components/button/button';
import { BackgroundVideo } from '@/components/HomePage/Video/Video';

export default function BannerSection() {
  return (
    <section className={styles.banner_wrapper} aria-label="Hero section баннера COSMOMIX">
      {/* Фоновое изображение (fallback, если видео не загрузится) */}
      <Image
        src="/banner/banner_background.png"
        width={1513}
        height={565}
        alt="Фоновое изображение баннера производства COSMOMIX"
        priority
        className={styles.banner_image}
      />

      {/* Видео на фоне */}
      <BackgroundVideo
        src="/home_page/video/banner_video.mp4"
        className={styles.banner_model}
      />
      <BackgroundVideo
        src="/home_page/video/banner_video_mobile.mp4"
        className={styles.banner_model_mobile}
      />



      {/* Тёмный градиент поверх видео */}
      <div className={styles.banner_overlay}></div>

      {/* Текстовая обёртка */}
      <div className={styles.banner_textWrapper}>
        <Image
          src="/banner/cosmomix2023.png"
          width={1060}
          height={136}
          alt="Логотип COSMOMIX"
          priority
          className={styles.text_upper}
        />

        <Htag className={styles.desktop} color="white" tag="h1" uppercase>
                    Контрактное производство косметики
        </Htag>
        <Htag className={styles.mobile} color="white" tag="h1" uppercase>
                    Контрактное производство косметики
        </Htag>

        <p className={styles.text_description}>
                    Контрактное производство — это не просто услуга, а тонкий процесс, где технологии встречаются с
                    креативом, а качество становится приоритетом.
        </p>

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
