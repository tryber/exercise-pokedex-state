import React, { Component } from 'react';
import { shape, string, number } from 'prop-types';
import './pokemon.css';

class Pokemon extends Component {
  render() {
    const { pokemons } = this.props;
    const { id, name, type, color, averageHeight, averageWeight }  = pokemons
    const { height, unit } = averageHeight
    const { value, measurementUnit } = averageWeight
    return (
      <li style={{backgroundColor: color}} className='pokediv'>
        <div className='pokeInfo'>
          <p>No.{ id } { name }</p> 
          <p>Type: { type }</p>
          <p>Average Height: { height } { unit }</p>
          <p>Average Weight: { value } { measurementUnit }</p>
        </div>
        <img src={ this.props.pokemons.image } alt={ id }></img>
      </li>
    )
  }
}

Pokemon.propTypes = {
  pokemons: shape({
    id: number.isRequired,
    name: string.isRequired,
  }).isRequired,
}

export default Pokemon
