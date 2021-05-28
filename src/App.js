import React, { Component } from 'react';
import './App.css';
import pokemonsData from './data';
import Pokedex from './Pokedex';

class App extends Component {
  constructor() {
    super();
    this.nextIndex = this.nextIndex.bind(this)
    this.state = {
      pokeIndex: 0,
    }
  }
  nextIndex () {
    if(this.state.pokeIndex === pokemonsData.length -1) {
      this.setState(_ => ({
        pokeIndex: 0
      }))
    } else {
      this.setState(previus => ({
        pokeIndex: previus.pokeIndex + 1
      }))
    }
  }
  render () {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemonsData[this.state.pokeIndex]} />
        <button onClick={this.nextIndex }>Next</button>
      </div>
    );
  }
}

export default App;