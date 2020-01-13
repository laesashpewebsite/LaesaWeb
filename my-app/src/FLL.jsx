import React from 'react';
import './FLL.css';
import director from './pictures/Jean-Luc.jpg';

function FLL() {
  return (
    <div className="Main">
   	
    <div>
  	 <h1 className="header"> About </h1>
      <p className="paragraph">
      First Lego League's mission is to inspire young adults to be science 
      and technology innovators, by engaging them in exciting programs that 
      help them build the necessaries skills in science, engineering, and 
      technology.
 	    </p>
    </div>

    <div>
 	    <h1 className="header"> Our Director </h1>
    </div>

 	  <div>
      <img 
      className="Director-Photo"
 	    src={director} 
      alt="Jean-Luc's Profile Picture"
      />
    </div>

    <div>
 	    <p className="paragraph">
 	    Jean-Luc Antoine is a second-year student at The City College of New York and have been part of 
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

    <div>
      <h1 className="header"> Pictures </h1>
      <p className="paragraph">
      First Lego League's mission is to inspire young adults to be science 
      and technology innovators, by engaging them in exciting programs that 
      help them build the necessaries skills in science, engineering, and 
      technology.
      </p>
    </div>


    </div>

  );
}
export default FLL;
