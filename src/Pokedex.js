import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super();
        this.state = {
            next: 0,
        }
    }

    handleClick = () => {
        this.setState((prevState, _props) => ({
            next: this.props.pokemons.length - 1 === prevState.next ? 0 : prevState.next + 1
        }));
    }

    render() {
        return (
            <div>
                <div className="pokedex">
                    {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                    <Pokemon key={this.props.pokemons[this.state.next].id} pokemon={this.props.pokemons[this.state.next]} />
                </div>
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

export default Pokedex;