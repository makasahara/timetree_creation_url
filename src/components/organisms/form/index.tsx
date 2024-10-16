/** @jsxImportSource @emotion/react */
import Heading from "../../atoms/heading";
import Input from "../../atoms/input";
import FormPart from "../../molecules/formPart";
import CheckBtn from "../../atoms/checkBtn";
import TextArea from "../../atoms/textArea";
import Btn from "../../atoms/btn";
import FieldPeriod from "../fieldPeriod";
import { fieldset } from "./style";
import { placeholders, btnLabel } from "./define";

const Form = () => {

  return (
    <form>
      <Heading text="予定作成URLの生成" />
      <fieldset css={fieldset}>
        <FormPart id="title" labelText="予定のタイトル" isRequired={true}>
          <Input placeholder={placeholders.title} />
        </FormPart>
      </fieldset>
      <fieldset css={fieldset}>
        <FieldPeriod />
      </fieldset>
      <fieldset css={fieldset}>
        <CheckBtn text="終日" />
      </fieldset>
      <fieldset css={fieldset}>
        <FormPart id="memo" labelText="メモ">
          <TextArea placeholder={placeholders.memo} />
        </FormPart>
      </fieldset>
      <fieldset css={fieldset}>
        <FormPart id="place" labelText="場所">
          <Input placeholder={placeholders.place} />
        </FormPart>
      </fieldset>
      <fieldset css={fieldset}>
        <FormPart id="attachedUrl" labelText="添付URL">
          <Input placeholder={placeholders.attachedUrl} />
        </FormPart>
      </fieldset>
      <Btn label={btnLabel.createUrl} />
    </form>
  );
}

export default Form;
