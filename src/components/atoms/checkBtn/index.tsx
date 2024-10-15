type Props = {
  text?: string;
};

const CheckBtn = ({ text = "" }: Props) => {
  return (
    <label>
      <input type="checkbox" />
      {text}
    </label>
  );
};

export default CheckBtn;