import React from "react";
import moment from "moment-timezone";

const CalendarSlide = ({ date, onClose, onDateChange }) => {
  const handleTimeButtonClick = (time) => {
    // Handle time button click here
    console.log(`Date: ${date.format("MMMM D")}, Time: ${time}`);
  };

  return (
    <div className="calendar-slide">
      <div className="slide-header">
        <span>{date.format("MMMM D")}</span>
        <button onClick={onClose}>&#10005;</button>
      </div>
      <div className="time-buttons">
        {Array.from({ length: 24 }).map((_, i) => (
          <button key={i} onClick={() => handleTimeButtonClick(`${i}:00am`)}>
            {i === 0 ? "12:00am" : `${i}:00am`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalendarSlide;
