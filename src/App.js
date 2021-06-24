import React from 'react';
import './App.css';
import './index.css'
import pokemons from './data';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokemon pokemons={ pokemons } />
    </div>
  );
}

export default App;