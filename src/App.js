import React from 'react';
import './App.css';
import Data from './data';
import Pokedex from './componests/Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={ Data }/>
    </div>
  );
}

export default App;
