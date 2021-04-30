import React, { Component } from 'react';
import Pokedex from './Pokedex';
import pokemonData from './data';

class Botao extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     pokemonData: [1]
  //   };
  //   this.nextPokemon = this.nextPokemon.bind(this);
  // }

  // nextPokemon() {
  //   this.setState(([1], _event) => {
  //     pokemonData: [1].pokemonData + [1]
  //   })
  // }
  render() {
    return (
      <div>
        <button onClick={() => <Pokedex pok={ pokemonData[1] }/> }>Mostrar Pokemons</button>
      </div>
    );
  }
}

export default Botao;