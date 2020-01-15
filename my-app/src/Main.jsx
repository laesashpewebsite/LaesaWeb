import React from 'react';
import logo from './pictures/LAESA_LOGO.png';
import './Main.css';
import PCED_group from './pictures/Convention-Group.jpg';
import SHPE_Convention from "./pictures/Convention-Group.jpg";
import column from './pictures/Column-crop.png';
import logo2 from './pictures/LAESA_LOGO.png';
import column1 from './pictures/#1.jpeg';
import column2 from './pictures/#2.jpg';
import column3 from './pictures/#3.jpg';
import column4 from './pictures/#4.jpg';
import column5 from './pictures/#5.jpg';

function main() {
return (
  <div className="Main">
  <header className="header">

    <div>
      <img
        src={SHPE_Convention}
        className="Main-Picture"
        alt="Convention Group Picture"/>
    </div>
  
    <div className="box1">
  	<h2> LAESA SHPE'S MISSION </h2>
      <body>
      <p>
        Our mission is to be the premier facilitator
        of student's endeavors in the Science,Technology, Engineering, and 
        Mathematics field (STEM). Also, to facilitate in other areas as well, 
        as to help to fully develop individuals to their highest potential." 
 	    </p>
      </body>
    </div>
    <div className="box1">
 	  <h2> LAESA SHPE'S VISION </h2>
 	    <body>
      <p> 
        Our mission is to S.T.E.P into THE FUTURE. This can be accomplished
        by using four principles. They are the principles of Support, Teamwork, 
        Excellence, and Professionalism!
 	    </p>
      </body>
  </div>

  <div className="box2">
    <h2> LAESA SHPE'S 5 Pillars </h2>
    <div className="row">
    <div>
     <img src={column} className="column" alt="column #1" />
     <img src={column1} className="column-pop" alt="column #1" />
    </div>
    <div>
      <img src={column} className="column" alt="column #2" />
      <img src={column2} className="column-pop" alt="column #2" />
    </div>
    <div >
      <img src={column} className="column" alt="column #3" />
      <img src={column3} className="column-pop" alt="column #3" />
    </div>
    <div >
      <img src={column} className="column" alt="column #4" />
      <img src={column4} className="column-pop" alt="column #4" />
    </div>
    <div>
      <img src={column} className="column" alt="column #5" />
      <img src={column5} className="column-pop" alt="column #5" />
    </div>
    </div>
  </div>

  </header>
  </div>
);
}
export default main;
