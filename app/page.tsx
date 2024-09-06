// app/page.tsx
import React from "react";
import DatePicker from "../components/DatePicker";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Select Recurring Dates</h1>
      <DatePicker />
    </div>
  );
}
