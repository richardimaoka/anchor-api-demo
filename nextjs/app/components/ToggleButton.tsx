import Image from "next/image";
import styles from "./ToggleButton.module.css";
import localFile from "./icons/arrow_drop_down.svg";

type Props = {
  target: string;
};

export function ToggleButton(props: Props) {
  return (
    <button className={styles.component} popoverTarget={props.target}>
      <span className={styles.left}>menu</span>
      <Image className={styles.image} src={localFile} alt={"down arrow"} />
    </button>
  );
}
