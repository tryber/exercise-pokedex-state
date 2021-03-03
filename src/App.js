import React from 'react';
import './styles/App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;