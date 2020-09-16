import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super();
    this.changePokemon = this.changePokemon.bind(this)
    this.filterTypes = this.filterTypes.bind(this)
    this.state = {
      pokeIndex: 0,
      pokeTypes: props.pokemons.reduce((acc, current) =>
        acc.includes(current.type) ? acc : acc.concat(current.type),
        ['All']),
      currentPokeList: props.pokemons,
    }
  }

  filterTypes(chosenType) {
    chosenType === 'All'
      ? this.setState(_prev => ({ currentPokeList: this.props.pokemons }))
      : this.setState(_prev => ({
        currentPokeList: this.props.pokemons.filter(function (poke) {
          return poke.type === chosenType
        }
        )
      })
      )
    this.setState({ pokeIndex: 0 })
  }

  changePokemon() {
    this.state.pokeIndex < this.state.currentPokeList.length - 1
      ? this.setState((previous, _props) => ({
        pokeIndex: previous.pokeIndex + 1
      }))
      : this.setState({ pokeIndex: 0 })
  }

  render() {
    return (
      <div>
        <div className="pokedex">
          {this.state.currentPokeList.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />
          })[this.state.pokeIndex]}
        </div>
        <button onClick={this.changePokemon}>Next Pokemon</button>
        <div className="pokeType">
          {this.state.pokeTypes.map(pokeType =>
            <button
              key={pokeType}
              onClick={() => this.filterTypes(pokeType)}>
              {pokeType}
            </button>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
