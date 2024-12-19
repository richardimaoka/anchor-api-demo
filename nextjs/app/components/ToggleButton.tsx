import Image from "next/image";
import styles from "./ToggleButton.module.css";
import localFile from "./icons/arrow_drop_down.svg";

type Props = {
  target: string; //must be a globally unique name
  anchorName: string;
};

export function ToggleButton(props: Props) {
  return (
    <button
      style={{
        //@ts-expect-error anchor-name is not in React's type definition for style
        "anchor-name": props.anchorName,
      }}
      className={styles.component}
      popoverTarget={props.target}
    >
      <span className={styles.left}>menu</span>
      <Image className={styles.image} src={localFile} alt={"down arrow"} />
    </button>
  );
}
