import React, { Component } from 'react';
import pokemons from './data'
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'
import TypeButton from './TypeButton'
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
                <TypeButton pokemonType={this.pokemonType} pokemons={pokemons} />
            </div>
            <div>
                <button onClick={this.nextPokemon} className='buttons'>Próximo Pokemon</button>
                <button onClick={this.allPokemons} className='buttons'>Todos os Pokemons</button>
            </div>
        </div>
    )}
}
export default Botao