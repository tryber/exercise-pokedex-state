import React, { Component } from 'react';

class TypeButtons extends Component {
    render(){
        const { pokemonType, pokemons } = this.props;
        const types = pokemons.map(pokemon => pokemon.type)
                              .reduce((unique, item) => unique.includes(item) ? unique:[...unique, item],[])
        return (
            <div>
                {
                    types.map(type => 
                        <button key={type} 
                                value={type} 
                                onClick={pokemonType} 
                                className={`button-type ${type.toLowerCase()}`}>
                        {type}
                        </button>)
                }
            </div>
        )
    }
}

export default TypeButtons;