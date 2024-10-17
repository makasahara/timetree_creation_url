import { HandleChange } from "../../types";

type Props = {
  resultId: string;
  placeholder?: string;
  handleChange?: HandleChange;
  value?: string;
  readonly?: boolean;
};

const TextArea = ({ resultId, placeholder = "", handleChange, value, readonly = false }: Props) => {
  return <textarea 
    id={resultId} 
    placeholder={placeholder} 
    onChange={handleChange ? (event) => handleChange(event) : undefined}
    value={value}
    readOnly={readonly}
  />;
};

export default TextArea;
