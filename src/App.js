import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import RenderButton from './components/button'

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
      <RenderButton />
    </div>
  );
}

export default App;