import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputTime = () => {
  const [time, setTime] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={time}
      onChange={(date) => setTime(date)}
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