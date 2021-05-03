import React from 'react';
import pokemons from './data.js';
import Pokemon from './Pokemons.js';

class Pokedex extends React.Component {
  render() {
    const pokedexCards = pokemons.map((pokemon) => <Pokemon monster={ pokemon } key={ pokemon.name } />);
    return (
      <div className="pokedex-container" id="pokedex">
        {pokedexCards}
      </div>
    );
  }
}

export default Pokedex;