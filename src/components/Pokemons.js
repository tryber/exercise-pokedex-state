import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {

    const { id, name, type, averageWeight, image, moreInfo } = this.props.monster;

    return (
      <div className="pokedex-card" key={ id }>
        <div className="card-info">
          <h4> { name } </h4>
          <p> - </p>
          <p> Type: { type }. </p>
          <p> Average weight: { `${averageWeight.value} ${averageWeight.measurementUnit}.` } </p>
        </div>
        <img src={image} alt={name} />
        <a target="_blank" rel="noopener noreferrer" href={moreInfo} > More info </a>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
