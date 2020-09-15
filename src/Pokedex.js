import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                <Pokemon key={this.props.pokemon.id} name={this.props.pokemon.name} type={this.props.pokemon.type} averageWeight={this.props.pokemon.averageWeight} image={this.props.pokemon.image} />
                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
            </div>
        );
    }
}

export default Pokedex;