import { ReactNode } from "react";
import { ToggleButton } from "./ToggleButton";
import styles from "./ToggleContainer.module.css";
import { ToggleMenu } from "./ToggleMenu";
import crypto from "crypto";

type Props = {
  menu: ReactNode;
};

// To use node.js crypto, it needs to be async server component.
// Accommodate both Node.js and browser JavaScript is an intimidating work using dynamic import,
// so keeping this only applicable to React Server Component.
export async function ToggleContainer(props: Props) {
  const target = crypto.randomUUID();
  const anchorName = "--anchor-" + target;

  return (
    <div className={styles.component}>
      <ToggleButton target={target} anchorName={anchorName} />
      <ToggleMenu target={target} anchorName={anchorName}>
        {props.menu}
      </ToggleMenu>
    </div>
  );
}
