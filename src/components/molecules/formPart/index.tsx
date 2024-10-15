/** @jsxImportSource @emotion/react */
import FormLabel from "../../atoms/formLabel";
import { formGroup } from "./style";

type Props = {
  id: string;
  labelText: string;
  children: React.ReactNode;
  isRequired?: boolean;
};

const FormPart = ({ id, labelText, children, isRequired = false }: Props) => {
  return (
    <div css={formGroup}>
      <FormLabel
        htmlFor={id}
        text={labelText}
        required={isRequired}
      ></FormLabel>
      {children}
    </div>
  );
};

export default FormPart;
