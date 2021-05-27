import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image} = this.props.poke;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className='pokemon'>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <p>{value}{measurementUnit}</p>
        <img className = "pokemon-img" src={image} alt='imagem do pokemon' />
      </div>
    );
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
