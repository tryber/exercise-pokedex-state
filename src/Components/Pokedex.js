import React from 'react';
import Pokemon from './Pokemon';
class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.upIndex = this.upIndex.bind(this);
    this.downIndex = this.downIndex.bind(this);
    this.state = {
      index: 0,
      pokemonList: this.props.pokemons.map(pokemon => pokemon)
    };
  }
  
  upIndex() {
    const { index, pokemonList} = this.state;
    if (index === pokemonList.length -1) {
      this.setState(() => ({index: 0}))
    } else this.setState((prev) => ({index: prev.index + 1}))
  }

  downIndex() {
    const { index, pokemonList } = this.state;
    if (index === 0) {
      this.setState(() => ({index: pokemonList.length - 1}))
    } else this.setState((prev) => ({index: prev.index - 1}))
  }

  render() {
    const { pokemonList, index} = this.state;
    const typeList = ['All', 'Bug', 'Dragon', 'Electric', 'Fire', 'Normal', 'Poison', 'Psychic'];
    return (
      <div>
        <div className="pokedex">
          <button onClick={this.downIndex}>Prev</button>
          { <Pokemon key={pokemonList[index].id} pokemon={pokemonList[index]} /> }
          <button onClick={this.upIndex}>Next</button>
        </div>
        <div className="types">
          {typeList.map(type => <button>{type}</button>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;