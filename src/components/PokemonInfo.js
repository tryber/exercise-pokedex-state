import React from 'react';
import './PokemonInfo.css';
import PropTypes from 'prop-types';

class PokemonInfo extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemonInfo;
  
    return (
      <section className="item">
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ averageWeight.value } { averageWeight.measurementUnit }</p>
        </div>
        <img src={ image } alt={ name } />
      </section>
    )
  }
}

PokemonInfo.propTypes = {
  name: PropTypes.string,
  type:PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
};

export default PokemonInfo;
