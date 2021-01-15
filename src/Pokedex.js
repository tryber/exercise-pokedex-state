import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.clickBtn = this.clickBtn.bind(this);
    this.state = {
      pokemonAtual: 0,
      newPoke: pokemons.filter((pokeType) => pokeType.type === 'Fire'),
    };

    this.btnType = this.btnType.bind(this);
  }

  clickBtn() {
    const newPoke = this.state.pokemonAtual + 1;
    this.setState({
      pokemonAtual: newPoke < this.state.newPoke.length ? newPoke : 0,
    });
  }

  btnType(event) {
    const { pokemons } = this.props;
    const type = event.target.innerHTML;
    this.setState({
      pokemonAtual: 0,
      newPoke: type === 'All' ? pokemons : pokemons.filter((pokeType) => pokeType.type === type),
    });
  }

  render() {
    const pokemon = this.state.newPoke[this.state.pokemonAtual];
    return (
        <div className="pokedex">
          <Pokemon key={pokemon.id} pokemon={pokemon} />
          <div>
            <button className="filter-button" onClick={this.btnType}>All</button>
            <button className="filter-button" onClick={this.btnType}>Fire</button>
            <button className="filter-button" onClick={this.btnType}>Psychic</button>
            <button className="filter-button" onClick={this.btnType}>Bug</button>
            <button className="filter-button" onClick={this.btnType}>Electric</button>
            <button className="filter-button" onClick={this.btnType}>Poison</button>
            <button className="filter-button" onClick={this.btnType}>Normal</button>
            <button className="filter-button" onClick={this.btnType}>Dragon</button>
          </div>
          <div>
            <button className="pokedex-button" onClick={this.clickBtn}>Próximo Pokémon</button>
          </div>
        </div>
  
    );
  }
}

export default Pokedex;
