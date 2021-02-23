import React from 'react';
import Pokemon from './Pokemon';
class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.upIndex = this.upIndex.bind(this);
    this.downIndex = this.downIndex.bind(this);
    this.setType = this.setType.bind(this);
    this.state = {
      index: 0,
      pokeList: this.props.pokemons.map(pokemon => pokemon),
    };
  }

  upIndex() {
    const { index, pokeList } = this.state;
    if (index === pokeList.length - 1) {
      this.setState(() => ({ index: 0 }))
    } else this.setState((prev) => ({ index: prev.index + 1 }))
  }

  downIndex() {
    const { index, pokeList } = this.state;
    if (index === 0) {
      this.setState(() => ({ index: pokeList.length - 1 }))
    } else this.setState((prev) => ({ index: prev.index - 1 }))
  }

  setType(btnType) {
    this.setState(() => ({ index: 0 }))
    const { pokemons } = this.props;
    if (btnType !== 'All') {
      this.setState(() => ({ pokeList: pokemons.filter(pokemon => pokemon.type === btnType) }))
    } else this.setState(() => ({ pokeList: pokemons.map(pokemon => pokemon) }))
  }

  render() {
    const { pokeList, index } = this.state;
    const typeList = ['All', 'Bug', 'Dragon', 'Electric', 'Fire', 'Normal', 'Poison', 'Psychic'];
    return (
      <div>
        <div className="pokedex">
          <button onClick={this.downIndex}>Prev</button>

          {<Pokemon key={pokeList[index].id} pokemon={pokeList[index]} />}

          <button onClick={this.upIndex}>Next</button>
        </div>

        <div className="typeBox">
          {typeList.map(type => <button key={type} className={type}
            onClick={this.setType.bind(this, type)}>{type}</button>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;
