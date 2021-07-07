import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.filterPokemon = this.filterPokemon.bind(this)
    this.state = {
        pokemonIndex: 0
    }
  }

  handleClick() {
    const { pokemons } = this.props
    let index = 0;
    this.state.pokemonIndex === pokemons.length - 1 ? index = 0 : index = this.state.pokemonIndex + 1 ;
    this.setState({pokemonIndex: index})
  }

  filterPokemon() {
    return console.log(this.props.pokemons.filter(pokemon => pokemon.type === 'Psychic'))
  }

  render() {
    const { pokemons } = this.props
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[this.state.pokemonIndex]} />
        <button onClick={this.handleClick}>Next Pokemon</button>
        <button onClick={this.filterPokemon}>Next Pokemon</button>
      </div>
    );
  }
}

export default Pokedex;