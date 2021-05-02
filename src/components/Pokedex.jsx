import React from 'react';
import data from '../data'
import PokemonCard from './PokemonCard'
import Button from './Button';

class Pokedex extends React.Component {
  constructor(props){
    super(props);
    const pookemonTypes = new Set(data.map((pokemon) => pokemon.type));

    this.state = {
      pokemons: data,
      position: 0,
      isDisabled: false,
      pokemonTypes: ['all', ...pookemonTypes],
    }
  }

  filterPokemons = ({target: {name}}) => {
    let filted = null;
    let controlerButton = null;

    if (name === 'all') {
      filted = data;
    } else {
      filted = data.filter((pokemon) => pokemon.type === name);
    }
  
    controlerButton = filted.length <= 1 ? true : false;
    this.setState({
      position: 0,
      pokemons: filted,
      isDisabled: controlerButton,
    })

  }

  nextPokemon = () => {
    const afterPosion = this.state.position;
    const amountPokemons = this.state.pokemons.length - 1;
    
    if (amountPokemons === afterPosion) {
      this.setState({ position: 0})
    
    } else {
      this.setState({
        position: this.state.position + 1,
      })
    }
  }

  render() {
    return(
      <div className="pokedex">
        <PokemonCard pokemon={this.state.pokemons[this.state.position]} />
        
        <div className="controler">
          <button disabled={this.state.isDisabled} onClick={this.nextPokemon}>Next pokemon</button>
        </div>

        <div className="filterPokemons">
          {this.state.pokemonTypes
            .map((type, index) =>  <Button  key={index} type={type} callbackFilter={this.filterPokemons} />)
          }
        </div>
      </div>
    )
  }
}

export default Pokedex;