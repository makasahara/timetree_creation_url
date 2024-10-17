/** @jsxImportSource @emotion/react */
import FormPart from "../../molecules/formPart";
import TextArea from "../../atoms/textArea";

const Result = ({ url }: { url: string }) => {

  return (
    <>
      <FormPart id="result" labelText="生成結果">
        <TextArea resultId="result" value={url} readonly />
      </FormPart>
    </>
  );
}

export default Result;
