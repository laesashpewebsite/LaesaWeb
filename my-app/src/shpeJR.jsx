// import React from 'react';
// import construct from './pictures/under-construction.png';
// import './Eboard.css'

// function shpeJR() {
//   return (
//     <div className="Eboard-main">
//    		<header className="Eboard-header">
//         <img src={construct} className="constructPic" alt="logo" />
//         <p className='Main-title'>
//         </p>
//       </header>
//     </div>
//   );
// }
// export default shpeJR;
import React from "react";
import './shpejr.css';
import PCED_Director from "./pictures/LAESA_LOGO.png";

function shpeJR() {
  return (

    <div className="Main">
    <header className="SHPE-header">


        <div className="SHPE-GROUP-PIC">
          <h1 className="title"> SHPE Jr. </h1>
        </div>

        <div className="box1">
          <h2>Noche de Ciencias</h2>
          <p>
            At SHPE, we know early exposure to STEM positively influences the
            likelihood of a student choosing it for their career path. The Noche
            de Ciencias™ program is designed to introduce the profound
            possibilities of STEM to high schoolers and their families. Noche de
            Ciencias events are intented to engage and inspire Hispanic youth
            (and their parents) to pursue STEM degrees and careers and
            ultimately advance SHPE’s mission and vision.
          </p>
          <h4>Mission</h4>
          <p>
            SHPE’s mission is to empower the Hispanic community to realize its
            fullest potential and to impact the world through STEM awareness,
            access, support, and development.
          </p>
          <h4>Vision</h4>
          <p>
            SHPE’s vision is a world where Hispanics are highly valued and
            influential as the leading innovators, scientists, mathematicians,
            and engineers
          </p>
        </div>
        <div className="box2">
          <h2>Goals</h2>
          <ul class="text-center">
            <li className="events-list">
              Increase awareness of STEM fields and careers
            </li>
            <li className="events-list">
              Strengthen participants’ beliefs about their ability to succeed in
              STEM
            </li>
            <li className="events-list">
              {" "}
              Deepen participants’ understanding of STEM identity.
            </li>
          </ul>
        </div>

    <div className="box1">
    <div className="Row">
    <h2> About Our Directors </h2>
    <div className="Column1">
      <img 
      className="Director-Photo"
      src={PCED_Director} 
      alt="Jean-Luc's Profile Picture"/>
      <p className="body">
      Jean-Luc Antoine is a second-year student at The City College of New York and has been part of 
      LAESA-SHPE since the Spring 2019 semester. He has been particularly involved with FIRST(For 
      Inspiration and Recognition of Science and Technology) Lego League which is an organization
      that creates a platform to support and help keep young elementary kids interested in STEM and
      robotics. Jean-Luc was a volunteer in The Spring 2019 semester at the FFL event and now he is 
      the director for the FIRST Lego League program at LA in which he is organizing, coordinating 
      and planning FLL events. As part of his duties, Jean-Luc is overseeing logistics, act direct 
      communication point with event organizers and ensure that the event goes smoothly, as well 
      as recruit as many volunteers as needed.
      </p>
    </div>
    <div className="Column1">
      <img 
      className="Director-Photo"
      src={PCED_Director} 
      alt="Jean-Luc's Profile Picture"/>
      <p className="body">
      Jean-Luc Antoine is a second-year student at The City College of New York and has been part of 
      LAESA-SHPE since the Spring 2019 semester. He has been particularly involved with FIRST(For 
      Inspiration and Recognition of Science and Technology) Lego League which is an organization
      that creates a platform to support and help keep young elementary kids interested in STEM and
      robotics. Jean-Luc was a volunteer in The Spring 2019 semester at the FFL event and now he is 
      the director for the FIRST Lego League program at LA in which he is organizing, coordinating 
      and planning FLL events. As part of his duties, Jean-Luc is overseeing logistics, act direct 
      communication point with event organizers and ensure that the event goes smoothly, as well 
      as recruit as many volunteers as needed.
      </p>
    </div>
    </div>
    </div>

        <div className="box2">
        <h3> Director Contact Info </h3>
          <ul className="Contact">
            <li className="events-list">P: 929-268-9609 </li>
            <li className="events-list">Email: laesa.shpejr@gmail.com </li>
            <li className="events-list">Personal: byronmarcatom@gmail.com</li>
          </ul>
        </div>


      </header>
    </div>
  );
}
export default shpeJR;
