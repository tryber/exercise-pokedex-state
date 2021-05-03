import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './pokedex.css';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextType: 'All',
            next: 0,
        }
    }

    handleClickFilter = ({ target: { name, value } }) => {
        this.setState({
            nextType: name,
            next: 0
        });
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
        if (type === 'All') {
            return this.props.pokemons;
        }
        return this.props.pokemons.filter((pokemon) => pokemon.type === type);
    }

    render() {
        const { pokemons } = this.props;
        const { nextType, next } = this.state;
        // https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
        const types = [...new Set(pokemons.map((pokemon) => pokemon.type))];
        types.unshift('All');
        let poke = this.pokeFilter(nextType);
        return (
            <div>
                <div className="pokedex">
                    {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                    <Pokemon key={poke[next].id} pokemon={poke[next]} />
                </div>
                <div>
                    {types.map((type) => <Button key={type} btnClass="filter" name={type} type={type} value={poke.length} handleClick={this.handleClickFilter} />)}
                </div>
                {/* https://stackoverflow.com/questions/41488715/how-to-disable-button-in-react-js */}
                <Button btnClass="filter next" name={'Next'} type={nextType} value={poke.length} handleClick={this.handleClick} disable={poke.length === 1} />
            </div>
        );
    }
}

export default Pokedex;
