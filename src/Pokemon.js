import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;

        return (
            <div className="pokemon">
                <div>
                    <p className='nome'> {name} </p>
                    <p> {type} </p>
                    <p className='nome'> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} className='pokemonImg' alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;