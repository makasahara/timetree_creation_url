type Props = {
  placeholder?: string;
};

const TextArea = ({ placeholder = "" }: Props) => {
  return <textarea placeholder={placeholder} />;
};

export default TextArea;
