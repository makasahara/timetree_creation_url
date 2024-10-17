type Props = {
  label?: string;
  handleClick?: () => void;
};

const Btn = ({ label = "", handleClick }: Props) => {
  return <button type="button" onClick={handleClick}>{label}</button>;
};

export default Btn;
