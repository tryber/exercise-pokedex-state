import React from 'react';
import '../css/App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
        <select>
          <option value="Orange">Orange</option>
          <option value="Radish">Radish</option>
          <option value="Cherry">Cherry</option>
        </select>
      </div>
    );
  }
}

export default App;