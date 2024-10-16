/** @jsxImportSource @emotion/react */
import FieldDateTime from "../../molecules/fieldDateTime";
import FormPart from "../../molecules/formPart";
import { fieldPeriod } from "./style";

const FieldPeriod = () => {

  return (
    <div css={fieldPeriod}>
      <FormPart id="startDateTime" labelText="開始日時" isRequired={true}>
        <FieldDateTime />
      </FormPart>
      <FormPart id="endDateTime" labelText="終了日時" isRequired={true}>
        <FieldDateTime />
      </FormPart>
    </div>
  );
}

export default FieldPeriod;
