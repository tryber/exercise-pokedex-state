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

  handleClickFire() {
    // const firePoke = pokemons.map((poke, index) => poke.type === 'Fire'? index : 0)
    // .filter((poke, index) => poke !== 0)
    // const pokeArr = firePoke[this.state.cliqueFire]
    //   this.setState((estadoAnterior, _props) => ({
    //   cliqueFire: estadoAnterior.cliqueFire + 1
    // }))
    // if(this.state.cliqueFire === firePoke.length - 1) {
    //   this.setState((estadoAnterior, _props) => ({
    //     cliqueFire: estadoAnterior.cliqueFire = 0
    //   }))
    // }
    const pokeArr = this.cliqueFireCounter()
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques = pokeArr
    }))

    //console.log(firePoke.length - 1)
    //console.log(pokeArr)
  }

  cliqueFireCounter() {
    const firePoke = pokemons.map((poke, index) => poke.type === 'Fire'? index : 0)
    .filter((poke, index) => poke !== 0)
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

  render() {
    // console.log(this.handleClickFire())
    // console.log(this)
    return (
      <div>
        <div className="pokedex">
          {this.props.pokemons.map((pokemon, index) => index === this.state.cliques? <Pokemon key={pokemon.id} pokemon={pokemons[this.state.cliques]} />: '')}
        </div>
        <button onClick={this.handleClick} className='poke-button'>Next</button>
        <button onClick={this.handleClickFire}>Fire Pokemons</button>

      </div>
    );
  }
}

// (pokemon, index)=> index === 0? <Pokemon key={pokemon.id} pokemon={pokemon} /> : ''

export default Pokedex;