import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: 0,
      nextType: this.props.pokemons,
    };
  }

  elementPokemonBtn = (element) => {
    const { pokemons } = this.props;
    const filteredPokemons = pokemons.filter((each) => each.type === element);
    this.setState((prevState, _props) => ({
      nextType: filteredPokemons,
      next: 0,
    }));
  };

  nextButtonFunc = () => {
    this.setState((prevState, _props) => ({
      next:
        prevState.next + 1 === this.state.nextType.length
          ? 0
          : prevState.next + 1,
    }));
  };

  showAllPokemons = () => {
    const { pokemons } = this.props;
    this.setState((prevState, _props) => ({
      nextType: pokemons,
      next: 0,
    }));
  };

  render() {
    const elements = this.props.pokemons.map((item) => item.type);
    const noRepeatElements = [...new Set(elements)];

    return (
      <div className='container'>
        <div className="pokedex">
          <Pokemon pokemon={this.state.nextType[this.state.next]} />
        </div>
        <button disabled={ this.state.nextType.length === 1 ? true : false} onClick={this.nextButtonFunc}>Next</button>
        <section className='buttonGroup'>
        {noRepeatElements.map((item, index) => (
          <button className={item} key={index} onClick={() => this.elementPokemonBtn(item)}>
            {item}
          </button>
        ))}
        </section>
        <button onClick={this.showAllPokemons}>Show All Pokemons</button>
      </div>
    );
  }
}

export default Pokedex;
