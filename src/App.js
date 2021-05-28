import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <div className='firstBox'>
      <h1> Pokedex </h1>
      <Pokedex pokemons={ pokemons } />
      </div>
    </div>
  );
}

export default App;