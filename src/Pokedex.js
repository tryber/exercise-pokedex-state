import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
    constructor(props) {
        super();
        this.state = {
            nextType: 'All',
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

    pokeFilter = (type) => {
        return this.props.pokemons.filter((pokemon) => pokemon.type === type);
    }

    render() {
        const { nextType, next } = this.state;
        let poke = [];
        if (nextType === 'All') {
            poke = this.props.pokemons;
        } else {
            poke = nextType === 'Fire' ? this.pokeFilter('Fire') : this.pokeFilter('Psychic');
        }
        return (
            <div>
                <div className="pokedex">
                    {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                    <Pokemon key={poke[next].id} pokemon={poke[next]} />
                </div>
                <Button name="All" value={poke.length} onClick={this.handleClick} />
                <Button name="Fire" value={poke.length} onClick={this.handleClick} />
                <Button name="Psychic" value={poke.length} onClick={this.handleClick} />
            </div>
        );
    }
}

export default Pokedex;
