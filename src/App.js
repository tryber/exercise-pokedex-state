import React, { Component } from 'react'
import './App.css';
import pokemons from './data'
import Pokedex from './Pokedex'

class App extends Component {
  render() {
    return (
      <div>
          <Pokedex pokemons={ pokemons } />
      </div>
    );
  }
}

export default App;
