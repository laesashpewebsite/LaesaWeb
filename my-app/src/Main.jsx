import React from 'react';
import logo from './pictures/LAESA_LOGO.png';
import './Main.css';
import PCED_group from './pictures/PCED-GROUP1.JPG';

function main() {
  return (
  <div className="Main">
  
  <div className="PCED-GROUP-PIC">
      <img src={PCED_group} className="PCED-GROUP-PIC" alt="PCED-GROUP-pictures" />
  </div>

  <hr className="hr1"/>

  <div>
 	<body> 
  	<h1 className="header"> LAESA SHPE'S MISSION </h1>
  	<p className="paragraph"> Our mission is to be the premier facilitator of student's endeavors in the Science,
        Technology, Engineering, and Mathematics field (STEM). Also, to facilitate in other areas
 	      as well , as to help to fully develop individuals to their highest potential." 
 	  </p>
 	  <h1 className="header"> LAESA SHPE'S VISION </h1>
 	  <p className="paragraph"> Our mission is to S.T.E.P into THE FUTURE. This can be accomplished by using four 
      principles. They are the principles of Support, Teamwork, Excellence, and Professionalism!
 	  </p>
  </body> 
  </div> 

  /*Starting slide show about 5 pillars here!!*/

  </div> 

/*
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p className='Main-title'>
          LAESA-SHPE WEBSITE COMING SOON! 
        </p>
      </header>
    </div>
>>>>>>> navigation*/
  );
}
export default main;