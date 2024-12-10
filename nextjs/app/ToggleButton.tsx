import styles from "./ToggleButton.module.css";

export function ToggleButton() {
  return (
    <button className={styles.component}>
      <span className={styles.left}>toggle</span>
      <span className={styles.right}>v</span>
    </button>
  );
}
