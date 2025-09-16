import Htag from '@/components/htag/htag';
import Image from 'next/image';
import styles from './PartnersSection.module.css';

export default  function PartnersSection() {
  return (
    <section className={styles.partners}>
      <Htag color={'gradient'} tag={'h2'} uppercase={true}>Партнеры</Htag>
      <div className={styles.partners_image__wrapper}>
        <Image alt={'Bloomy'} src={'/home_page/partners/bloomy.jpeg'} width={255} height={255} className={styles.partners_image}/>
        <Image alt={'ga'} src={'/home_page/partners/ga.jpg'} width={255} height={255} className={styles.partners_image}/>
      </div>
    </section>
  );
}
