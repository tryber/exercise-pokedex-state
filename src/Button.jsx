import React, { Component } from 'react';
import pokemons from './data'
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'
class Botao extends Component {
    constructor() {
        super()
        this.state = {
            indice: -1,
            tipo: '',
            filter: true
        }
    }
    nextPokemon = () => {
        this.state.indice > 7 ? this.setState({indice: 0}) :
        this.setState((cache, _props) => ({indice: cache.indice + 1, filter: false}))
    }
    allPokemons = () => this.setState({tipo: '', filter: true, indice: -1})
    pokemonType = event => this.setState({tipo: event.target.value, filter: true})
    render(){
        return (
        <div>
            {
                this.state.filter ?
                    <Pokedex pokemons={pokemons.filter(type => type.type.includes(this.state.tipo))} /> :
                    <Pokemon pokemon={pokemons[this.state.indice]} />
            }
            <div>
                <button value='Poison' onClick={this.pokemonType}>Perigoso</button>
                <button value='Fire' onClick={this.pokemonType}>Fogoso</button>
                <button value='Electric' onClick={this.pokemonType}>Rato</button>
                <button value='Normal' onClick={this.pokemonType}>Normal</button>
            </div>
            <div>
                <button onClick={this.nextPokemon}>Próximo Pokemon</button>
                <button onClick={this.allPokemons}>Todos os Pokemons</button>
            </div>
        </div>
    )}
}
export default Botao