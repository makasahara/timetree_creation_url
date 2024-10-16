/** @jsxImportSource @emotion/react */
import InputDate from "../../atoms/inputDate";
import InputTime from "../../atoms/inputTime";
import { fieldDateTime } from "./style";

const FieldDateTime = () => {
  return (
    <div css={fieldDateTime}>
      <InputDate />
      <InputTime />
    </div>
  );
};

export default FieldDateTime;
