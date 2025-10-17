import styles from './not_found.module.css';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className={styles.error_404}>
      <div>
        <Image src={'/not_found.webp'} width={289} height={438} alt={'страница не найдена'}></Image>
      </div>
      <div className={styles.error_404_text}>
        <div className={styles.error_404_title}>
404
        </div>
        <div className={styles.description}>
страница не найдена
        </div>
      </div>
    </div>
  );
}
