import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClickPrevious = () => {
        if (this.state.counter === 0) {
            this.setState(() => ({
                counter: 8
            }))
        } else {
            this.setState((estadoAnterior, _props) => ({
                counter: estadoAnterior.counter - 1
            }))
        }
    }

    handleClickNext = () => {
        if (this.state.counter === 8) {
            this.setState(() => ({
                counter: 0
            }))
        } else {
            this.setState((estadoAnterior, _props) => ({
                counter: estadoAnterior.counter + 1
            }))
        }
    }

    render() {
        return (
            <div>
                <div className="pokedex">
                    <Pokemon key={this.props.pokemons[this.state.counter].id} pokemon={this.props.pokemons[this.state.counter]} />
                </div>
                <button onClick={this.handleClickPrevious}>Anterior</button><button onClick={this.handleClickNext}>Próximo</button>
            </div>
        );
    }
}

export default Pokedex;
