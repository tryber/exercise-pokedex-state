import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super();
        this.state = {
            nextType: 'Psychic',
            next: 0,
        }
    }

    handleClick = ({ target: { name, value } }) => {
        const len = value - 1;
        this.setState((prevState, _props) => {
            const changeState = len === prevState.next || name !== prevState.nextType ? 0 : prevState.next + 1;
            return {
                nextType: name,
                next: changeState
            }
        });
    }

    filterMethod = (type) => {
        return this.props.pokemons.filter((pokemon) => pokemon.type === type);
    }

    render() {
        const { nextType, next } = this.state;
        const poke = nextType === 'Fire' ? this.filterMethod('Fire') : this.filterMethod('Psychic');
        return (
            <div>
                <div className="pokedex">
                    {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                    <Pokemon key={poke[next].id} pokemon={poke[next]} />
                </div>
                <button name="Fire" value={poke.length} onClick={this.handleClick}>Next Fire</button>
                <button name="Psychic" value={poke.length} onClick={this.handleClick}>Next Psychic</button>
            </div>
        );
    }
}

export default Pokedex;
