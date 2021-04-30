import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import FilterButtons from './components/FilterButtons';
import ChangeButton from './components/ChangeButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      choiced: 0,
      filter: '',
      pokemons: pokemons,
    };
    this.nextPoke = this.nextPoke.bind(this);
    this.setFilter = this.setFilter.bind(this)
  }

  nextPoke = () => {
    this.setState((previewState, _props) => (
      {
        choiced: previewState.choiced < previewState.pokemons.length -1 ? previewState.choiced + 1 : 0,
      }));
  }

  setFilter = (event) => {
    const filter = event.target.innerText === 'All' ? '' : event.target.innerText;
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type.includes(filter));
    this.setState({pokemons: filteredPokemons, choiced: 0 });
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.pokemons} choiced={this.state.choiced} />
        <FilterButtons setFilter={this.setFilter} />
        <ChangeButton nextPoke={this.nextPoke} isAble={this.state.pokemons.length > 1} />
      </div>
    );
  } 
}

export default App;