import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1>
        <img src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon_logo_PNG2.png" alt="pokemonLogo" className="pokeLogo"></img>
      </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;