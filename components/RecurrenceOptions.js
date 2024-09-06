// components/RecurrenceOptions.js
"use client";

import React from "react";

const RecurrenceOptions = ({ selectedPattern, setRecurrencePattern }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2 text-gray-700">
        Recurrence Pattern:
      </label>
      <select
        value={selectedPattern}
        onChange={(e) => setRecurrencePattern(e.target.value)}
        className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
