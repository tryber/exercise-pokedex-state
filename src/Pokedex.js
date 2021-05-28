import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        const pokemonInfo  = this.props.pokemons
        return (
            <div className="pokedex">
                { <Pokemon key={pokemonInfo.id} pokemon={pokemonInfo}/> }
            </div>
        );
    }
}

export default Pokedex;