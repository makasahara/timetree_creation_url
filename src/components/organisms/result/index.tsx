/** @jsxImportSource @emotion/react */
import FormPart from "../../molecules/formPart";
import TextArea from "../../atoms/textArea";

const Result = () => {

  return (
    <>
      <FormPart id="result" labelText="生成結果">
        <TextArea resultId="result" />
      </FormPart>
    </>
  );
}

export default Result;
