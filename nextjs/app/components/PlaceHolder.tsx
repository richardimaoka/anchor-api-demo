type Props = {
  width: number;
  height: number;
  backgroundColor?: string;
};

export function PlaceHolder(props: Props) {
  const backgroudColor = "lightgrey";
  return (
    <div
      style={{
        width: props.height,
        height: props.height,
        backgroundColor: backgroudColor,
      }}
    ></div>
  );
}
