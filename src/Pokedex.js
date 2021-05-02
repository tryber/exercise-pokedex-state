import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentState: this.props.pokemons[0],
      number: 1,
    }
    this.showState = this.showState.bind(this)
    this.increment = this.increment.bind(this)
    this.filteredFire = this.filteredFire.bind(this)
  }

  increment = () => {
    this.setState((numberAnterior, _props) => ({ number: numberAnterior.number + 1 }))
  }

  showState = () => {
    this.increment()
    if (this.state.number > this.props.pokemons.length - 1) return this.setState({currentState: this.props.pokemons[0], number: 1}) 
    this.setState({currentState: this.props.pokemons[this.state.number]});
  }

  filteredFire = () => {
    console.log(this.props.pokemons);
    this.increment();
    const arr = this.props.pokemons.filter((object) => object.type === 'Fire')
    console.log(arr);
    this.setState({ currentState: arr[this.state.number] })
  }

  render() {
        return (
        <div>
          <div className="pokedex">
            <Pokemon pokemon={this.state.currentState} />
          </div>
          <button className="button" onClick={this.showState}>Próximo Pokemon</button>
        </div>
        );
    }
}

export default Pokedex;
