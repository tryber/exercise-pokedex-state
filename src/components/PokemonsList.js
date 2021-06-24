import React from 'react';
import PokemonInfo from './PokemonInfo';
import './PokemonsList.css';

class PokemonsList extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <section className="pokemons-list">
        {
          pokemons.map((pokemon) => <PokemonInfo key={pokemon.id} pokemonInfo={pokemon} /> )
        }
      </section>
    )
  }
}

export default PokemonsList;