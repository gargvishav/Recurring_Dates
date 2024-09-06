// components/CustomRecurrence.js
"use client";

import React, { useState } from "react";

const CustomRecurrence = ({ pattern, className }) => {
  const [monthlyOption, setMonthlyOption] = useState("specific-day");
  const [specificDay, setSpecificDay] = useState(1);
  const [nthWeekday, setNthWeekday] = useState({
    week: "first",
    day: "Monday",
  });

  const handleOptionChange = (e) => setMonthlyOption(e.target.value);

  return (
    <div className={`custom-recurrence ${className}`}>
      <h4>Customize Recurrence for: {pattern}</h4>

      {pattern === "Monthly" && (
        <div>
          <label>Recurrence Type:</label>
          <select value={monthlyOption} onChange={handleOptionChange}>
            <option value="specific-day">Specific Day of the Month</option>
            <option value="nth-weekday">Nth Weekday of the Month</option>
          </select>

          {monthlyOption === "specific-day" && (
            <div>
              <label>Day of the Month:</label>
              <input
                type="number"
                min="1"
                max="31"
                value={specificDay}
                onChange={(e) => setSpecificDay(e.target.value)}
              />
            </div>
          )}

          {monthlyOption === "nth-weekday" && (
            <div>
              <label>Week:</label>
              <select
                value={nthWeekday.week}
                onChange={(e) =>
                  setNthWeekday((prev) => ({ ...prev, week: e.target.value }))
                }
              >
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
                <option value="fourth">Fourth</option>
                <option value="last">Last</option>
              </select>

              <label>Day:</label>
              <select
                value={nthWeekday.day}
                onChange={(e) =>
                  setNthWeekday((prev) => ({ ...prev, day: e.target.value }))
                }
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomRecurrence;
