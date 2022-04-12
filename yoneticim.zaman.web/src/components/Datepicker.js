import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";


function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="DatePickerComponent">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        maxDate={new Date()}
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default DatePickerComponent;
