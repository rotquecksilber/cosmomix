import Htag from '@/components/htag/htag';
import Image from 'next/image';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  const team = [
    {name: 'Ратиша Миллер', position: 'Директор по развитию бренда', image: '/home_page/reasons_picture.png'},
    {name: 'Александр Иванов', position: 'Главный химик-технолог', image: '/home_page/reasons_picture.png'},
    {name: 'Святозар Смирнов', position: 'PR-менеджер', image: '/home_page/reasons_picture.png'},
  ];
  return (
    <section>
      <div className={styles.team}>
        <Htag tag={'h2'} color={'gradient'} uppercase={true} className={styles.team_title}>Наша команда</Htag>
        <div  className={styles.team_wrapper}>
          {team.map((member, i) => {
            return (
              <div key={i}>
                <div className={styles.image_wrapper}>
                  <Image alt={member.name} src={member.image} width={778} height={602} className={styles.team_image}></Image>
                </div>

                <div>
                  <Htag tag={'h3'} color={'primary'} className={styles.team_name}>{member.name}</Htag>
                </div>

                <div className={styles.team_position}>
                  {member.position}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
