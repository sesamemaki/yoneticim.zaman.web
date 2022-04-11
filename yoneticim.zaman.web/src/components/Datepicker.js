import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css

const DatePickerComponent = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        );
      };

<DatePicker
  selected={date}
  onSelect={handleDateSelect} //when day is clicked
  onChange={handleDateChange} //only when value has changed
/>

export default DatePickerComponent;