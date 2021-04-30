import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data'

class Pokedex extends React.Component {
  constructor() {
    super();
    this.setPokemon = this.setPokemon.bind(this);
    this.state = {
      pokemonIndex: 0,
    }
  }

  setPokemon = () => {
    this.setState((previousPokemon, _props) => ({
      pokemonIndex: previousPokemon.pokemonIndex + 1,
    }));
    if (pokemons[pokemons.length - 1] === pokemons[this.state.pokemonIndex]) {
      this.setState(() => ({
        pokemonIndex: 0,
      }));
    }
  }

  render() {
      return (
        <div className="pokedex">
        <Pokemon pokemon={pokemons[this.state.pokemonIndex]}/>
        <button onClick={this.setPokemon}>Próximo</button>
      </div>
      );
  }
}

export default Pokedex;