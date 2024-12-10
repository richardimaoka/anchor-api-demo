import { ToggleButton } from "./ToggleButton";
import styles from "./ToggleContainer.module.css";
import { ToggleMenu } from "./ToggleMenu";

export function ToggleContainer() {
  const target = "toggle-menu";
  return (
    <div className={styles.component}>
      <ToggleButton target={target} />
      <ToggleMenu targetId={target} />
    </div>
  );
}
