/** @jsxImportSource @emotion/react */
import Heading from "../../atoms/heading";
import Input from "../../atoms/input";
import FormPart from "../../molecules/formPart";
import CheckBtn from "../../atoms/checkBtn";
import TextArea from "../../atoms/textArea";
import Btn from "../../atoms/btn";
import FieldDateTime from "../../molecules/fieldDateTime";
import { Event } from "../../types";
import { fieldset } from "./style";
import { placeholders, btnLabel } from "./define";
import { DataObj } from "../../types";

const Form = ({
  dataObj,
  handleDataObj,
  currentDateTime,
  handleCreateUrl
}: {
  dataObj: DataObj,
  handleDataObj: (dataObj: DataObj) => void,
  currentDateTime: Date,
  handleCreateUrl: () => void
}) => {

  const handleChange = (event: Event) => {
    const { id, value } = event.target;
    handleDataObj({ ...dataObj, [id]: value });
  }

  return (
    <form>
      <Heading text="予定作成URLの生成" />
      <fieldset css={fieldset}>
        <FormPart id="title" labelText="予定のタイトル" isRequired={true}>
          <Input resultId="title" placeholder={placeholders.title} handleChange={handleChange} />
        </FormPart>
      </fieldset>
      <fieldset css={fieldset}>
        <FormPart id="startDateTime" labelText="開始日時" isRequired={true}>
          <FieldDateTime currentDateTime={currentDateTime} resultPrefix="start" handleChange={handleChange} />
        </FormPart>
        <FormPart id="endDateTime" labelText="終了日時" isRequired={true}>
          <FieldDateTime currentDateTime={currentDateTime} resultPrefix="end" handleChange={handleChange} />
        </FormPart>
      </fieldset>
      <fieldset css={fieldset}>
        <CheckBtn resultId="allDay" text="終日" handleChange={handleChange} />
      </fieldset>
      <fieldset css={fieldset}>
        <FormPart id="note" labelText="メモ">
          <TextArea resultId="note" placeholder={placeholders.memo} handleChange={handleChange} />
        </FormPart>
      </fieldset>
      <fieldset css={fieldset}>
        <FormPart id="location" labelText="場所">
          <Input resultId="location" placeholder={placeholders.place} handleChange={handleChange} />
        </FormPart>
      </fieldset>
      <fieldset css={fieldset}>
        <FormPart id="url" labelText="添付URL">
          <Input resultId="url" placeholder={placeholders.attachedUrl} handleChange={handleChange} />
        </FormPart>
      </fieldset>
      <Btn label={btnLabel.createUrl} handleClick={handleCreateUrl} />
    </form>
  );
}

export default Form;
