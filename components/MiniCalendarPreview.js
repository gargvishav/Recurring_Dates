// components/MiniCalendarPreview.js
"use client";

import React from "react";
import {
  addMonths,
  format,
  eachDayOfInterval,
  addDays,
  addYears,
} from "date-fns";

const MiniCalendarPreview = ({ startDate, endDate, pattern, className }) => {
  const generateDates = () => {
    if (!startDate) return [];
    let dates = [];

    switch (pattern) {
      case "Daily":
        const dailyEndDate = endDate || addDays(startDate, 10);
        dates = eachDayOfInterval({ start: startDate, end: dailyEndDate });
        break;

      case "Weekly":
        for (let i = 0; i < 6; i++) {
          dates.push(addDays(startDate, i * 7));
        }
        break;

      case "Monthly":
        for (let i = 0; i < 3; i++) {
          dates.push(addMonths(startDate, i));
        }
        break;

      case "Yearly":
        for (let i = 0; i < 3; i++) {
          dates.push(addYears(startDate, i));
        }
        break;

      default:
        break;
    }

    return dates.map((date) => format(date, "yyyy-MM-dd"));
  };

  return (
    <div className={`mini-calendar-preview ${className}`}>
      <h4>Preview:</h4>
      <div className="grid">
        {generateDates().map((date, index) => (
          <div key={index}>{date}</div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendarPreview;
