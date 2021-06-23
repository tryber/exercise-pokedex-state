import React from 'react';

class Pokemon extends React.Component {
  constructor() {
    super();
    this.changePokemon = this.changePokemon.bind(this);
    this.state = {
      pokemonIndex: 0,
    }
  }

  changePokemon() {
    const { pokemons } = this.props
    console.log(pokemons.length)

    if (this.state.pokemonIndex < pokemons.length - 1 ) {
      this.setState({
        pokemonIndex: this.state.pokemonIndex + 1,
      })
    } else {
      this.setState({
        pokemonIndex: 0,
      })
    }
  }

  render() {
    const { pokemons } = this.props;
  
    const pokemon = pokemons
      .find((pokemon) => pokemons.indexOf(pokemon) === this.state.pokemonIndex);

    const { name, type, averageWeight, image } = pokemon;

    return (
      <div>
        <div className="pokemon">
          <div>
            <p> {name} </p>
            <p> {type} </p>
            <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <button onClick={ this.changePokemon }>Next Pokemon</button>
      </div>
    );
  }
}

export default Pokemon;