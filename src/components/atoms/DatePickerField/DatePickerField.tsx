import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { formatDate } from '../../../utils/formatDate';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './DatePickerField.css';

interface DatePickerFieldProps {
  onDateChange: (date: any) => void;
  previouslySelectedDate: string | null;
}
function DatePickerField(props: DatePickerFieldProps) {
  const { onDateChange, previouslySelectedDate } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    previouslySelectedDate?.length ? new Date(previouslySelectedDate) : null
  );
  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    onDateChange(formatDate(new Date(date)));
  };
  useEffect(() => {
    if (previouslySelectedDate == null) setSelectedDate(null);
  }, [previouslySelectedDate]);
  const handleClear = () => {
    setSelectedDate(null);
    onDateChange(null);
  };

  return (
    <div className="date-picker-container ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select a Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
      <Button onClick={handleClear} color="primary">
        Clear Date
      </Button>
    </div>
  );
}

export default DatePickerField;
