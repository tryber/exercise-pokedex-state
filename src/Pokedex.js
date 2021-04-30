import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                <Pokemon key={this.props.pokemons[this.props.choiced].id} pokemon={this.props.pokemons[this.props.choiced]} />
            </div>
        );
    }
}

export default Pokedex;