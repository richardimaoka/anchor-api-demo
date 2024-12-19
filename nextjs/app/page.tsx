import styles from "./page.module.css";
import { ToggleMenu } from "./components/toggle2/ToggleMenu";
import { PlaceHolder } from "./components/PlaceHolder";

export default function Page() {
  return (
    <div className={styles.page}>
      <ToggleMenu menu={<PlaceHolder width={300} height={200} />} />
    </div>
  );
}
