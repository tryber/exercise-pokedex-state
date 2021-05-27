import React from 'react';
import './App.css';
import Data from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex Pokedex={ Data } />
    </div>
  );
}

export default App;