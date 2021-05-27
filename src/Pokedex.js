import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            next: 0,
        }
        this.nextButtonFunc = this.nextButtonFunc.bind(this);
    }

    nextButtonFunc = () => {
        console.log(this.props.pokemons)
        this.setState((prevState, _props) => ({
            next: this.props.pokemons.length - 1 === prevState.next ? 0 : prevState.next + 1
        }));
    }
    render() {
        return (
        <div>
            <div className="pokedex">
                <Pokemon key={this.props.pokemons.name} pokemon={this.props.pokemons[this.state.next]} />
            </div>
            <button onClick={this.nextButtonFunc}>Next</button>
        </div>
        );
    }
}

export default Pokedex;