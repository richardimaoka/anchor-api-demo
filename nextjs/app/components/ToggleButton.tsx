import styles from "./ToggleButton.module.css";

type Props = {
  target: string;
};

export function ToggleButton(props: Props) {
  return (
    <button className={styles.component} popoverTarget={props.target}>
      <span className={styles.left}>toggle</span>
      <span className={styles.right}>v</span>
    </button>
  );
}
