import React, { Component } from 'react'
import './App.css';
import pokemons from './data'
import Pokedex from './Pokedex'
// import Pokemon from './Pokemon';
// import PokemonAlone from './PokemomAlone';
// import { FaArrowRight } from 'react-icons/fa'
// import { FaArrowLeft } from 'react-icons/fa'

class App extends Component {
  render() {
    return (
      <div>
          <Pokedex pokemons={ pokemons }/>
      </div>
    );
  }
}

export default App;
