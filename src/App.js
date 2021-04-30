import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Components/Pokedex';

function App() {
  return (
    <section className='App'>
      <h1 className='title'> Pokedex </h1>
      <div className='pokeMenu'>
        <Pokedex pokemons={pokemons} />
      </div>
    </section>
  );
}

export default App;