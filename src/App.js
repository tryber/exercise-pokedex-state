import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokemon pokemons={pokemons} />
    </div>
  );
}

export default App;