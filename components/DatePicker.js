// components/DatePicker.js
"use client";

import React, { useState } from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import CustomRecurrence from "./CustomRecurrence";
import MiniCalendarPreview from "./MiniCalendarPreview";
import DateRangeSelector from "./DateRangeSelector";
import useRecurrenceStore from "../store/recurrenceStore";

const DatePicker = () => {
  const { recurrencePattern, setRecurrencePattern } = useRecurrenceStore();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="date-picker">
      <h1>Select Recurring Dates</h1>
      <DateRangeSelector
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <RecurrenceOptions
        className="recurrence-options"
        selectedPattern={recurrencePattern}
        setRecurrencePattern={setRecurrencePattern}
      />
      {recurrencePattern && (
        <CustomRecurrence
          className="custom-recurrence"
          pattern={recurrencePattern}
        />
      )}
      <MiniCalendarPreview
        className="mini-calendar-preview"
        startDate={startDate}
        endDate={endDate}
        pattern={recurrencePattern}
      />
    </div>
  );
};

export default DatePicker;
