import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import Button from './Button'
import './styles/Button.css';
class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
    this.state = {
      numberOfClicks: 0,
      arrayPokemon: pokemons,
    }
  }
  handleClick() {
    const { numberOfClicks, arrayPokemon } = this.state
    if (numberOfClicks === arrayPokemon.length-1) {
      this.setState({ numberOfClicks: 0 })
    } else {
      this.setState((initialState, _props) => ({
        numberOfClicks: initialState.numberOfClicks + 1,
      }))
    }
  }
  filterPokemons(specificType) {
    const newArrayPokemon = specificType === 'All'
     ? pokemons
     : pokemons.filter(({ type }) => specificType === type)
     this.setState(() => (
      {
        arrayPokemon: newArrayPokemon,
        numberOfClicks: 0
      }
      ))
  }
  render() {
    const types = pokemons.reduce((array, { type }) => {
      if (array.includes(type)) return array
      else return array.concat(type)
    }, ['All']);
    return (
      <div>
         <Pokemon pokemon={this.state.arrayPokemon[this.state.numberOfClicks]} />
        <div className="pokedex">
          <button
          onClick={this.handleClick}
          disabled={ this.state.numberOfClicks === this.state.arrayPokemon.length - 1}
          >Próximo</button>
          {types.map((type)=> (
            <Button
            key={type}
            onClick={() => this.filterPokemons(type)}
            type={type}
            className={'pokeButao'}
            />
          ))}
      </div>
      </div>
    )
  }
}
export default Pokedex;