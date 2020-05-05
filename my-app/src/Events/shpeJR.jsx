import React, { Component } from "react";
import "./Events.css";
import shpeJR_Director from "../pictures/Byron.jpg";
import shpeJR_Director2 from "../pictures/Mariel.jpg";
import CardProfiles from "./CardProfiles";
import SHPEJR_Group from "./../pictures/Shpejr-group.JPG";

import SHPEJr_Picture2 from "../pictures/SHPEJr_Pictures/jr1.jpg";
import SHPEJr_Picture from "../pictures/SHPEJr_Pictures/jr2.jpg";
import SHPEJr_Picture3 from "../pictures/SHPEJr_Pictures/jr3.jpg";
import SHPEJr_Picture4 from "../pictures/SHPEJr_Pictures/jr4.jpg";
import SHPEJr_Picture5 from "../pictures/SHPEJr_Pictures/jr5.jpg";
import SHPEJr_Picture6 from "../pictures/SHPEJr_Pictures/jr6.jpg";

import Slides from "./Fade.jsx";

class shpeJR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
      DirectorList: [
        {
          id: 1,
          Title: "SHPEJr Jr. Co-Director",
          Name: "Mariel Gonzalez",
          Picture: shpeJR_Director2,
          Bio:
            "Mariel Gonzalez is a mechanical engineering student transferred            from the Dominican Republic and co-director of            SHPE Jr. When not studying, Mariel enjoys reaching out to            friends and family, hiking and planning for the next adventure            as an engineer.",
          styles: {
            backgroundColor: "#72a9be",
            color: "black"
          }
        },
        {
          id: 2,
          Title: "SHPEJr Jr. Co-Director",
          Name: "Byron Marcatoma",
          Picture: shpeJR_Director,
          Bio:
            " Byron Marcatoma is a computer science student. He has been part          of LAESA-SHPE since his freshman year in 2018 at The City          College of New York. The same year, he became co-director for          SHPE Jr and in May 2019, he directed Noches de Ciencias,          exposing minority students to STEM through science-based          projects and talks from professionals, and officially created a          chapter at Manhattan Bridge,s High school. For the current Year,          Byron is the director for SHPE Jr and aims to expose more          students to the STEM field and careers.",
          styles: {
            backgroundColor: "rgb(0, 31, 91, 100)",
            color: "#f26534"
          }
        }
      ],
      SHPEJr_Pictures: [
        {
          id: 1,
          img: SHPEJr_Picture,
          title: "SHPEJr Image1",
          alt: "SHPEJr 1",
          cols: 1
        },
        {
          id: 2,
          img: SHPEJr_Picture2,
          title: "SHPEJr Image2",
          alt: "SHPEJr 1",
          cols: 2
        },
        {
          id: 3,
          img: SHPEJr_Picture3,
          title: "SHPEJr Image3",
          alt: "SHPEJr 1",
          cols: 3
        },
        {
          id: 4,
          img: SHPEJr_Picture4,
          title: "SHPEJr Image4",
          alt: "SHPEJr 1",
          cols: 3
        },
        {
          id: 5,
          img: SHPEJr_Picture5,
          title: "SHPEJr Image5",
          alt: "SHPEJr 1",
          cols: 3
        },
        {
          id: 6,
          img: SHPEJr_Picture6,
          title: "SHPEJr Image6",
          alt: "SHPEJr 1",
          cols: 3
        }
      ]
    };
  }
  render() {
    return (
      <div className="Events-Main">
        <header className="Events-header">
          <div className="Events-Banner">
            <h2> SHPE JR. </h2>
            <img
              src={SHPEJR_Group}
              className="Events-Picture"
              alt="SHPE.Jr Group"
            />
          </div>
          <div className="card-color2">
            <h2>Noche de Ciencias</h2>
            <p>
              At SHPE, we know early exposure to STEM positively influences the
              likelihood of a student choosing it for their career path. The
              Noche de Ciencias™ program is designed to introduce the profound
              possibilities of STEM to high schoolers and their families. Noche
              de Ciencias events are intended to engage and inspire Hispanic
              youth (and their parents) to pursue STEM degrees and careers and
              ultimately advance SHPE’s mission and vision.
            </p>
          </div>

          <div className="card-color2">
            <div className="Row">
              <div className="Column1">
                <h2> Mission </h2>
                <p>
                  PCED's Mission is to expose the younger Latino community to
                  STEM related careers (Science, Technology, Engineering and
                  Mathematics) while obtaining real-life project experience, and
                  developing team-building and leadership skills.
                </p>
              </div>

              <div className="Column1">
                <h2>Vision</h2>
                <p>
                  SHPE’s vision is a world where Hispanics are highly valued and
                  influential as the leading innovators, scientists,
                  mathematicians, and engineers.
                </p>
              </div>
            </div>
          </div>
          <div className="Gallery">
            {/* Slide ,show starts here */}
            {/* To change images in slide ,show just change its origin url. everything else is automatic! */}
            <div className="card-color">
              <div className="slide-container">
                <h2> Noche De Sciencias Gallery </h2>
                <Slides
                  tileData={this.state.SHPEJr_Pictures}
                  key={this.state.SHPEJr_Pictures.id}
                />
              </div>
            </div>
          </div>

          <div className="card-color2">
            <h2>Meet Our Directors!</h2>
          </div>
          <CardProfiles DirectorListName={this.state.DirectorList} />
          <div className="card-color2">
            <h2>Goals</h2>

            <ul className="lists">
              <li className="events-list">
                Increase awareness of STEM fields and careers.
              </li>
              <li className="events-list">
                Deepen participant's understanding of STEM identity.
              </li>
              <li className="events-list">
                Strengthen participant's beliefs about their ability to succeed.
                in STEM
              </li>
            </ul>
          </div>
          <div className="card-color">
            <h2> Director Contact Info </h2>
            <ul className="lists">
              <li className="events-list">P: 929-268-9609 </li>
              <li className="events-list">Email: laesa.shpejr_@gmail.com </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default shpeJR;
