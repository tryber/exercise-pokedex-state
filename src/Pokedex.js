import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map((pokemon, index) => {
          if (index === this.props.index) {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />
          }
          return null;
        })}
      </div>
    );
  }
}

export default Pokedex;