import React from 'react';
import logo from './pictures/LAESA_LOGO.png';
import './Main.css';
import PCED_group from './pictures/Convention-Group.jpg';
import SHPE_Convention from "./pictures/Convention-Group.jpg";
import column from './pictures/Column-crop.png';
import logo2 from './pictures/LAESA_LOGO.png';
import FLL_Picture1 from './pictures/FLL Pictures/IMG_8317.jpg';
import FLL_Picture2 from './pictures/FLL Pictures/IMG_8322.jpg';
import FLL_Picture3 from './pictures/FLL Pictures/IMG_8311.jpg';
import FLL_Picture4 from './pictures/FLL Pictures/IMG_8316.jpg';

function main() {
return (
  <div className="Main">
  <header className="header">

    <div className="box1">
    <h2> Meet Our Familia! </h2>
      <img
        src={SHPE_Convention}
        className="Main-Picture"
        alt="Convention Group Picture"/>
    </div>
  
    <div className="box2">
    <div className="Row">
    <div className="Column1">
  	<h2> LAESA SHPE'S MISSION </h2>
      <p className="body">
        Our mission is to be the premier facilitator
        of student's endeavors in the Science,Technology, Engineering, and 
        Mathematics field (STEM). Also, to facilitate in other areas as well, 
        as to help to fully develop individuals to their highest potential." 
 	    </p>
      <img 
      className="Column-pictures1"
      src= {FLL_Picture1}
      alt="Picture 1"/>
    </div>
    <div className="Column1">
 	  <h2> LAESA SHPE'S VISION </h2>
      <p className="body"> 
        Our mission is to S.T.E.P into THE FUTURE. This can be accomplished
        by using four principles. They are the principles of Support, Teamwork, 
        Excellence, and Professionalism!
 	    </p> 
      <img 
      className="Column-pictures1"
      src= {FLL_Picture1}
      alt="Picture 1"/>
    </div>
    </div>
    </div>

   <div className="box1">
   <div className="Row">
   <h2>  5 Pillars of LAESA-SHPE</h2> 

   <div className="Column2">
    <h2>Academic Development</h2>
    <img 
      className="Column-pic"
      src= {FLL_Picture1}
      alt="Picture 1"/>
   </div>

   <div className="Column2">
    <h2>Professional Development</h2>
    <img 
      className="Column-pic"
      src={FLL_Picture2} 
      alt="Picture 2"/>
   </div>

   <div className="Column2">
    <h2>Chapter Development</h2>
    <img 
      className="Column-pic"
      src={FLL_Picture3} 
      alt="Picture 3"/>
  
   </div>

   <div className="Column2">
    <h2>Leadership Development</h2>
    <img 
      className="Column-pic"
      src={FLL_Picture3} 
      alt="Picture 3"/>
  </div>

   <div className="Column2">
    <h2>Community Outreach</h2>
    <img 
      className="Column-pic"
      src={FLL_Picture4} 
      alt="Picture 4"/>
   </div>

   </div> 
   </div>


  </header>
  </div>
);
}
export default main;
