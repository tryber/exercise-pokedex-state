import React from 'react';
import PokemonInfo from './PokemonInfo';
import Button from './Button';
import './PokemonsList.css';

class PokemonsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: 'all',
    };
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }


  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <section>
        <div className="pokedex">
          <PokemonInfo key={pokemon.id} pokemonInfo={pokemon} />
        </div>
        
        <div className="pokedex-buttons-panel">
          <Button
            onClick={() => this.filterPokemons('all')}
            className="filter-button">All
          </Button>

          {pokemonTypes.map(type => (
            <Button
              key={ type }
              onClick={() => this.filterPokemons(type)}
              className="filter-button">{ type }
            </Button>
          ))}
        </div>

        <Button
          className="pokedex-button"
          onClick={() => this.nextPokemon(filteredPokemons.length)}
          disabled={ filteredPokemons.length <= 1 }>Próximo
        </Button>

      </section>
    )
  }
}

export default PokemonsList;