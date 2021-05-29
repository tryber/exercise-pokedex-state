import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;

        return (
            <div className="pokemon">
                    <p className='nome'> {name} </p>
                    <img src={image} className='pokemonImg' alt={`${name} sprite`} />
                    <p> {type} </p>
                    <p>Media de peso:</p>
                    <p className='nome'> {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </div>
        );
    }
}

export default Pokemon;