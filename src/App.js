import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './Button';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.filterClick = this.filterClick.bind(this);
    this.state = {
      index: 0,
      type: 'fire',
      array: pokemons.filter(pokemon => pokemon.type === 'Fire')
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => {
      return {
        index: estadoAnterior.index === this.state.array.length - 1 ? 0 : estadoAnterior.index + 1,
      }
    })
  }

  filterClick({ target }) {
    const pokemonsFiltered = pokemons.filter(pokemon => pokemon.type === target.name);
    this.setState({
      type: target.name,
      array: pokemonsFiltered
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex index={this.state.index} type={this.state.type} pokemons={this.state.array} />
        <Button onClick={this.handleClick} text='Next' />
        <Button onClick={this.filterClick} text='Fire' />
        <Button onClick={this.filterClick} text='Psychic' />
      </div>
    );
  }
}

export default App;