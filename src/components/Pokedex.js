import React from "react";
import Pokemon from "./Pokemon";
import TypeButton from "./Button";

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
      this.setState({ pokemonPosition: 0 });
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
    let pokemonsType = this.props.pokemons.filter(
      (pokemon) => pokemon.type === event.target.innerText
    );
    this.setState({
      arrayfiltered: pokemonsType,
      pokemonPosition: 0,
    });
  };
  allPokemonsType = () => {
    const types = this.props.pokemons.map((pokemon) => pokemon.type);
    const typesWithNoRepetition = types.filter(
      (thisType, index) => types.indexOf(thisType) === index
    );
    return typesWithNoRepetition;
  };

  render() {
    return (
      <div className="pokedex">
        <div>
          <Pokemon
            pokemon={this.state.arrayfiltered[this.state.pokemonPosition]}
          />

          <button onClick={this.reset}>All</button>

          {this.allPokemonsType().map((type) => (
            <TypeButton onClick={this.filterType} key={type}>
              {type}
            </TypeButton>
          ))}
        </div>
        <div>
          <button
            className="next-poke"
            onClick={this.handlerClick}
            disabled={this.state.arrayfiltered.length === 1}
          >
            proximo pokemon
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
