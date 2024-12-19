import { ReactNode } from "react";
import styles from "./ToggleMenu.module.css";
import crypto from "crypto";

import Image from "next/image";
import localFile from "./arrow_drop_down.svg";

type ButtonProps = {
  target: string; //must be a globally unique name
  anchorName: string;
};

function Button(props: ButtonProps) {
  return (
    <button
      style={{
        //@ts-expect-error anchor-name is not in React's type definition for style
        "anchor-name": props.anchorName,
      }}
      className={styles.button}
      popoverTarget={props.target}
    >
      <span className={styles.left}>menu</span>
      <Image className={styles.image} src={localFile} alt={"down arrow"} />
    </button>
  );
}

type MenuContainerProps = {
  target: string;
  anchorName: string;
  children: ReactNode;
};

export function MenuContainer(props: MenuContainerProps) {
  return (
    <div
      id={props.target}
      style={{
        //@ts-expect-error anchor-name is not in React's type definition for style
        "position-anchor": "--anchor-" + props.target,
      }}
      className={styles.menu}
      popover="auto"
    >
      {props.children}
    </div>
  );
}

type Props = {
  menu: ReactNode;
};

// To use node.js crypto, it needs to be async server component.
// Accommodate both Node.js and browser JavaScript is an intimidating work using dynamic import,
// so keeping this only applicable to React Server Component.
export async function ToggleMenu(props: Props) {
  const target = crypto.randomUUID();
  const anchorName = "--anchor-" + target;

  return (
    <div className={styles.component}>
      <Button target={target} anchorName={anchorName} />
      <MenuContainer target={target} anchorName={anchorName}>
        {props.menu}
      </MenuContainer>
    </div>
  );
}
