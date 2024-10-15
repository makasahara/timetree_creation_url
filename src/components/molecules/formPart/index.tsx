import FormLabel from "../../atoms/formLabel";

type Props = {
  id: string;
  labelText: string;
  children: React.ReactNode;
  isRequired?: boolean;
};

const FormPart = ({ id, labelText, children, isRequired = false }: Props) => {
  return (
    <>
      <FormLabel
        htmlFor={id}
        text={labelText}
        required={isRequired}
      ></FormLabel>
      {children}
    </>
  );
};

export default FormPart;
