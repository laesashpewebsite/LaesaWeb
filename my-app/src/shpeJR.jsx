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
import "./shpejr.css";
import PCED_group from "./pictures/PCED-GROUP1.JPG";
import PCED_Director from "./pictures/empty-profile-pic.png";

function shpeJR() {
  return (
    <div className="PCED-main">
      <header className="SHPE-header">
        <div className="PCED-info"></div>
        {/*could probably use a banner instead for the event*/}
        <div className="SHPE-GROUP-PIC">
          <h1> Society of Hispanic Professional Engineers </h1>
        </div>
        <div className="card-color2">
            <h2>Noche de Ciencias</h2>
           <p>
           At SHPE, we know early exposure to STEM positively influences the likelihood of a student choosing it for their career path. The Noche de Ciencias™ program is designed to introduce the profound possibilities of STEM to high schoolers and their families.
  
           Noche de Ciencias events are intented to engage and inspire Hispanic youth (and their parents) to pursue STEM degrees and careers and ultimately advance SHPE’s mission and vision. 
             </p>
          <h4>Mission</h4>
          <p>SHPE’s mission is to empower the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.</p>
          <h4>Vision</h4>
          <p>SHPE’s vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians, and engineers</p>
        </div>
        <div className="card-color">
           <h2>Goals</h2>  
            <ul class="text-center">
              <li className="events-list">Increase awareness of STEM fields and careers</li>
             <li className="events-list">Strengthen participants’ beliefs about their ability to succeed in STEM</li>
             <li className="events-list"> Deepen participants’ understanding of STEM identity.</li>
             </ul>
           </div>
            <div className="card-color2" >
            <h2 align="center"> About the Director</h2>
             <div class="row">
               <div class="col-md-6"> 
               <img
            src={PCED_Director}
            className="SHPE-Director-Photo"
            class="img-responsive"
            alt="SHPE-Director"
              />
           {}
            {} </div>
      
          <div class= "col-md-4"  >
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ad dolore iste eaque, ullam neque molestias earum porro numquam libero repudiandae modi distinctio itaque commodi cupiditate fugit dolorem inventore? Nisi.</p>
             </div>
            </div>
         </div>


        <div className="card-color">
          <h4>Director Contact Information</h4>
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
