import React from 'react';
import './css/App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
constructor(props) {
  super(props) 
  this.state = {
    currState: pokemons,
  }
  this.filteredFire  = this.filteredFire.bind(this)
  this.filteredPsychic = this.filteredPsychic.bind(this)
}

filteredFire() {
  const arrFire = pokemons.filter((pokemon) => pokemon.type === 'Fire');
  this.setState({ currState: arrFire })
}

filteredPsychic() {
  const arrPsychic = pokemons.filter((pokemon) => pokemon.type === 'Psychic');
  this.setState({ currState: arrPsychic})
}

  render () {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.currState} />
        <div className="buttons-tips">
          <button onClick={this.filteredFire}>Fire</button>
          <button onClick={this.filteredPsychic}>Psychic</button>
        </div>
      </div>
    );
  }
}

export default App;
