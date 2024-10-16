import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { formatTime } from '../../functions';
import 'react-datepicker/dist/react-datepicker.css';
import { HandleChange } from '../../types';

const InputTime = ({ resultId, currentDateTime, handleChange }: {
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
            value: dateTime ? formatTime(dateTime) : ""
          }
        });
      }}
      showTimeSelect
      showTimeSelectOnly
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="時間"
      dateFormat="HH:mm"
    />
  );
};

export default InputTime;