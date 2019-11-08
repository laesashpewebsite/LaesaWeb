import React from 'react';
import logo from './pictures/LAESA_LOGO.png';
import './Main.css';
import PCED_group from './pictures/PCED-GROUP.JPG';

function main() {
  return (
  <div className="Main">

  <div className="PCED-GROUP-PIC">
      <img src={PCED_group} className="PCED-GROUP-PIC;" alt="PCED-GROUP pictures" />
  </div>

  </div> 
  );
}
export default main;