import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClickFire = this.handleClickFire.bind(this)
    this.cliqueFireCounter = this.cliqueFireCounter.bind(this)

    this.state = {
      cliques: 0,
      cliqueFire: 0,
    }
  }

  // Funçoes de clique Next -------------------- //
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques + 1
    }))
    this.resetClick()
  }
  
  resetClick() {
    if(this.state.cliques === pokemons.length - 1) {
      this.setState((estadoAnterior, _props) => ({
        cliques: estadoAnterior.cliques = 0
      }
      ))
    }
  }

  // ------------------------------------------ //

  // funçoes seleçao e pokemons de fogo ------- //
  handleClickFire() {
    const pokeArr = this.cliqueFireCounter()
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques = pokeArr
    }))
  }

  cliqueFireCounter() {
    const firePoke = pokemons.map((poke, index) => poke.type === 'Fire'? index : 0)
    .filter((poke) => poke !== 0)
    const pokeArr = firePoke[this.state.cliqueFire]
      this.setState((estadoAnterior, _props) => ({
      cliqueFire: estadoAnterior.cliqueFire + 1
    }))
    if(this.state.cliqueFire === firePoke.length - 1) {
      this.setState((estadoAnterior, _props) => ({
        cliqueFire: estadoAnterior.cliqueFire = 0
      }))
    }
    return pokeArr
  }

  // ------------------------------------------ //

  // funçoes de pokemon eletrico
  handleClickEletric() {
    // script
  }

  handleEletricCounter() {
    //script
  }

  render() {
    const { cliques } = this.state;
    return (
      <div>
        <div className="pokedex">
          {this.props.pokemons.map((pokemon, index) => index === cliques? <Pokemon key={pokemon.id} pokemon={pokemons[cliques]} />: '')}
        </div>
        <button onClick={this.handleClick} className='poke-button'>Next</button>
        <button onClick={this.handleClickFire}>Fire Pokemons</button>

      </div>
    );
  }
}

// (pokemon, index)=> index === 0? <Pokemon key={pokemon.id} pokemon={pokemon} /> : ''

export default Pokedex;