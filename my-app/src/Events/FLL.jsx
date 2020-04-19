import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FLL_Director from "../pictures/Jean-Luc.jpg";
import FLL_Director2 from "../pictures/Cesar.jpg";
import FLL_Picture1 from "../pictures/FLL Pictures/IMG_8317.jpg";
import FLL_Picture2 from "../pictures/FLL Pictures/IMG_8322.jpg";
import FLL_Picture3 from "../pictures/FLL Pictures/IMG_8311.jpg";
import FLL_Picture4 from "../pictures/FLL Pictures/IMG_8316.jpg";
import CardProfiles from "./CardProfiles";

import "./Events.css";

const DirectorContactInfo = [
  {
    Email: "jeanlucmantoine@gmail.com",
    Phone: "347-954-7628"
  }
];
class FLL extends Component {
  state = {
    DirectorList: [
      {
        Title: "FLL Director",
        Name: "Jean-Luc Antoine",
        Picture: FLL_Director,
        Bio:
          "Jean-Luc Antoine is a second-year student at The City College of New York and has been part of\
      LAESA-SHPE since the Spring 2019 semester. He has been particularly involved with FIRST(For\
      Inspiration and Recognition of Science and Technology) Lego League which is an organization\
      that creates a platform to support and help keep young elementary kids interested in STEM and\
      robotics. Jean-Luc was a volunteer in The Spring 2019 semester at the FFL event and now he is\
      the director for the FIRST Lego League program at LA in which he is organizing, coordinating\
      and planning FLL events. As part of his duties, Jean-Luc is overseeing logistics, act direct\
      communication point with event organizers and ensure that the event goes smoothly, as well\
      as recruit as many volunteers as needed."
      },
      {
        Title: "FLL CoDirector",
        Name: "Ceasar",
        Picture: FLL_Director2,
        Bio:
          "My name is Cesar Tacuri,and I am Civil Engineering major on his junior year. I joined\
      LAESA in Spring of 2019. Being a transfer student, it was hard adjusting to a new school\
      and a new community. As I explored my campus and its resources, I came across LAESA.\
      Throughout the next semester, I decided to become a more active member and experienced\
      what LAESA was truly about. They’re a group of students inspiring and encouraging other\
      students through a strong work ethic, accomplishments, and discipline. Personally, I wanted\
      to give new students the same tools and knowledge LAESA had given me. So, in Fall of 2019,\
      I became the co-director of Recruitment and Retention, First Lego League (FLL), and\
       Pre-College Engineering Day (PCED) Logistics. I made sure I was well known by my peers and\
      that my peers were well known, too. LAESA will forever be my life’s best chapter not only for\
      the professional development but for the friends I’ve made. I am proud to be a LAESA member."
      }
    ]
  };
  render() {
    return (
      <div className="Events-main">
        <header className="Events-header">
          <div className="Events-GROUP-PIC">
            <h1>First Lego League</h1>
          </div>
          <div className="card-color">
            <h2> About </h2>
            <p>
              First Lego League's mission is to inspire young adults to be
              science and technology innovators, by engaging them in exciting
              programs that help them build the necessaries skills in science,
              engineering, and technology.
            </p>
          </div>

          <div className="box2">
            {/* <h2> Pictures </h2> */}
            {/* these pictures here need to be modified using css to fix the size */}
            {/* <img className="Pictures" src={FLL_Picture1} alt="Picture 1" />
            <img className="Pictures" src={FLL_Picture2} alt="Picture 2" />
            <img className="Pictures" src={FLL_Picture3} alt="Picture 3" />
            <img className="Pictures" src={FLL_Picture4} alt="Picture 4" /> */}
          </div>

          <CardProfiles DirectorListName={this.state.DirectorList} />

          <div className="card-color">
            <h4> Director Contact Info </h4>
            <ul className="Contact">
              <li className="events-list">P: 347-954-7628 </li>
              <li className="events-list">Email: jeanlucmantoine@gmail.com</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default FLL;
