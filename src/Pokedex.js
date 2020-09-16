import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super();
    this.changePokemon = this.changePokemon.bind(this)
    this.getTypes = this.getTypes.bind(this)
    this.state = {
      pokeIndex: 0,
      filteredPokes: props.pokemons.reduce((acc, current) => {
      if (current.type in acc) {
        console.log(current.type)
        return acc.push(current.type)
      }
      //console.log(current.type)
      //console.log(acc)
      return acc
      /* (current.type in acc ? acc.push(current.type) : acc), ['All']  */
      }
    , ['All'])
    }
  }

  getTypes() {
    this.props.pokemons.reduce((acc, current) =>
      (this.type in acc ? acc.push(current.type) : acc), ['All']
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
            <button key="">{pokeType}</button>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
