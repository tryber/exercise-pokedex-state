import React from 'react';
import pokemons from './data';
import Header from './components/Header';
import Pokedex from './components/Pokedex';

function App() {
  /** Fonte: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates */
  const types = pokemons.map((pokemon) => pokemon.type).filter((type, index, array) => array.indexOf(type) === index);
  return (
    <>
      <Header />
      <Pokedex pokemons={pokemons} types={types} />
    </>
  );
}

export default App;