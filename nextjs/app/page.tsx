import styles from "./page.module.css";
import { ToggleContainer } from "./components/ToggleContainer";
import { PlaceHolder } from "./components/PlaceHolder";

export default function Page() {
  return (
    <div className={styles.page}>
      <ToggleContainer menu={<PlaceHolder width={300} height={200} />} />
    </div>
  );
}
