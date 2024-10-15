type Props = {
  label?: string;
};

const Btn = ({ label = "" }: Props) => {
  return <button>{label}</button>;
};

export default Btn;
