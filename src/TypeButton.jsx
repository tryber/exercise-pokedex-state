import React, { Component } from 'react';

class TypeButtons extends Component {
    render(){
        const { pokemonType, pokemons } = this.props;
        const types = pokemons.map(pokemon => pokemon.type)
                              .reduce((unique, item) => unique.includes(item) ? unique:[...unique, item],[])
                              //reduce feito utilizando tutorial desse site
                              //https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
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