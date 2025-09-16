import {HtagProps} from './htag.interface';
import cn from 'classnames';
import styles from './htag.module.css';
import {montserrat} from '@/lib/fonts';
export default function Htag({tag, color, uppercase, children, className}: HtagProps) {

  const Tag = tag;

  const classes = cn(styles[tag], montserrat.className, className, {
    [styles.uppercase]: uppercase,
    [styles['color-black']]: color === 'black',
    [styles['color-white']]: color === 'white',
    [styles['gradient']]: color === 'gradient',
    [styles['color-primary']]: color === 'primary',
  });

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  );
}
