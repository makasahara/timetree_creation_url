import { HandleChange } from "../../types";

type Props = {
  resultId: string;
  placeholder?: string;
  handleChange?: HandleChange;
};

const TextArea = ({ resultId, placeholder = "", handleChange }: Props) => {
  return <textarea 
    id={resultId} 
    placeholder={placeholder} 
    onChange={handleChange ? (event) => handleChange(event) : undefined}
  />;
};

export default TextArea;
