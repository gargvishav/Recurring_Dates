// components/DateRangeSelector.js
"use client";

import React from "react";
import { format } from "date-fns";

const DateRangeSelector = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2 text-gray-700">
        Start Date:
      </label>
      <input
        type="date"
        value={startDate ? format(startDate, "yyyy-MM-dd") : ""}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="block text-lg font-medium mt-4 mb-2 text-gray-700">
        End Date (Optional):
      </label>
      <input
        type="date"
        value={endDate ? format(endDate, "yyyy-MM-dd") : ""}
        onChange={(e) => setEndDate(new Date(e.target.value))}
        className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DateRangeSelector;
