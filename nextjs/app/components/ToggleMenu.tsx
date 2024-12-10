"use client";
import { PlaceHolder } from "./PlaceHolder";
import styles from "./ToggleMenu.module.css";

type Props = {
  targetId: string;
};

export function ToggleMenu(props: Props) {
  return (
    <div
      id={props.targetId}
      className={styles.component}
      popover="auto"
      onBeforeToggle={(e) => console.log("toggle", e)}
    >
      <PlaceHolder width={200} height={300} />
    </div>
  );
}
