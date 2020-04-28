// https://www.npmjs.com/package/react-slideshow-image
import React from "react";
import "./Main.css";
import SHPE_Convention from "./pictures/Convention-Group.jpg";
import Pillars from "./pillar.jsx";
import Mission from "./pictures/SHPEMission.jpg";
import Vision from "./pictures/SHPEVision.jpg";
import { Fade } from "react-slideshow-image";
import fadeImages from "./pictures/PillarsFolder/AcademicDevelopment.jpg";
import fadeImages1 from "./pictures/PillarsFolder/ProfessionalDevelopment.jpg";
import fadeImages2 from "./pictures/PillarsFolder/ChapterDevelopment.jpg";
import fadeImages3 from "./pictures/PillarsFolder/LeadershipDevelopment.jpg";
import fadeImages4 from "./pictures/PillarsFolder/CommunityOutreach.jpg";

// const importfadeImages = [
//   './pictures/PillarsFolder/AcademicDevelopment.jpg',
//   './pictures/PillarsFolder/ProfessionalDevelopment.jpg',
//   './pictures/PillarsFolder/ChapterDevelopment.jpg',
//   './pictures/PillarsFolder/LeadershipDevelopment.jpg',
//   './pictures/PillarsFolder/CommunityOutreach.jpg'
// ];

{
  /*Properties for the slide show are here*/
}
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: true,
  infinite: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`Fade transition finished from ${oldIndex} to ${newIndex}`);
  }
};

{
  /* Main Code starts here */
}
function main() {
  return (
    <div className="Main">
      <header className="header">
        {/* Main Picture */}
        <div className="box1">
          <h2> Meet Our Familia! </h2>
          <img
            src={SHPE_Convention}
            className="Main-Picture"
            alt="Convention Group"
          />
        </div>

        {/* About LASA-SHPE Information */}
        <div className="box2">
          <h2> About LAESA-SHPE </h2>
          <p className="body">
            LAESA–SHPE is the largest and most prominent undergraduate student
            organization at The City College of New York. In 1983, a group of
            dedicated students, to unite all Latino and other minority
            engineering students, share cultural ideas and promote leadership,
            founded LAESA within City College. In 1986, LAESA joined forces with
            the Society of Hispanic Professional Engineers (SHPE) to better
            achieve their goals and connect with a larger body of professionals.
            This partnership has flourished over the years and today, LAESA is a
            firm supporter of the SHPE core values, while remaining true to its
            original mission. With over 150 members, LAESA-SHPE has been able to
            gather motivated students from all engineering disciplines and a
            diverse pool of cultural backgrounds. This dynamic group of
            students, alongside their highly supportive alumni members, has had
            many achievements at The City College of New York and within the
            community. Some of our accomplishments are listed below:
          </p>
          <ul>
            <h5> Academic Development & Leadership Yearlty Programs </h5>
            <li className="list">
              Developing Excellence in Academics and Leadership DEAL Program
              since 2000
            </li>
            <li className="list">Information Technology Program since 1990</li>
            <li className="list">Mentorship Program since 2018</li>
            <h5> Community Outreach Programs & Events </h5>
            <li className="list">Pre-College Engineering Day since 1994</li>
            <li className="list">
              New York Institute of Science, Technology, Engineering, and
              Mathematics since 2001
            </li>
            <li className="list">Noche de Ciencas since 2017</li>
            <li className="list">First Lego League since 2001</li>
            <li className="list">
              SHPE Jr. Chapters at Manhattan Bridges High School and George
              Washington High School since 2019
            </li>
            <h5> Leadership Representatives within SHPE </h5>
            <li className="list">
              Region IV Regional Student Representative 2001, 2003, 2004, 2018
            </li>
            <li className="list">
              Region IV Sub-Regional Student Representative 2000, 2006, 2018,
              2019
            </li>
          </ul>
        </div>

        {/* LAESA'S Mission and Vision Section */}
        <div className="box1">
          <div className="Row">
            <div className="Column1">
              <h2> LAESA SHPE'S MISSION </h2>
              <p>
                Our mission is to be the premier facilitator of student's
                endeavors in the Science, Technology, Engineering, and
                Mathematics field (STEM). Also, to facilitate in other areas as
                well, as to help to fully develop individuals to their highest
                potential."
              </p>
              {/* <<<<<<< HEAD
          <ul>
            <h5> Academic Development & Leadership Yearlty Programs </h5>
            <li className="list">
              Developing Excellence in Academics and Leadership DEAL Program
              since 2000
            </li>
            <li className="list">Information Technology Program since 1990</li>
            <li className="list">Mentorship Program since 2018</li>
            <h5> Community Outreach Programs & Events </h5>
            <li className="list">Pre-College Engineering Day since 1994</li>
            <li className="list">
              New York Institute of Science, Technology, Engineering, and
              Mathematics since 2001
            </li>
            <li className="list">Noche de Ciencas since 2017</li>
            <li className="list">First Lego League since 2001</li>
            <li className="list">
              SHPE Jr. Chapters at Manhattan Bridges High School and George
              Washington High School since 2019
            </li>
            <h5> Leadership Representatives within SHPE </h5>
            <li className="list">
              Region IV Regional Student Representative 2001, 2003, 2004, 2018
            </li>
            <li className="list">
              Region IV Sub-Regional Student Representative 2000, 2006, 2018,
              2019
            </li>
          </ul>
        </div>

        <div className="box1">
          <div className="Row">
            <div className="Column1">
              <h2> LAESA SHPE'S MISSION </h2>
              <p>
                Our mission is to be the premier facilitator of student's
                endeavors in the Science,Technology, Engineering, and
                Mathematics field (STEM). Also, to facilitate in other areas as
                well, as to help to fully develop individuals to their highest
                potential."
              </p>
              <img className="Column-pictures1" src={Mission} alt="Mission" />
            </div>
            <div className="Column1">
              <h2> LAESA SHPE'S VISION </h2>
              <p>
                Our mission is to S.T.E.P into THE FUTURE. This can be
                accomplished by using four principles. They are the principles
                of Support, Teamwork, Excellence, and Professionalism!
              </p>
              <img className="Column-pictures1" src={Vision} alt="Vision" />
            </div>
          </div>
======= */}
              <img className="Column-pictures1" src={Mission} alt="Mission" />
            </div>
            <div className="Column1">
              <h2> LAESA SHPE'S VISION </h2>
              <p>
                Our mission is to S.T.E.P into THE FUTURE. This can be
                accomplished by using four principles. They are the principles
                of Support, Teamwork, Excellence, and Professionalism!
              </p>
              <img className="Column-pictures1" src={Vision} alt="Vision" />
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="slide-container">
            {/* Title */}

            <h2> 5 Pillars of LAESA-SHPE</h2>

            {/* Slide Show Properties*/}

            <Fade {...fadeProperties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages} />
                </div>
                <h2> Academic Development </h2>
              </div>

              <div className="each-fade">
                <h2> Professional Development </h2>
                <div className="image-container">
                  <img src={fadeImages1} />
                </div>
              </div>

              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages2} />
                </div>
                <h2> Chapter Development </h2>
              </div>

              <div className="each-fade">
                <h2> Leadership Development </h2>
                <div className="image-container">
                  <img src={fadeImages3} />
                </div>
              </div>

              <div className="each-fade">
                <div className="image-container">
                  <img src={fadeImages4} />
                </div>
                <h2> Community Outreach </h2>
              </div>
            </Fade>
          </div>
        </div>

        {/* Slide show ends here */}
      </header>
    </div>
  );
}
export default main;
