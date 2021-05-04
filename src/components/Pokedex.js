import React from 'react';
import pokemons from './data.js';
import Types from './TypeButtons.js';
import Pokemon from './Pokemons.js';
import Button from './PokeButton.js'

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      pokedexFilter: 'All',
    };
  };

  handleFilter = (filter) => this.setState({
    pokemonIndex: 0,
    pokedexFilter: filter.target.value,
  });

  render() {
    const { pokedexFilter } = this.state;

    const toFilter = pokemons.filter((pokemon) => pokemon.type === pokedexFilter)
      .map((pokemon) => (
        <Pokemon monster={ pokemon } key={ pokemon.name } />
      ));

    const pokedexCards = pokemons.map((pokemon) => <Pokemon monster={ pokemon } key={ pokemon.name } />);

    const validator = () => {
      return (pokedexFilter !== 'All') ? toFilter : pokedexCards;
    };

    const handleLists = () => { // Resolver esse handle
      const size = validator();

      (this.state.pokemonIndex === size.length - 1) ?
        this.setState(() => ({
          pokemonIndex: 0,
        })) :
        this.setState((lastState, _props) => ({
          pokemonIndex: lastState.pokemonIndex + 1,
        }));
    }

    return (
      <div className="pokedex-container" id="pokedex">
        <Types handler={ this.handleFilter } />
        {validator()[this.state.pokemonIndex]}

        <div className="botton-buttons">
          <Button event={ this.handleLists } content="PRÓXIMO" />
          <Button event={ this.handleFilter } value="All" className="All" content="ALL" />
        </div>
      </div>
    );
  }
}

export default Pokedex;
