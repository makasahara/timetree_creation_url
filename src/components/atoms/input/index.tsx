import { HandleChange } from "../../types";

type Props = {
  resultId: string;
  placeholder?: string;
  handleChange: HandleChange;
};

const Input = ({ resultId, placeholder = "", handleChange }: Props) => {
  return <input type="text" id={resultId} placeholder={placeholder} onChange={handleChange} />;
};

export default Input;
