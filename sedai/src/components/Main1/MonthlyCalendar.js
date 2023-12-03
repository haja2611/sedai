import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import "../../styles/MonthlyCalendar.css";
import CalendarSlide from "./CalenderSlide";
const MonthlyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const [clickedDate, setClickedDate] = useState(null);
  const [isSlideVisible, setIsSlideVisible] = useState(false);

  useEffect(() => {
    moment.tz.setDefault(selectedTimezone);
  }, [selectedTimezone]);

  const displayCalendar = () => {
    const firstDayOfMonth = moment(currentDate).startOf("month").day();
    const daysInMonth = currentDate.daysInMonth();
    let currentDay = 1;

    const calendarRows = [];

    for (let i = 0; i < 6; i++) {
      const cells = []; // Use cells instead of row

      for (let j = 0; j < 7; j++) {
        const cellValue =
          i === 0 && j < firstDayOfMonth
            ? ""
            : currentDay > daysInMonth
            ? ""
            : currentDay++;

        cells.push(
          <td
            key={j}
            className="calendar-cell"
            onClick={() => handleDateClick(cellValue)}
          >
            {cellValue}
          </td>
        );
      }

      calendarRows.push(cells); // Push cells to calendarRows
    }

    const handleDateClick = (date) => {
      const newDate = moment(date, "D");
      setClickedDate(newDate); // Update with a moment object
      setIsSlideVisible(true);
    };

    return (
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {calendarRows.map((row, i) => (
            <tr key={i} className="calendar-row">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="calendar-cell"
                  onClick={() => handleDateClick(cell.props.children)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  const handlePrevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, "month"));
  };
  const handleDateChange = (newDate) => {
    // Update the current date when the date changes in CalendarSlide
    setCurrentDate(newDate);
  };
  useEffect(() => {
    displayCalendar();
  }, [currentDate, selectedTimezone]);

  return (
    <div className="calendar-container" style={{ backgroundColor: "#0a162b" }}>
      <div className="calendar-header">
        <button className="arrow-button" onClick={handlePrevMonth}>
          &#9664; {/* Unicode character for left arrow */}
        </button>
        <h2>{currentDate.format("MMMM YYYY")}</h2>
        <button className="arrow-button" onClick={handleNextMonth}>
          &#9654; {/* Unicode character for right arrow */}
        </button>
      </div>

      {/* Add calendar display */}
      {displayCalendar()}

      {/* Add timezone selection */}
      <div className="timezone-container">
        <select value={selectedTimezone} onChange={handleTimezoneChange}>
          {moment.tz.names().map((timezone) => (
            <option key={timezone} value={timezone}>
              {timezone} (GMT {moment.tz(timezone).format("Z")})
            </option>
          ))}
        </select>
      </div>
      {/* Show the slide with date and time buttons */}
      {isSlideVisible && (
        <CalendarSlide
          date={clickedDate}
          onClose={() => setIsSlideVisible(false)}
          onDateChange={handleDateChange}
        />
      )}
    </div>
  );
};

export default MonthlyCalendar;
