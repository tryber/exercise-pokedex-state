import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const { pokemons } = this.props;
    this.state = {
      pokemonIndex: 0,
      typePokemons: [],
      pokemons,
    }
    this.nextPokemon = this.nextPokemon.bind(this);
    this.typePokemons = this.typePokemons.bind(this);
  }

  async nextPokemon() {
    const { pokemonIndex, pokemons } = this.state;
    if (pokemonIndex < pokemons.length-1) {
      await this.setState((numeroInicial)=> ({
        pokemonIndex: numeroInicial.pokemonIndex + 1,
      }));
    } else if (pokemonIndex >= pokemons.length-1) {
      await this.setState(() => ({
        pokemonIndex: 0,
      }));
    }
  }

  async typePokemons(event) {
    const { pokemons } = this.props;
    const { value } = event.target;
    await this.setState(() => ({
      pokemons: (value !== "All" ? pokemons.filter((pokemons) => pokemons.type === value) : pokemons)
    }));
  }

  render() {
    const index = this.state.pokemonIndex;
    const { pokemons } = this.state;
    return (
      <div>
        <div className="pokedex">
          <Pokemon key={pokemons[index].id} pokemon={pokemons[index]} />
        </div>
        <div className="buttons">
          <button value="All" onClick={this.typePokemons}>All</button>
          <button value="Normal" onClick={this.typePokemons}>Normal</button>
          <button value="Fire" onClick={this.typePokemons}>Fire</button>
          <button value="Psychic" onClick={this.typePokemons}>Psychic</button>
          <button value="Dragon" onClick={this.typePokemons}>Dragon</button>
          <button value="Shadow" onClick={this.typePokemons}>Shadow</button>
          <button value="Electric" onClick={this.typePokemons}>Electric</button>
        </div>
        <div className="buttons">
          <button onClick={this.nextPokemon}>Next Pokemon</button>
        </div>
      </div>
  );
  }
}

export default Pokedex;