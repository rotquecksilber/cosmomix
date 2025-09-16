import styles from './burger.module.css';

export default function Burger({
  isOpen,
  onToggle,
}: {
    isOpen: boolean;
    onToggle: () => void;
}) {
  return (
    <label className={styles.burger}>
      <input
        type="checkbox"
        checked={isOpen}
        onChange={onToggle}
        className={styles.burgerCheckbox}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}
