// https://www.npmjs.com/package/react-big-calendar
import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import shpelogo from "./pictures/SHPE_logo_FullColor.png";
import color from "@material-ui/core/colors/amber";
import { red } from "@material-ui/core/colors";
import { compose } from "@material-ui/system";
import "./Calendar.css";

import PCED from "./Events/PCED.jsx";

// let allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);
const today = new Date();
const newDate = new Date();

const myEvents = [
  {
    id: 0,
    title: "Spring club fair",

    allDay: false,
    start: new Date(2020, 1, 6, 14, 0, 0),
    end: new Date(2020, 1, 6, 15, 15, 0),
    hexColor: "D23F26"
  },
  {
    id: 1,
    title: "First General Body Meeting",
    allDay: false,
    start: new Date(2020, 1, 13, 14, 0, 0),
    end: new Date(2020, 1, 13, 15, 15, 0),
    hexColor: "D23F26"
  },
  {
    id: 2,
    title: "RLDC Region 4",
    allDay: false,
    start: new Date(2020, 2, 5, 14, 0, 0),
    end: new Date(2020, 2, 7, 15, 15, 0),
    hexColor: "f26534"
  },
  {
    id: 3,
    title: "Pre-College Engineering Day",
    link: PCED,
    allDay: false,
    start: new Date(2020, 2, 13, 14, 0, 0),
    end: new Date(2020, 2, 13, 15, 15, 0),
    hexColor: "D23F26"
  },
  {
    id: 4,
    title: "2nd General Body Meeting",
    allDay: false,
    start: new Date(2020, 2, 26, 14, 0, 0),
    end: new Date(2020, 2, 26, 15, 15, 0),
    hexColor: "D23F26"
  },

  {
    id: 5,
    title: "Third General Body Meeting",
    allDay: false,
    start: new Date(2020, 3, 23, 14, 0, 0),
    end: new Date(2020, 3, 23, 15, 15, 0),
    hexColor: "D23F26"
  },
  {
    id: 6,
    title: " Noche de Ciencias",
    allDay: false,
    start: new Date(2020, 4, 2, 14, 0, 0),
    end: new Date(2020, 4, 2, 15, 15, 0),
    hexColor: "D23F26" // Red for LAESA Events
  },
  {
    id: 8,
    title: "End of Spring Term",
    allDay: false,
    start: new Date(2020, 4, 22, 14, 0, 0),
    end: new Date(2020, 4, 22, 15, 15, 0),
    hexColor: "1070B8"
  },
  {
    id: 9,
    title: "Spring Break",
    allDay: false,
    start: new Date(2020, 3, 8, 14, 0, 0),
    end: new Date(2020, 3, 10, 15, 15, 0),
    hexColor: "1070B8" // dark blue for school events
  },
  {
    id: 10,
    title: "SHPE Virtual Career Fair",
    allDay: false,
    start: new Date(2020, 3, 18, 12, 0, 0),
    end: new Date(2020, 3, 18, 16, 0, 0),
    hexColor: "f26534" // oragne for SHPE Events
  },
  {
    id: 11,
    title: "Wednesday Schedule",
    allDay: false,
    start: new Date(2020, 3, 7, 12, 0, 0),
    end: new Date(2020, 3, 7, 16, 0, 0),
    hexColor: "f26534" // oragne for SHPE Events
  },
  {
    id: 12,
    title: "LMS Scholarship Due Date",
    allDay: false,
    start: new Date(2020, 3, 10, 12, 0, 0),
    end: new Date(2020, 3, 10, 16, 0, 0),
    hexColor: "72a9be" // oragne for SHPE Events
  }
];
const eventStyleGetter = (event, start, end, isSelected) => {
  //   console.log(event);
  var backgroundColor = "#" + event.hexColor;
  var style = {
    backgroundColor: backgroundColor,
    borderRadius: "0px",
    // opacity: 0.8,
    color: "black",
    border: "0px",
    display: "block",
    fontWeight: "500"
  };
  return {
    style: style
  };
};

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const MyCalendar = props => (
  <div
    style={{
      height: "100vh",
      width: "90%",
      margin: "auto",
      padding: "30px"
    }}
  >
    <Calendar
      events={myEvents}
      step={60}
      showMultiDayTimes
      defaultDate={today}
      localizer={localizer}
      eventPropGetter={eventStyleGetter}
    />
  </div>
);

class LAESACalendar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calendar-main">
        <h2> Save The Dates</h2>
        <MyCalendar
          style={{
            backgroundColor: "red"
          }}
        />
      </div>
    );
  }
}

export default LAESACalendar;
