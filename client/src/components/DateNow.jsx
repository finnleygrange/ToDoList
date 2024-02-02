function DateNow() {
  const now = new Date();
  const today = now.getDate();
  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();

  let dayStr = DayToString(day);
  let monthStr = MonthToString(month);

  function DayToString(day) {
    switch (day) {
      case 0:
        return "Monday";
        break;
      case 1:
        return "Tuesday";
        break;
      case 2:
        return "Wednesday";
        break;
      case 3:
        return "Thursday";
        break;
      case 4:
        return "Friday";
        break;
      case 5:
        return "Saturday";
        break;
      case 6:
        return "Sunday";
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
      <div className="header-left">
        <div>
          <span className="today">{today}</span>
          <span className="month">{monthStr}</span>
          <span className="year">{year}</span>
        </div>
        <div className="header-right">
          <span className="day">{dayStr}</span>
        </div>
      </div>
    </>
  );
}

export default DateNow;
