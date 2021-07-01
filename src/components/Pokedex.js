import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <input type='text' onChange={(event) => event.target.value}/>
                <div className="pokedex">
                    {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                </div>
            </div>

        );
    }
}

export default Pokedex;