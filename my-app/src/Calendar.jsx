import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// let allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);
const today = new Date();
const newDate = new Date();

const myEvents = [
  {
    id: 0,
    title: "The Politics of International Trade (II)",
    allDay: false,
    start: new Date(2019, 3, 2, 14, 0, 0),
    end: new Date(2019, 3, 2, 15, 15, 0),
    hexColor: "e842f4"
  },
  {
    id: 1,
    title: "Globalization and Technology",
    allDay: false,
    start: new Date(2019, 3, 4, 14, 0, 0),
    end: new Date(2019, 3, 4, 15, 15, 0),
    hexColor: "e842f4"
  },
  {
    id: 2,
    title: "The Politics of Immigration (I)",
    allDay: false,
    start: new Date(2019, 3, 9, 14, 0, 0),
    end: new Date(2019, 3, 9, 15, 15, 0),
    hexColor: "e842f4"
  },
  {
    id: 3,
    title: "The Politics of Immigration (II)",
    allDay: false,
    start: new Date(2019, 3, 11, 14, 0, 0),
    end: new Date(2019, 3, 11, 15, 15, 0),
    hexColor: "e842f4"
  },
  {
    id: 4,
    title: "The Politics of International Development (I)",
    allDay: false,
    start: new Date(2019, 3, 16, 14, 0, 0),
    end: new Date(2019, 3, 16, 15, 15, 0),
    hexColor: "e842f4"
  },

  {
    // CHANGE TO A DIFFERENT COLOR THEN DEFAULT
    id: 5,
    title: "READING RESPONSE #3 DUE",
    allDay: false,
    start: new Date(2019, 3, 18, 14, 0, 0),
    end: new Date(2019, 3, 18, 15, 15, 0),
    hexColor: "0808d1"
  },
  {
    id: 6,
    title: "The Politics of International Development (I)",
    allDay: false,
    start: new Date(2019, 3, 18, 14, 0, 0),
    end: new Date(2019, 3, 18, 15, 15, 0),
    hexColor: "e842f4"
  },
  {
    id: 7,
    title: "Climate Change and the Environment (II)",
    allDay: false,
    start: new Date(2019, 3, 30, 14, 0, 0),
    end: new Date(2019, 3, 30, 15, 15, 0),
    hexColor: "e842f4"
  },
  {
    //change color
    id: 8,
    title: "SHORT PAPERS DUE",
    allDay: false,
    start: new Date(2019, 4, 2, 14, 0, 0),
    end: new Date(2019, 4, 2, 15, 15, 0),
    hexColor: "0808d1"
  },
  {
    id: 9,
    title: "Human Rights",
    allDay: false,
    start: new Date(2019, 4, 7, 14, 0, 0),
    end: new Date(2019, 4, 7, 15, 15, 0),
    hexColor: "e842f4"
  },
  {
    id: 10,
    title: "Final review session",
    allDay: false,
    start: new Date(2019, 4, 9, 14, 0, 0),
    end: new Date(2019, 4, 9, 15, 15, 0),
    hexColor: "e842f4"
  },
  {
    //change color
    id: 11,
    title: "FINAL EXAM",
    allDay: false,
    start: new Date(2019, 4, 16, 14, 0, 0),
    end: new Date(2019, 4, 16, 15, 15, 0),
    hexColor: "d80839"
  },

  {
    id: 12,
    title: "Study for: The Politics of Immigration (II)",
    allDay: false,
    start: new Date(2019, 3, 12, 14, 0, 0),
    end: new Date(2019, 3, 12, 15, 15, 0),
    hexColor: "42f1f4"
  },
  {
    id: 13,
    title: "Study for: The Politics of International Development (I)",
    allDay: false,
    start: new Date(2019, 3, 17, 14, 0, 0),
    end: new Date(2019, 3, 17, 15, 15, 0),
    hexColor: "42f1f4"
  },

  {
    id: 14,
    title: "Study for: The Politics of International Development (I)",
    allDay: false,
    start: new Date(2019, 3, 19, 14, 0, 0),
    end: new Date(2019, 3, 19, 15, 15, 0),
    hexColor: "42f1f4"
  },
  {
    id: 15,
    title: "Study for: Climate Change and the Environment (II)",
    allDay: false,
    start: new Date(2019, 4, 1, 14, 0, 0),
    end: new Date(2019, 4, 1, 15, 15, 0),
    hexColor: "42f1f4"
  },
  {
    id: 17,
    title: "Study for: Human Rights",
    allDay: false,
    start: new Date(2019, 4, 8, 14, 0, 0),
    end: new Date(2019, 4, 8, 15, 15, 0),
    hexColor: "42f1f4"
  },
  {
    //change color
    id: 16,
    title: "Study for: FINAL EXAM",
    allDay: false,
    start: new Date(2019, 4, 10, 14, 0, 0),
    end: new Date(2019, 4, 10, 17, 15, 0),
    hexColor: "42f1f4"
  }
];

const eventStyleGetter = (event, start, end, isSelected) => {
  console.log(event);
  var backgroundColor = "#" + event.hexColor;
  var style = {
    backgroundColor: backgroundColor,
    borderRadius: "0px",
    opacity: 0.8,
    color: "black",
    border: "0px",
    display: "block"
  };
  return {
    style: style
  };
};

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
  <div style={{ height: "100vh", width: "90%", margin: "auto" }}>
    <Calendar
      events={myEvents}
      //   views={allViews}
      step={60}
      showMultiDayTimes
      defaultDate={today}
      localizer={localizer}
      eventPropGetter={eventStyleGetter}
    />
  </div>
);

const CalendarOut = () => (
  <div>
    <MyCalendar />
  </div>
);

export default CalendarOut;
