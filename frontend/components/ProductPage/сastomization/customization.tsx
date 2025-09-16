import styles from './customization.module.css';
import Image from 'next/image';
import Htag from '@/components/htag/htag';


interface CustomizationItem {
    title: string;
}

interface CustomizationProps {
    customization: CustomizationItem[];
}
export default function Customization({customization}: CustomizationProps) {
  return (
    <>
      <div className={styles.customization_wrapper}>
        <Htag tag={'h2'} color={'gradient'} uppercase={true} className={styles.h2}>Кастомизация Maximizer</Htag>
        <div className={styles.customization_item_wrapper}>
          <Image src={'/product/customization/1.png'} className={styles.image} alt={'кастомизация'} width={260} height={609}></Image>
          <div>
            {customization.map((item, index) => (
              <div className={styles.customization_item} key={index}>
                <div>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );

}
