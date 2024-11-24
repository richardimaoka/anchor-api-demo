import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
      <div className={styles.page}>
        <button className={styles.button}>
          <div>anchor</div>
        </button>
        <div className={styles.positioned}>hello world</div>
      </div>
    </div>
  );
}
