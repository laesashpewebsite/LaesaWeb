import React from 'react';
import './FLL.css';
import director from './pictures/Jean-Luc.jpg';
import FLL_Picture1 from './pictures/FLL Pictures/IMG_8317.jpg';
import FLL_Picture2 from './pictures/FLL Pictures/IMG_8322.jpg';
import FLL_Picture3 from './pictures/FLL Pictures/IMG_8311.jpg';
import FLL_Picture4 from './pictures/FLL Pictures/IMG_8316.jpg';

import example from './pictures/Template for 5 pillars.png';

function FLL() {
  return (
    <div className="Main">
   	<header className="header">

    <div className="box1">
  	 <h2> About </h2>
      <p>
      First Lego League's mission is to inspire young adults to be science 
      and technology innovators, by engaging them in exciting programs that 
      help them build the necessaries skills in science, engineering, and 
      technology.
 	    </p>
    </div>

    <div className="box2">
      <h2> Pictures </h2>
      <img 
      className="Pictures"
      src= {FLL_Picture1}
      alt="Picture 1"/>
      <img 
      className="Pictures"
      src={FLL_Picture2} 
      alt="Picture 2"/>
      <img 
      className="Pictures"
      src={FLL_Picture3} 
      alt="Picture 3"/>
      <img 
      className="Pictures"
      src={FLL_Picture4} 
      alt="Picture 4"/>
    </div>

    <div className="box1">
    <div className="Row">
    <h2> About Our Directors </h2>
    <div className="Column1">
      <img 
      className="Director-Photo"
 	    src={director} 
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
      src={director} 
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
      <div className="column1">
      <ul className="list">
      <li className="list-requirement">P: 347-954-7628 </li>
      <li className="list-requirement">Email: jeanlucmantoine@gmail.com </li>
      </ul>
      </div>
      <div className="column1">
      <ul className="list">
      <li className="list-requirement">P: 347-954-7628 </li>
      <li className="list-requirement">Email: jeanlucmantoine@gmail.com </li>
      </ul>
      </div>
    </div>


        
    </header>
    </div>

  );
}
export default FLL;
