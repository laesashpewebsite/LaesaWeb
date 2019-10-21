import React from 'react';
import logo from './pictures/LAESA_LOGO.png';
import './Main.css'

function main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p className='Main-title'>
          LAESA-SHPE WEBSITE COMING SOON! testing
        </p>
      </header>
    </div>
  );
}
export default main;