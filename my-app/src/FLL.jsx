import React from 'react';
import './FLL.css';
import director from './pictures/Jean-Luc.jpg';
import example from './pictures/Template for 5 pillars.png';
import './pictures/FLL Pictures';

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
 	    <h2> About the Director </h2>
      <img 
      className="Director-Photo"
 	    src={director} 
      alt="Jean-Luc's Profile Picture"/>
 	    <p>
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

    <div className="box1">
      <h2> Pictures </h2>
      <p>
      <img 
      className="Main-Picture"
      src={example} 
      alt="Jean-Luc's Profile Picture"/>
      </p>
    </div>

    <div className="box2">
      <img 
      className="Director-Photo"
      src= {director}
      alt="Picture 1"/>
      <img 
      className="Director-Photo"
      src={director} 
      alt="Picture 1"/>
      <img 
      className="Director-Photo"
      src={director} 
      alt="Picture 1"/>
    </div>

    <div className="box2">
      <h3> Director Contact Info </h3>
      <ul className="list">
      <li className="list-requirement">P: 347-954-7628 </li>
      <li className="list-requirement">Email: jeanlucmantoine@gmail.com </li>
      </ul>
    </div>


        
    </header>
    </div>

  );
}
export default FLL;
