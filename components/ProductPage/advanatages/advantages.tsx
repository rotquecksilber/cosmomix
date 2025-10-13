import Image from 'next/image';
import styles from './advantages.module.css';

interface Item {
    advantage: string;
    image: string;
}

interface AdvantagesProps {
    items: Item[];
}

export default function Advantages({ items }: AdvantagesProps) {
  return (
    <div className={styles.advantagesWrapper}>
      {/* Левая колонка с гифкой */}
      <div className={styles.gifWrapper}>
        <Image
          src={'/product/video.gif'}
          alt="gif"
          width={562}
          height={478}
          className={styles.gif}
        />
      </div>

      {/* Правая колонка с преимуществами */}
      <div className={styles.advantage}>
        {items.map((item, index) => (
          <div key={index} className={styles.advantageItem}>
            <div className={styles.iconWrapper}>
              <Image
                src={item.image}
                alt={`advantage-${index}`}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.advantageText}>{item.advantage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
