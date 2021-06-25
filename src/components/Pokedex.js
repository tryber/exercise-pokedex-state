import React, { Component } from 'react'
import pokemons from '../pokemons'
import Pokemon from './Pokemon'
import Button from '../components/Button'


class Pokedex extends Component {
    constructor() {
        super()

        this.state = {
            pokemonIndex: 0,
            pokemonFiltered: pokemons
        }

        this.nextPokemon = this.nextPokemon.bind(this)
        this.filterPokemon = this.filterPokemon.bind(this)
    }

    nextPokemon() {
        if (this.state.pokemonIndex >= this.state.pokemonFiltered.length - 1) {
            this.setState(() => ({pokemonIndex: 0}))
        } else {
            this.setState((state) => ({pokemonIndex: state.pokemonIndex + 1}))
        }
    }

    filterPokemon(type) {
        this.setState(() => ({pokemonIndex: 0}))
        if (type === 'All') {
            this.setState(() => ({pokemonFiltered: pokemons}))
        } else {
        this.setState(() => ({pokemonFiltered: pokemons.filter((pokemon) => pokemon.type === type)}))
        }
    }

    render () {
        const { pokemonIndex, pokemonFiltered } = this.state
        const buttons = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon']

        return (
            <div>
                <Pokemon pokemon={pokemonFiltered[pokemonIndex]} key={pokemonFiltered[pokemonIndex].id}/>
                <div>
                    {buttons.map((button) =>  <Button 
                    text={button} 
                    click={() => this.filterPokemon(button)}
                    key={button}
                    />)}
                </div>
                <Button text="Próximo Pokemon" click={this.nextPokemon} />
            </div>
        )
    }
}

export default Pokedex