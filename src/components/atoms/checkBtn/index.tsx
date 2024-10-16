import { HandleChange } from "../../types";

type Props = {
  resultId: string;
  text?: string;
  handleChange: HandleChange;
};

const CheckBtn = ({ resultId, text = "", handleChange }: Props) => {
  return (
    <label>
      <input type="checkbox" id={resultId} onChange={(event) => {
        handleChange({
          target: {
            id: resultId,
            value: event.target.checked ? "1" : "0"
          }
        });
      }} />
      {text}
    </label>
  );
};

export default CheckBtn;