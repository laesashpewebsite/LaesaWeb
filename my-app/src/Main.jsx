import React from 'react';
import logo from './pictures/LAESA_LOGO.png';
import './Main.css'

function main() {
  return (
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p>
          Bienvenidos
        </p>
        <a
          className="Main-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          this link is to Learn React
        </a>
      </header>
    </div>
  );
}
export default main;