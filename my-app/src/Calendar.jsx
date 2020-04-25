// https://www.npmjs.com/package/react-big-calendar
import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// @import 'react-big-calendar/lib/sass/styles';

// import "react-big-calendar/lib/sass/styles";
import "./Calendar.css";

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
    hexColor: "D23F26",
    isSelect: "",
    eventLink: false
  },
  {
    id: 1,
    title: "First General Body Meeting",
    allDay: false,
    start: new Date(2020, 1, 13, 14, 0, 0),
    end: new Date(2020, 1, 13, 15, 15, 0),
    hexColor: "D23F26",
    isSelect: "",
    eventLink: false
  },
  {
    id: 2,
    title: "RLDC Region 4",
    allDay: false,
    start: new Date(2020, 2, 5, 14, 0, 0),
    end: new Date(2020, 2, 7, 15, 15, 0),
    hexColor: "f26534",
    isSelect: "",
    eventLink: false
  },
  {
    id: 3,
    title: "Pre-College Engineering Day",
    // link: PCED,
    allDay: false,
    start: new Date(2020, 2, 13, 14, 0, 0),
    end: new Date(2020, 2, 13, 15, 15, 0),
    hexColor: "D23F26",
    isSelect: "/PCED",
    eventLink: true
  },
  {
    id: 4,
    title: "2nd General Body Meeting",
    allDay: false,
    start: new Date(2020, 2, 26, 14, 0, 0),
    end: new Date(2020, 2, 26, 15, 15, 0),
    hexColor: "D23F26",
    isSelect: "",
    eventLink: false
  },

  {
    id: 5,
    title: "Third General Body Meeting",
    allDay: false,
    start: new Date(2020, 3, 23, 14, 0, 0),
    end: new Date(2020, 3, 23, 15, 15, 0),
    hexColor: "D23F26",
    isSelect: "",
    eventLink: false
    // resources: {
    //   id: 1,
    //   title: "./PCED"
    // }
  },
  {
    id: 6,
    title: " Noche de Ciencias",
    allDay: false,
    start: new Date(2020, 4, 2, 14, 0, 0),
    end: new Date(2020, 4, 2, 15, 15, 0),
    hexColor: "D23F26", // Red for LAESA Events
    isSelect: "/SHPE.JR",
    eventLink: true
  },
  {
    id: 7,
    title: "End of Spring Term",
    allDay: false,
    start: new Date(2020, 4, 22, 14, 0, 0),
    end: new Date(2020, 4, 22, 15, 15, 0),
    hexColor: "1070B8",
    isSelect: "",
    eventLink: false
  },
  {
    id: 8,
    title: "Spring Break",
    allDay: false,
    start: new Date(2020, 3, 8, 14, 0, 0),
    end: new Date(2020, 3, 10, 15, 15, 0),
    hexColor: "1070B8",
    isSelect: "",
    eventLink: false
    // dark blue for school events
  },
  {
    id: 9,
    title: "SHPE Virtual Career Fair",
    allDay: false,
    start: new Date(2020, 3, 18, 12, 0, 0),
    end: new Date(2020, 3, 18, 16, 0, 0),
    hexColor: "f26534",
    isSelect: "",
    eventLink: false
    // oragne for SHPE Events
  },
  {
    id: 10,
    title: "Wednesday Schedule",
    allDay: false,
    start: new Date(2020, 3, 7, 12, 0, 0),
    end: new Date(2020, 3, 7, 16, 0, 0),
    hexColor: "1070B8",
    isSelect: "",
    eventLink: false
    // oragne for SHPE Events
  },
  {
    id: 11,
    title: "LMS Scholarship Due Date",
    allDay: false,
    start: new Date(2020, 3, 10, 12, 0, 0),
    end: new Date(2020, 3, 10, 16, 0, 0),
    hexColor: "72a9be",
    isSelect: "",
    eventLink: false
    // light blue for due dates
  },
  {
    id: 12,
    title: "Engineers of Tomorrow Scholarship",
    allDay: false,
    start: new Date(2020, 3, 22, 12, 0, 0),
    end: new Date(2020, 3, 22, 16, 0, 0),
    hexColor: "72a9be",
    isSelect: "",
    eventLink: false
    // oragne for SHPE Events
  },
  {
    id: 13,
    title: "Gala Banquet",
    allDay: false,
    start: new Date(2020, 4, 8, 12, 0, 0),
    end: new Date(2020, 4, 8, 16, 0, 0),
    hexColor: "D23F26",
    isSelect: "",
    eventLink: false
    // oragne for SHPE Events
  }
];
const eventStyleGetter = (event, start, end, isSelected) => {
  // console.log(event);

  var backgroundColor = "#" + event.hexColor;
  var style = {
    backgroundColor: backgroundColor,
    borderRadius: "0px",
    color: "black",
    border: "0px",
    display: "block",
    fontWeight: "500"
  };

  return {
    style: style
  };
};
const dayStyleGetter = (event, start, end, isSelected) => {
  // console.log(event);

  var style = {
    opacity: ".5"
  };

  return {
    style: style
  };
};

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
    {/* {console.log(props.onClick)} */}
    <Calendar
      events={myEvents}
      step={60}
      showMultiDayTimes
      defaultDate={today}
      localizer={localizer}
      eventPropGetter={eventStyleGetter}
      dayPropGetter={dayStyleGetter}
      // onSelectEvent={() => console.log("hello")}
      onSelectEvent={props.onClick}

      // onDrillDown={eventLinkGetter}
    ></Calendar>
  </div>
);

class LAESACalendar extends Component {
  handleClick = props => {
    // return console.log(props.isSelect);
    if (props.eventLink === true) {
      return this.props.history.replace(props.isSelect);
    }
  };

  render() {
    return (
      <div className="calendar-main">
        {/* <Link to="/">hiiii</Link> */}
        <h2>Save The Dates!</h2>
        <MyCalendar style={{ opacity: ".8" }} onClick={this.handleClick} />
      </div>
    );
  }
}

export default LAESACalendar;
