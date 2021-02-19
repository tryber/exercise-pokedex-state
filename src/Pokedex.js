import React, { Component } from 'react'
import pokemons from './data'
import Pokemon from './Pokemon'
import PokemonAlone from './PokemomAlone';
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

class Pokedex extends Component {
  constructor() {
    super();
    this.nextPokemon = this.nextPokemon.bind(this);
    this.previousPokemon = this.previousPokemon.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.type = this.type.bind(this);
    this.state = {
      filtro: '',
      arrayPosition: 0
    }
  }
  
  
  handleChange(event) {
    this.setState({ arrayPosition: 0 })
    const word = event.target.value.split('');
    word.forEach((value, index) => {
      if (index === 0) {
        word[0] = value.toUpperCase();
      }
    });
    const last = word.join('');
    console.log(last)
    this.setState({ filtro: last })
  }

  type(param) {
    this.setState({ filtro: param })
    this.setState({ arrayPosition: 0 })
  }

  previousPokemon() {
    const max = pokemons.filter((pokemon) => pokemon.type.includes(this.state.filtro) || pokemon.name.includes(this.state.filtro)).length
    if (this.state.arrayPosition === 0) {
      this.setState({ arrayPosition: (max - 1) })
    } else {
      this.setState((estado, _props) => ({
        arrayPosition: estado.arrayPosition - 1
      }))
    }
  }

  nextPokemon() {
    const max = pokemons.filter((pokemon) => pokemon.type.includes(this.state.filtro) || pokemon.name.includes(this.state.filtro)).length
    if (this.state.arrayPosition === (max - 1)) {
      this.setState({ arrayPosition: 0 })
    } else {
      this.setState((estado, _props) => ({
        arrayPosition: estado.arrayPosition + 1
      }))
    }
  }

  render() {
    const { filtro, arrayPosition } = this.state
    return (
      <div className="App">
        <header>
          <h1>Pokedex</h1>
        </header>
        <input type="text" placeholder='digite o pokemon' onChange={this.handleChange}/>
        <div className="buttonList">
          <button style={{ backgroundColor: 'rgb(139, 190, 138)' }} className="btn-type" onClick={() => this.type('Grass')}>Grass</button>
          <button style={{ backgroundColor: 'rgb(255, 167, 86)' }} className="btn-type" onClick={() => this.type('Fire')}>Fire</button>
          <button style={{ backgroundColor: 'rgb(88, 171, 246)' }} className="btn-type" onClick={() => this.type('Water')}>Water</button>
          <button style={{ backgroundColor: 'rgb(139, 214, 116)' }} className="btn-type" onClick={() => this.type('Bug')}>Bug</button>
          <button style={{ backgroundColor: 'rgb(242, 242, 242)' }} className="btn-type" onClick={() => this.type('Flying')}>Flying</button>
          <button style={{ backgroundColor: 'rgb(181, 185, 196)' }} className="btn-type" onClick={() => this.type('Normal')}>Normal</button>
          <button style={{ backgroundColor: 'rgb(159, 110, 151)' }} className="btn-type" onClick={() => this.type('Poison')}>Poison</button>
          <button style={{ backgroundColor: 'rgb(242, 203, 85)' }} className="btn-type" onClick={() => this.type('Electric')}>Electric</button>
          <button style={{ backgroundColor: 'rgb(247, 133, 81)' }} className="btn-type" onClick={() => this.type('Ground')}>Ground</button>
          <button style={{ backgroundColor: 'rgb(235, 168, 195)' }} className="btn-type" onClick={() => this.type('Fairy')}>Fairy</button>
          <button style={{ backgroundColor: 'rgb(192, 48, 40)' }} className="btn-type" onClick={() => this.type('Fighting')}>Fighting</button>
          <button style={{ backgroundColor: 'rgb(248, 88, 136)' }} className="btn-type" onClick={() => this.type('Psychic')}>Psychic</button>
          <button style={{ backgroundColor: 'rgb(184, 160, 56)' }} className="btn-type" onClick={() => this.type('Rock')}>Rock</button>
          <button style={{ backgroundColor: 'rgb(112, 88, 152)' }} className="btn-type" onClick={() => this.type('Ghost')}>Ghost</button>
          <button style={{ backgroundColor: 'rgb(112, 56, 248)' }} className="btn-type" onClick={() => this.type('Dragon')}>Dragon</button>
          <button style={{ backgroundColor: 'rgb(152, 216, 216)' }} className="btn-type" onClick={() => this.type('Ice')}>Ice</button>
        </div>
        <div className="destaque">
          <button className="btn btn-previous" onClick={ this.previousPokemon }><FaArrowLeft /></button>
          <ul className="pokeSecOne">
            {pokemons
            .filter((pokemon) => pokemon.type.includes(filtro) || pokemon.name.includes(filtro) )
            .map((pokemon) => <PokemonAlone pokemons={ pokemon } key={ pokemon.id } />)[arrayPosition]}
          </ul>
        <button className="btn btn-next" onClick={ this.nextPokemon }><FaArrowRight /></button>
        </div>
        <ul className="pokeSec">
          {pokemons
          .filter((pokemon) => pokemon.type.includes(filtro))
          .map((pokemon) => <Pokemon pokemons={ pokemon } key={ pokemon.id }/>)}
        </ul>
        {/* <section className='pokeSec'>
          <Pokedex pokemons={ pokemons }/>
        </section> */}
      </div>
    );
  }
}

export default Pokedex