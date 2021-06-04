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
    this.previusIndex = this.previusIndex.bind(this)
    this.AllPokes = this.AllPokes.bind(this)
    this.FilterPoke = this.FilterPoke.bind(this)
    this.FilterPokeByInfo = this.FilterPokeByInfo.bind(this)
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
  previusIndex () {
    if(this.state.pokeIndex === 0) {
      this.setState(({
        pokeIndex: this.state.currentData.length -1
      }))
    } else {
      this.setState(previus => ({
        pokeIndex: previus.pokeIndex - 1
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

  FilterPokeByInfo ({ target: { value } }) {
    const typeData = pokemonsData.filter(({  name, type, averageWeight }) => name.includes(value) || type.includes(value) || averageWeight.value.includes(value))
    this.setState((_ => ({
      currentData: typeData,
      pokeIndex: 0,
    })))
  }

  render () {
    return (
      <div className="App">
        <div className="div-backGround">
        <h1> Pokedex </h1>
        <div className="div-pokedex">
        <Pokedex pokemons={this.state.currentData[this.state.pokeIndex]} />
        <div className="div-btns">
          <button onClick={this.nextIndex }>Next</button>
          <button onClick={this.AllPokes }>All</button>
          <button onClick={this.FilterPoke }>Bug</button>
          <button onClick={this.FilterPoke }>Dragon</button>
          <button onClick={this.FilterPoke }>Electric</button>
          <button onClick={this.FilterPoke }>Fire</button>
          <button onClick={this.FilterPoke }>Normal</button>
          <button onClick={this.FilterPoke }>Psychic</button>
          <button className="arrow" onClick={this.previusIndex }> ᐊᐊᐊ </ button>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;