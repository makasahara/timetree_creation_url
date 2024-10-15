/** @jsxImportSource @emotion/react */
import Heading from "../../atoms/heading";
import Input from "../../atoms/input";
import FormPart from "../../molecules/formPart";
import CheckBtn from "../../atoms/checkBtn";
import { fieldset } from "./style";

const Form = () => {
  return (
    <form>
      <Heading text="予定作成URLの生成" />
      <fieldset css={fieldset}>
        <FormPart id="title" labelText="予定のタイトル" isRequired={true}>
          <Input placeholder="TimeTree Day" />
        </FormPart>
      </fieldset>
      <fieldset css={fieldset}>
        <CheckBtn text="終日" />
      </fieldset>
    </form>
  );
}

export default Form;
