import { ButtonProps } from '@/components/button/button.interface';
import cn from 'classnames';
import styles from './button.module.css';
import { montserrat } from '@/lib/fonts';
import Link from 'next/link';

export default function Button({

  type, // добавляем дефолт
  color,
  uppercase,
  children,
  href,
  onClick,
  className
}: ButtonProps & { onClick?: () => void }) {

  const classes = cn(styles[type], montserrat.className, {
    [styles.uppercase]: uppercase,
    [styles['color-black']]: color === 'black',
    [styles['color-soft']]: color === 'soft',
    [styles['primary']]: color === 'primary',
    [styles['white']]: color === 'white',
  }, className);

  // если есть href → Link, иначе обычный button
  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
