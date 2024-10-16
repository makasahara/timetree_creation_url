/** @jsxImportSource @emotion/react */
import FormPart from "../../molecules/formPart";
import TextArea from "../../atoms/textArea";

const Form = () => {

  return (
    <>
      <FormPart id="result" labelText="生成結果">
        <TextArea />
      </FormPart>
    </>
  );
}

export default Form;
