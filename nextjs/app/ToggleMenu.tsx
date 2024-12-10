import { ToggleButton } from "./ToggleButton";
import styles from "./ToggleMenu.module.css";

export function ToggleMenu() {
  return (
    <div className={styles.comonent}>
      <ToggleButton />
      <div className={styles.positioned}>hello world</div>
    </div>
  );
}
