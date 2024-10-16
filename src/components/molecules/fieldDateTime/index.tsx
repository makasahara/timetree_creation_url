/** @jsxImportSource @emotion/react */
import InputDate from "../../atoms/inputDate";
import InputTime from "../../atoms/inputTime";
import { HandleChange } from "../../types";
import { fieldDateTime } from "./style";

const FieldDateTime = ({ resultPrefix, currentDateTime, handleChange }: { 
  resultPrefix: string;
  currentDateTime: Date;
  handleChange: HandleChange
}) => {
  return (
    <div css={fieldDateTime}>
      <InputDate resultId={`${resultPrefix}Date`} currentDateTime={currentDateTime} handleChange={handleChange} />
      <InputTime resultId={`${resultPrefix}Time`} currentDateTime={currentDateTime} handleChange={handleChange} />
    </div>
  );
};

export default FieldDateTime;
