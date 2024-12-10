import { ToggleButton } from "./ToggleButton";
import styles from "./ToggleContainer.module.css";

export function ToggleContainer() {
  const target = "toggle-menu";
  return (
    <div className={styles.comonent} popover="auto">
      <ToggleButton target={target} />
      <div className={styles.positioned}>hello world</div>
    </div>
  );
}
