import React from 'react';
import '../css/App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Option from './Option';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
        <Option listType={pokemons.map(pokemon => pokemon.type)} />
      </div>
    );
  }
}

export default App;
