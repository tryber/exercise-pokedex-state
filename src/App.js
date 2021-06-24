import React from "react";
import './App.css';
import pokemons from './data';
import PokemonsList from "./components/PokemonsList";

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <h1>Pokedex!!</h1>
        <section className="container">
          <div>
            <PokemonsList pokemons={pokemons} />
          </div>
        </section>
      </main>
    );

  }
}

export default App;
