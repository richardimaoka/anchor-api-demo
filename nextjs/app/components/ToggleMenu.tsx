import styles from "./ToggleMenu.module.css";

type Props = {
  targetId: string;
};

export function ToggleMenu(props: Props) {
  return (
    <div id={props.targetId} className={styles.component} popover="auto">
      <div>a</div>
      <div>b</div>
      <div>d</div>
      <div>d</div>
      <div>d</div>
    </div>
  );
}
