import React, { Component } from 'react'
import './alone.css'

class PokemonAlone extends Component {
  render() {
    const { pokemons } = this.props
    const { color, image } = pokemons
    const { height, unit } = pokemons.averageHeight
    const { value, measurementUnit } = pokemons.averageWeight
    return (
      <li style={{backgroundColor: color}} className='aloneDiv'>
        <div className="divImg">
          <img src={image} alt={'foto-pokemom'} />
        </div>
        <div className='info'>
          <p>No.{this.props.pokemons.id} {this.props.pokemons.name}</p> 
          <p>{this.props.pokemons.type}</p>
          <p>Average Height: { height } { unit }</p>
          <p>Average Weight: { value } { measurementUnit }</p>
        </div>
      </li>
    )
  }
} 

export default PokemonAlone