import React from 'react';
import Pokemon from './Pokemon';
import data from './data'

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            filter: '',
        }
    }

    setFire = () => {
        this.setState((state) => (
            {
                number: state.number = 0,
                filter: state.filter = 'Fire'
            }
        ))
    }

    setPsychic = () => {
        this.setState((state) => (
            {
                number: state.number = 0,
                filter: state.filter = 'Psychic'
            }
        ))
    }

    setAll = () => {
        this.setState((state) => (
            {
                number: state.number = 0,
                filter: state.filter = ''
            }
        ))
    }

    next = () => {
        if (this.state.filter === 'Fire') {
            if (this.state.number > data.filter(data => data.type === 'Fire').length - 2) {
                this.setState((state) => (
                    { number: state.number = 0 }
                ))
            } else {
                this.setState((state) => (
                    { number: state.number + 1 }
                ))
            }
        } else if (this.state.filter === 'Psychic') {
            if (this.state.number > data.filter(data => data.type === 'Psychic').length - 2) {
                this.setState((state) => (
                    { number: state.number = 0 }
                ))
            } else {
                this.setState((state) => (
                    { number: state.number + 1 }
                ))
            }
        } else {
            if (this.state.number > data.length - 2) {
                this.setState((state) => (
                    { number: state.number = 0 }
                ))
            } else {
                this.setState((state) => (
                    { number: state.number + 1 }
                ))
            }
        }
    }

    render() {
        const pokemons = this.props.pokemons;
        return (
            <div>
                <div className="pokedex">
                    {pokemons.filter(pokemon => pokemon.type.includes(this.state.filter))
                        .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[this.state.number]}
                </div>
                <div>
                    <button onClick={this.next}>Próximo</button>
                </div>
                <div>
                    <button onClick={this.setAll}>All</button>
                    <button onClick={this.setFire}>Fire</button>
                    <button onClick={this.setPsychic}>Psychic</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;