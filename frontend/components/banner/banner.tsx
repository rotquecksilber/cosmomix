import styles from './banner.module.css';
import Htag from '@/components/htag/htag';



export default function Banner({ title }: { title: string }) {
  return (
    <div className={styles.banner}>
      <Htag tag={'h1'} color={'white'} uppercase={true}>
        {title}
      </Htag>
    </div>
  );
}
