import React from 'react';
import logo from './pictures/LAESA_LOGO.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos
        </p>
        <a
          className="App-link"
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

export default App;
