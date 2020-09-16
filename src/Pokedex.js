import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super();
    this.changePokemon = this.changePokemon.bind(this)
    this.filterTypes = this.filterTypes.bind(this)
    this.state = {
      pokeIndex: 0,
      filteredPokes: props.pokemons.reduce((acc, current) =>
        acc.includes(current.type) ? acc : acc.concat(current.type),
        ['All'])
    }
  }

  filterTypes(chosenType) {
    return this.props.pokemons.filter(poke => {
      if (poke.type === chosenType) {
        return poke
      }
    }
    )
  }

  changePokemon() {
    this.state.pokeIndex < this.props.pokemons.length - 1
      ? this.setState((previous, _props) => ({
        pokeIndex: previous.pokeIndex + 1
      }))
      : this.setState({ pokeIndex: 0 })
  }

  render() {
    return (
      <div>
        <div className="pokedex">
          {this.props.pokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />
          })[this.state.pokeIndex]}
        </div>
        <button onClick={this.changePokemon}>Next Pokemon</button>
        <div className="pokeType">
          {this.state.filteredPokes.map(pokeType =>
            <button key={pokeType}>{pokeType}</button>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
