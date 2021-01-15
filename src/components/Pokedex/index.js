import React from 'react';

import Pokemon from '../Pokemon';
import Button from '../Button';
import ButtonsContainer from '../ButtonsContainer';

import './styles.css';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPokemon: 0,
            pokemonList: this.filterPokemonsByType('Fire'),
            isNextButtonDisabled: false,
        };

        this.handleNextPokemon = this.handleNextPokemon.bind(this);
        this.filterPokemonsByType = this.filterPokemonsByType.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleNextPokemon() {
        const { pokemonList } = this.state;

        const nextPokemon = this.state.currentPokemon + 1;

        this.setState({
            currentPokemon: (nextPokemon >= pokemonList.length) ? 0 : nextPokemon,
        });
    }

    filterPokemonsByType(type) {
        return this.props.pokemons.filter(pokemon => pokemon.type === type);
    }

    handleTypeChange(event) {
        const newType = event.target.innerText;
        const newPokemonArray = this.filterPokemonsByType(newType);
        this.setState({
            currentPokemon: 0,
            pokemonList: (newType === 'All') ?
                this.props.pokemons :
                newPokemonArray,
            isNextButtonDisabled: (newPokemonArray.length === 1) ?
                true :
                false
        });
    }

    render() {
        const pokemon = this.state.pokemonList[this.state.currentPokemon];
        
        return (
            <>
                <Button 
                    disabled={this.state.isNextButtonDisabled}
                    callback={this.handleNextPokemon}
                >Próximo Pokemon</Button>
                <div className="pokedex">
                    {pokemon && <Pokemon key={pokemon.id} pokemon={pokemon} />}
                </div>
                <ButtonsContainer
                    pokemons={this.props.pokemons}
                    handleTypeChange={this.handleTypeChange}
                />
            </>
        );
    }
}

export default Pokedex;