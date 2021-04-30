import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon'>
        <div>
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>{`Peso: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name}`} width='180' />
      </div>
    )
  }
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
  image: PropTypes.string,
}

export default Pokemon;