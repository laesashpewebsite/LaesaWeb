import React, { Component } from "react";
import "./Events.css";
import shpeJR_Director from "../pictures/Byron.jpg";
import shpeJR_Director2 from "../pictures/Mariel.jpg";
import CardProfiles from "./CardProfiles";

class shpeJR extends Component {
  state = {
    // state has the array be in a fixed position and when calls a value in the array it moves on to the next state after it is done calling
    DirectorList: [
      {
        id: 1,
        Title: "SHPE Jr. Co-Director",
        Name: "Mariel Gonzalez",
        Picture: shpeJR_Director2,
        Bio:
          "Mariel Gonzalez is a mechanical engineering student transferred\
          from the Dominican Republic and co-director of LAESA\
          Shpe-Junior. When not studying, Mariel enjoys reaching out to\
          friends and family, hiking and planning for the next adventure\
          as an engineer",
        styles: {
          backgroundColor: "#72a9be",
          color: "black"
        }
      },
      {
        id: 2,
        Title: "SHPE Jr. Co-Director",
        Name: "Byron Marcatoma",
        Picture: shpeJR_Director,
        Bio:
          " Byron Marcatoma is a computer science student. He has been part\
        of LAESA-SHPE since his freshman year in 2018 at The City\
        College of New York. The same year, he became co-director for\
        SHPE Jr and in May 2019, he directed Noches de Ciencias,\
        exposing minority students to STEM through science-based\
        projects and talks from professionals, and officially created a\
        chapter at Manhattan Bridges High school. For the current Year,\
        Byron is the director for SHPE Jr and aims to expose more\
        students to the STEM field and careers.",
        styles: {
          backgroundColor: "rgb(0, 31, 91, 100)",
          color: "#f26534"
        }
      }
    ]
  };
  render() {
    return (
      <div className="Events-Main">
        <header className="Events-header">
          <div className="SHPEJR-GROUP-PIC">
            <h1 id="SHPEJR-Title"> SHPE Jr. </h1>
          </div>
          <div className="card-color2">
            <h2>Noche de Ciencias</h2>
            <p>
              At SHPE, we know early exposure to STEM positively influences the
              likelihood of a student choosing it for their career path. The
              Noche de Ciencias™ program is designed to introduce the profound
              possibilities of STEM to high schoolers and their families. Noche
              de Ciencias events are intented to engage and inspire Hispanic
              youth (and their parents) to pursue STEM degrees and careers and
              ultimately advance SHPE’s mission and vision.
            </p>
          </div>
          <div className="card-color">
            <h2>Mission</h2>
            <p>
              SHPE’s mission is to empower the Hispanic community to realize its
              fullest potential and to impact the world through STEM awareness,
              access, support, and development.
            </p>
            <h2>Vision</h2>
            <p>
              SHPE’s vision is a world where Hispanics are highly valued and
              influential as the leading innovators, scientists, mathematicians,
              and engineers
            </p>
          </div>

          <CardProfiles DirectorListName={this.state.DirectorList} />
          <div className="card-color2">
            <h2>Goals</h2>

            <ul class="lists">
              <li className="events-list">
                Increase awareness of STEM fields and careers
              </li>
              <li className="events-list">
                Strengthen participants’ beliefs about their ability to succeed
                in STEM
              </li>
              <li className="events-list">
                {" "}
                Deepen participants’ understanding of STEM identity.
              </li>
            </ul>
          </div>
          <div className="card-color">
            <h2> Director Contact Info </h2>
            <ul className="Contact">
              <li className="events-list">P: 929-268-9609 </li>
              <li className="events-list">Email: laesa.shpejr@gmail.com </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default shpeJR;
