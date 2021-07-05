import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
            i: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        const leng = this.props.pokemons.length;
        const index = this.state.i;
        if (index < (leng - 1)) {
            this.setState({
                i: index + 1,
            });
        } else {
            this.setState({
                i: 0,
            });
        }
    }

    render() {
        return (
            <div className="pokedex">
                <Pokemon pokemon={this.props.pokemons[this.state.i]} />
                <button onClick={this.handleClick}>Next Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;