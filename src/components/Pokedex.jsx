import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map((pokemon, index) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

// (pokemon, index)=> index === 0? <Pokemon key={pokemon.id} pokemon={pokemon} /> : ''

export default Pokedex;