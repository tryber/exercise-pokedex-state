import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import React from 'react';
import data from './data';
import './PokedexCSS.css'

class Pokedex extends React.Component {
  constructor() {
    super()

    this.types = ['All', ...new Set(data.map(pokemon => pokemon.type))].sort();
    this.state = {
      pokemonsTypes: data,
      position: 0,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.pokemonsByType = this.pokemonsByType.bind(this);
  }

  nextPokemon() {
    const { pokemonsTypes } = this.state;
    this.setState((previousState, _props) => {
      const { position } = previousState;
      const indexAtual = position === pokemonsTypes.length - 1 ? 0 : position + 1;
      return { ...previousState, position: indexAtual };
    }
    )
  }

  pokemonsByType(event) {
    const currentType = event.target.id;
    const filtredsPokemons = data.filter((pokemon) => pokemon.type === currentType);
    currentType !== 'All'
    ? 
    this.setState(() => ({
      position: 0,
      pokemonsTypes: filtredsPokemons,
    }))
    :
    this.setState(() => ({
      position: 0,
      pokemonsTypes: data,
  }))
};

  render() {
    return (
      <>
        <div className="h1Div">
        <h1>POKEDEX</h1>
        </div>
        <div className="App">
          <Pokemon poke={this.state.pokemonsTypes[this.state.position]} />
        </div>
        <div className="buttonsTypes row-btn-types">
          {this.types.map((tipo) => <button key={tipo} id={tipo} onClick={this.pokemonsByType}>{tipo}</button>)}
        </div>
        <div className="row-btn-next">
          <button className="btn-next" onClick={this.nextPokemon}>Next Pokemon!</button>
        </div>
      </>
    )
  }
}

Pokedex.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default Pokedex;