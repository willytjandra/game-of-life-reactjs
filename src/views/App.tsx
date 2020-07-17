import React from 'react';
import logo from 'logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 data-testid="app-heading">Conway's Game of Life</h1>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          target="_blank"
          rel="noopener noreferrer">
          Learn more about Conway's Game of Life
        </a>
      </header>
    </div>
  );
}

export default App;
