import Htag from '@/components/htag/htag';
import styles from './usage.module.css';
import Image from 'next/image';

interface UsageItem {
    item: string;
}

interface UsageProps {
    items: UsageItem[];
    image: string;
}

export default function Usage({ items, image }: UsageProps) {
  return (
    <section className={styles.usage}>
      <Htag color={'gradient'} tag={'h2'} uppercase={true} className={styles.title}>
                Использование
      </Htag>

      <div className={styles.usage_wrapper}>
        <div className={styles.textBlock}>
          {items.map((step, index) => (
            <p key={index} className={styles.description}>
              {step.item}
            </p>
          ))}
        </div>

        <div className={styles.imageBlock}>
          <Image src={image} alt="Использование" width={548} height={712} />
        </div>
      </div>
    </section>
  );
}
