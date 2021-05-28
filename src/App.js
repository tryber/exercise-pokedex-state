import React, { Component } from 'react';
import './App.css';
import pokemonsData from './data';
import Pokedex from './Pokedex';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentData: pokemonsData,
      pokeIndex: 0,
    }
    this.nextIndex = this.nextIndex.bind(this)
    this.AllPokes = this.AllPokes.bind(this)
    this.FilterPoke = this.FilterPoke.bind(this)
  }
  nextIndex () {
    if(this.state.pokeIndex === this.state.currentData.length -1) {
      this.setState(({
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

  FilterPoke (event) {
    const typeData = pokemonsData.filter((pokemon) => pokemon.type === event.target.innerText)
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
        <button onClick={this.FilterPoke }>Bug</button>
        <button onClick={this.FilterPoke }>Dragon</button>
        <button onClick={this.FilterPoke }>Electric</button>
        <button onClick={this.FilterPoke }>Fire</button>
        <button onClick={this.FilterPoke }>Normal</button>
        <button onClick={this.FilterPoke }>Psychic</button>
        
      </div>
    );
  }
}

export default App;