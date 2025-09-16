import {ButtonProps} from '@/components/button/button.interface';
import cn from 'classnames';
import styles from '@/components/button/button.module.css';
import {montserrat} from '@/lib/fonts';
import Link from 'next/link';

export default function Button({type, color, uppercase, children, href, className}: ButtonProps) {

  const classes = cn(styles[type], montserrat.className, {
    [styles.uppercase]: uppercase,
    [styles['color-black']]: color === 'black',
    [styles['color-soft']]: color === 'soft',
    [styles['primary']]: color === 'primary',
    [styles['white']]: color === 'white',
  }, className);

  return(
    <Link href={href} className={classes}>{children}</Link>
  );
}
