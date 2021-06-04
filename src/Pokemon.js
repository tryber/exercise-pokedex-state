import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { id, name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div>
                    <p> #{id} {name} </p>
                    <p className={type}> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img className={'PokeImg'} src={image} alt={`${name} sprite`} />
            </div>
        );
    }
}

export default Pokemon;