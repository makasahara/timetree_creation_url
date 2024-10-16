import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ja } from 'date-fns/locale';
import { formatDate } from '../../functions';
import 'react-datepicker/dist/react-datepicker.css';
import { HandleChange } from '../../types';

const InputDate = ({ resultId, currentDateTime, handleChange }: {
  resultId: string;
  currentDateTime: Date;
  handleChange: HandleChange;
}) => {
  const [dateTime, setDateTime] = useState<Date | null>(currentDateTime);

  return (
    <DatePicker
      selected={dateTime}
      onChange={(dateTime) => {
        setDateTime(dateTime);
        handleChange({
          target: {
            id: resultId,
            value: dateTime ? formatDate(dateTime) : ""
          }
        });
      }}
      dateFormat="yyyy年MM月dd日 eee"
      locale={ja}
      className="custom-datepicker"
    />
  );
};

export default InputDate;