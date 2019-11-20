import React from 'react';
import SocialMedia from './SocialMedia.js';
import './Footer.css';

function Footer() {
  return (
    <div className='mainFooter'>
    <h4>LAESA-SHPE Contact info</h4>
      <ul className="Contact">
        <li>Room #: CM-12 </li>
        <li>Email: </li>
        <li>Tel: (212)-650-7220</li>
        <li></li>
      </ul>
      <SocialMedia />
    </div>
  )
}
export default Footer;