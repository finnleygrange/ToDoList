import React, { useState, useEffect } from "react";

function DateNow() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const today = now.getDate();
  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();

  let dayStr = DayToString(day);
  let monthStr = MonthToString(month);

  function DayToString(day) {
    switch (day) {
      case 0:
        return "Sunday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
        break;

      default:
        return "Monday";
        break;
    }
  }

  function MonthToString(month) {
    switch (month) {
      case 0:
        return "Jan";
        break;
      case 1:
        return "Feb";
        break;
      case 2:
        return "Mar";
        break;
      case 3:
        return "Apr";
        break;
      case 4:
        return "May";
        break;
      case 5:
        return "Jun";
        break;
      case 6:
        return "Jul";
        break;
      case 7:
        return "Aug";
        break;
      case 8:
        return "Sept";
        break;
      case 9:
        return "Oct";
        break;
      case 10:
        return "Nov";
        break;
      case 11:
        return "Dec";
        break;
      default:
        monthStr = "January";
        break;
    }
  }

  return (
    <>
      <div className="d-flex w-100 align-items-center justify-content-between">
        <div className="d-flex">
          <span className="fs-1 fw-bold">{today} </span>
          <div className="d-flex flex-column lh-1 justify-content-center">
            <span className="fs-6 fw-bolder">{monthStr} </span>
            <span className="fs-6">{year} </span>
          </div>
        </div>
        <div className="">
          <span className="time fs-6">{time}</span>
        </div>
        <div>
          <span className="fs-6">{dayStr}</span>
        </div>
      </div>
    </>
  );
}

export default DateNow;
