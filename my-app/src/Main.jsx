import React from 'react';
import logo from './pictures/LAESA_LOGO.png';
import './Main.css';
import PCED_group from './pictures/PCED-GROUP1.JPG';
import column from './pictures/Column-crop.png';

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


  <div className="row">
    <div>
     <img src={column} className="column" alt="column #1" />
     <img src={logo} className="column-pop" alt="column #1" />
    </div>
    <div>
      <img src={column} className="column" alt="column #2" />
      <img src={logo} className="column-pop" alt="column #2" />
    </div>
    <div >
      <img src={column} className="column" alt="column #3" />
      <img src={logo} className="column-pop" alt="column #3" />
    </div>
    <div >
      <img src={column} className="column" alt="column #4" />
      <img src={logo} className="column-pop" alt="column #4" />
    </div>
   <div>
     <img src={column} className="column" alt="column #5" />
      <img src={logo} className="column-pop" alt="column #5" />
    </div>
  </div>

<div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p className='Main-title'>
          LAESA-SHPE WEBSITE COMING SOON! 
       </p>
      </header>
    </div>

   
 </div>

  );
}
export default main;

//    <div className="Main">
//      <header className="Main-header">
//        <img src={logo} className="Main-logo" alt="logo" />
//        <p className='Main-title'>
//          LAESA-SHPE WEBSITE COMING SOON! 
//        </p>
//      </header>
//    </div>
