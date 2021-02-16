import React, { Component } from 'react'
import './poke.css'

class Pokemon extends Component {
  render() {
    const { value, measurementUnit } = this.props.pokemons.averageWeight
    return (
      <li style={{backgroundColor: this.props.pokemons.color}} className='pokediv'>
        <div className='pokeInfo'>
          <p>No.{this.props.pokemons.id} {this.props.pokemons.name}</p> 
          <p>Type: {this.props.pokemons.type}</p>
          <p>Average Weight: {value} {measurementUnit}</p>
        </div>
        <img src={this.props.pokemons.image} ></img>
      </li>
    )
  }
} 

export default Pokemon
