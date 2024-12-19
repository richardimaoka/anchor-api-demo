import { ReactNode } from "react";
import styles from "./ToggleMenu.module.css";

type Props = {
  target: string;
  anchorName: string;
  children: ReactNode;
};

export function ToggleMenu(props: Props) {
  return (
    <div
      id={props.target}
      style={{
        //@ts-expect-error anchor-name is not in React's type definition for style
        "position-anchor": "--anchor-" + props.target,
      }}
      className={styles.component}
      popover="auto"
    >
      {props.children}
    </div>
  );
}
