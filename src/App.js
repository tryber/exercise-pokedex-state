import './App.css';
import pokemons from './data'
import Pokedex from './pokedex'

function App() {
  return (
    <div className="App">
      <div className="pokemon">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons} />      
      </div>
    </div>
  );
}

export default App;
