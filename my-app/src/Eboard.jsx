import React from 'react';
import construct from './pictures/under-construction.png';
import './Eboard.css'

function Eboard() {
  return (
    <div className="Eboard-main">
   		<header className="Eboard-header">
        <img src={construct} className="constructPic" alt="logo" />
        <p className='Main-title'>
        "Welcome to the E-board for the school year of 2019-2020!"
        </p>
        <div className="dot">
        <img src={construct} className="constructPic" alt="logo" />
        </div>
        <div className="dot">
        <img src={construct} className="constructPic" alt="logo" />
        </div>
        <div className="dot"></div>
        <div className="dot"></div>

        
      </header>
    </div>
  );
}
export default Eboard;