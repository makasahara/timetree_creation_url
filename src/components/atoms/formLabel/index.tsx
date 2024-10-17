/** @jsxImportSource @emotion/react */
import { srOnly } from "./style";

type Props = {
  htmlFor: string;
  text: string;
  required?: boolean;
};

const FormLabel = ({ htmlFor, text, required = false }: Props) => {
  return (
    <label htmlFor={htmlFor}>
      {text}
      {required && <span aria-hidden="true">*</span>}
      {required && <span css={srOnly}>（必須）</span>}
    </label>
  );
};

export default FormLabel;
