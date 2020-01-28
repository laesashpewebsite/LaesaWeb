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
    <h2> About LAESA-SHPE </h2>
      <p className="body">
      LAESA–SHPE is the largest and most prominent undergraduate student
      organization at The City College of New York. In 1983, a group of
      dedicated students, with the goal to unite all Latino and other
      minority engineering students, share cultural ideas, and promote
      leadership, founded LAESA within City College. In 1986, LAESA joined
      forces with the Society of Hispanic Professional Engineers (SHPE) to
      better achieve their goals and connect with a larger body of
      professionals. This partnership has flourished over the years and
      today, LAESA is a firm supporter of the SHPE core values, while
      remaining true to its original mission. With over 150 members,
      LAESA-SHPE has been able to gather motivated students from all
      engineering disciplines and a diverse pool of cultural backgrounds.
      This dynamic group of students, alongside their highly supportive
      alumni members, has had many achievements at The City College of New
      York and within the community.
      </p>
    </div>

    <div className="box1">
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

   <div className="box2">
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
