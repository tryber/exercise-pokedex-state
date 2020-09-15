import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }
  handleClick() {
    while(this.state.index < pokemons.length) {
      this.setState((estadoAnterior, _props) => ({
        index: estadoAnterior.index + 1
      }))
    }
  }
  render() {
    return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemon={pokemons[this.state.index]} />
      <button onClick={this.handleClick}>Próximo Pokemon</button>
    </div>
  )}
}

export default App;