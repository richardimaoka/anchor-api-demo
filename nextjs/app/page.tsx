import styles from "./page.module.css";
import { ToggleContainer } from "./components/ToggleContainer";

export default function Page() {
  return (
    <div className={styles.page}>
      <ToggleContainer />
    </div>
  );
}
