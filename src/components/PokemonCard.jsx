import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight: {value, measurementUnit}, image } } = this.props;

    return (
        <section className="pokemon">
          <div className="card-information">
            <p className="name">{name}</p>
            <p className="type">{type}</p>
            <p className="average-weight">Average Weight: {value} {measurementUnit}</p>
          </div>

          <div className="card-image">
            <img src={image} alt=""/>
          </div>
        </section>
      )
  }
}

PokemonCard.propTypes = {
  pokemon : PropTypes.shape({ 
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit : PropTypes.string,
    }).isRequired
  }).isRequired
}

export default PokemonCard;