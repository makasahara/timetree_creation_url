import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ja } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

const InputDate = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      dateFormat="yyyy年MM月dd日 eee"
      locale={ja}
      className="custom-datepicker"
    />
  );
};

export default InputDate;