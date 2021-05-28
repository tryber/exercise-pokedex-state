import React, { Component } from 'react';
import './App.css';
import pokemonsData from './data';
import Pokedex from './Pokedex';

class App extends Component {
  constructor() {
    super();
    this.nextIndex = this.nextIndex.bind(this)
    this.AllPokes = this.AllPokes.bind(this)
    this.OnlyBugs = this.OnlyBugs.bind(this)
    this.OnlyFire = this.OnlyFire.bind(this)
    this.OnlyPsychic = this.OnlyPsychic.bind(this)
    this.state = {
      currentData: pokemonsData,
      pokeIndex: 0,
    }
  }
  nextIndex () {
    if(this.state.pokeIndex === this.state.currentData.length -1) {
      this.setState(_ => ({
        pokeIndex: 0
      }))
    } else {
      this.setState(previus => ({
        pokeIndex: previus.pokeIndex + 1
      }))
    }
  }
  AllPokes () {
    this.setState((_ => ({
      currentData: pokemonsData,
      pokeIndex: 0,
    })))
  }
  OnlyBugs () {
    const typeData = pokemonsData.filter((pokemon) => pokemon.type === 'Bug')
    this.setState((_ => ({
      currentData: typeData,
      pokeIndex: 0,
    })))
  }
  OnlyFire () {
    const typeData = pokemonsData.filter((pokemon) => pokemon.type === 'Fire')
    this.setState((_ => ({
      currentData: typeData,
      pokeIndex: 0,
    })))
  }
  OnlyPsychic () {
    const typeData = pokemonsData.filter((pokemon) => pokemon.type === 'Psychic')
    this.setState((_ => ({
      currentData: typeData,
      pokeIndex: 0,
    })))
  }
  render () {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.currentData[this.state.pokeIndex]} />
        <button onClick={this.nextIndex }>Next</button>
        <button onClick={this.AllPokes }>All</button>
        <button onClick={this.OnlyBugs }>Bugs</button>
        <button onClick={this.OnlyFire }>Fire</button>
        <button onClick={this.OnlyPsychic }>Psychic</button>
        
      </div>
    );
  }
}

export default App;