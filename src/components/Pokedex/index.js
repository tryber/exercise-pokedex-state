import React from 'react';

import Pokemon from '../Pokemon';
import Button from '../Button';
import ButtonsContainer from '../ButtonsContainer';

import { PokedexStyled, Header } from './styles';
import { Container } from '../ButtonsContainer/styles';


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
                <Header>
                    <h1> Pokedex </h1>
                </Header>
                <Container>
                    <Button 
                        disabled={this.state.isNextButtonDisabled}
                        callback={this.handleNextPokemon}
                        className="previous"
                    >Anterior</Button>
                    <Button 
                        disabled={this.state.isNextButtonDisabled}
                        callback={this.handleNextPokemon}
                        className="next"
                    >Próximo</Button>
                </Container>
                <PokedexStyled>
                    {pokemon && <Pokemon key={pokemon.id} pokemon={pokemon} />}
                </PokedexStyled>
                
                
                <ButtonsContainer
                    pokemons={this.props.pokemons}
                    handleTypeChange={this.handleTypeChange}
                />
                
            </>
        );
    }
}

export default Pokedex;
