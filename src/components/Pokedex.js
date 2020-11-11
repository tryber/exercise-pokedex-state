import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
    this.state = {
      pokemonPosition: 0,
      arrayfiltered: this.props.pokemons,
    };
  }

  handlerClick() {
    if (this.state.pokemonPosition >= this.state.arrayfiltered.length - 1) {
      this.setState(() => ({
        pokemonPosition: 0,
      }));
    } else {
      this.setState((estadoAnterior) => ({
        pokemonPosition: estadoAnterior.pokemonPosition + 1,
      }));
    }
  }

  reset = () => {
    this.setState(() => ({
      arrayfiltered: this.props.pokemons,
      pokemonPosition: 0,
    }));
  };
  filterType = (event) => {
    console.log(event.target.innerText);
    let pokemonsType = this.props.pokemons.filter(
      (pokemon) => pokemon.type === event.target.innerText
    );
    this.setState(() => ({
      arrayfiltered: pokemonsType,
      pokemonPosition: 0,
    }));
  };

  render() {
    return (
      <div className="pokedex">
        <div>
          <Pokemon
            pokemon={this.state.arrayfiltered[this.state.pokemonPosition]}
          />
          <button onClick={this.reset}>All</button>
          <button onClick={this.handlerClick}> me clica :o</button>
          <button onClick={this.filterType}>Fire</button>
          <button onClick={this.filterType}>Psychic</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
