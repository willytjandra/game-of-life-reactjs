import React from 'react';
import { GameOfLife } from './components/GameOfLife';

function App() {
  return (
    <div>
      <header>
        <h1 data-testid="app-heading">Conway's Game of Life</h1>
      </header>
      <main>
        <GameOfLife />
      </main>
    </div>
  );
}

export default App;
