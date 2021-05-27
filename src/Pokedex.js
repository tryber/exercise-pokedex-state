import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
    constructor(props) {
        super(props);

        const pokemons = this.props.pokemons;

        this.state = {
            indexPokemon: 0,
            pokemons: pokemons,
        }
    }

    proximoPokemon = () => {
        this.setState((anterior, _props) => ({
            indexPokemon: anterior.indexPokemon + 1,
        }));
        if (this.state.indexPokemon >= this.state.pokemons.length - 1) {
            this.setState({
                indexPokemon: 0,
            })
        }
    }

    mudaTipo = (tipo) => {
        this.setState({
            indexPokemon: 0,
            pokemons: this.filtraTipo(tipo),
        }, () => this.blocaProximo())
    }

    filtraTipo = (tipo) => {
        if (tipo === 'All') {
            return this.props.pokemons;
        }
        return this.props.pokemons.filter((pokemon) => {
            if (pokemon.type === tipo) {
                return pokemon;
            }
        });
    }

    blocaProximo = () => {
        if (this.state.pokemons.length === 1) {
            document.querySelector('.bt-next').style.background = 'grey';
            document.querySelector('.bt-next').disabled = true;
        } else {
            document.querySelector('.bt-next').style.background = 'green';
            document.querySelector('.bt-next').disabled = false;
        }
    }

    render() {
        return (
            <div className="pokedex">
                <div className="pokemonCard">
                    {
                        <Pokemon key={this.state.pokemons[this.state.indexPokemon].id}
                        pokemon={this.state.pokemons[this.state.indexPokemon]} 
                        />
                    }
                </div>
                <div className="buttons">
                    <button className="bt bt-all" onClick={ () => this.mudaTipo('All') }>All</button>
                    {
                        this.props.pokemons.map((pokemon) => pokemon.type)
                        .filter((elemento, i, arr) => arr.indexOf(elemento) === i)
                        .map((elemento) => {
                            return (
                            <button key={elemento} className="bt" onClick={ () => this.mudaTipo(elemento)}>{ elemento }</button>
                            )
                        })
                    }
                </div>
                <div className="proximo">
                    <button className="bt bt-next" onClick={this.proximoPokemon}>Próximo Pokemon</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;