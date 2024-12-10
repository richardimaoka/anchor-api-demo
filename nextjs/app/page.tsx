import styles from "./page.module.css";
import { ToggleMenu } from "./ToggleMenu";

export default function Page() {
  return (
    <div className={styles.page}>
      <ToggleMenu />
    </div>
  );
}
