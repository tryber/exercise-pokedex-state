import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentPokemon: 0,
    }

  }

  handleClick() {
    
    this.setState((previousState, _props) => {
      if (previousState.currentPokemon === pokemons.length - 1) {
        return ({
          currentPokemon: 0,
        })
      };

      return ({
        currentPokemon: previousState.currentPokemon + 1,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons.filter((pokemon) => pokemons.indexOf(pokemon) === this.state.currentPokemon)} />
        <button onClick={ this.handleClick }>Next Pokemon</button>
      </div>
    );
  }
}

export default App;