import React, { Component } from 'react';

class TypeButtons extends Component {
    render(){
        const { pokemonType } = this.props;
        const types = ['Dragon', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal']; //Preguiça de fazer um reduce no data para tirar os duplicados
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