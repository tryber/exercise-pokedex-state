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
    };
  };

  checkPokedexSize = () => (
    (this.state.pokemonIndex === pokemons.length - 1) ?
      this.setState(() => ({
        pokemonIndex: 0,
      })) :
      this.setState((lastState, _props) => ({
        pokemonIndex: lastState.pokemonIndex + 1,
      }))
  );

  handlePokeList = () => this.checkPokedexSize();

  render() {
    const pokedexCards = pokemons.map((pokemon) => <Pokemon monster={ pokemon } key={ pokemon.name } />);
    return (
      <div className="pokedex-container" id="pokedex">
        <Types handle={ this.handlePokeList } />
        {pokedexCards[this.state.pokemonIndex]}

        <div className="botton-buttons">
          <Button event={ this.handlePokeList } content="PRÓXIMO" />
          <Button event={ this.handlePokeList } content="ALL" />
        </div>
        
      </div>
    );
  }
}

export default Pokedex;
