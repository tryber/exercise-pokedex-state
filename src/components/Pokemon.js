import React, { Component } from 'react'
import './pokemon.css'

class Pokemon extends Component {
    render () {
        const { name, type, averageWeight, image } = this.props.pokemon

        return (
            <section className='pokemon-card'>
                <img src={image} alt={`Imagem do pokemon ${name}`}></img>
                <ul>
                    <li>{name}</li>
                    <li>{type}</li>
                    <li>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</li>
                </ul>
            </section>
        )
    }
}

export default Pokemon