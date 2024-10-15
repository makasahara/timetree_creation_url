type Props = {
  placeholder?: string;
};

const Input = ({ placeholder = "" }: Props) => {
  return <input type="text" placeholder={placeholder} />;
};

export default Input;
