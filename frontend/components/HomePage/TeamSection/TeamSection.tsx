import Htag from '@/components/htag/htag';
import Image from 'next/image';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  return (
    <section>
      <div className={styles.team}>
        {/* Заголовок */}
        <Htag tag="h2" color="gradient" uppercase className={styles.team_title}>
            Наша команда
        </Htag>

        <div className={styles.team_wrapper}>
          <div className={styles.image_wrapper}>
            <Image
              alt="Наша команда"
              src="/team/team.jpg"
              width={1200}
              height={800}
              className={styles.team_image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
