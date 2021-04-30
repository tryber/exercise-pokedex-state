import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import filters from './components/data';

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
    this.setState((previewState, _props) => {
      if (previewState.choiced < previewState.pokemons.length -1){
        return (
          {
            ...previewState,
            choiced: previewState.choiced + 1,
          }
        )
      } else {
        return (
          {
            ...previewState,
            choiced: 0,
          }
        )
      }
      })
  }

  setFilter = (event) => {
    const filter = event.target.innerText === 'All' ? '' : event.target.innerText;
    this.setState((previewState, _props) => {
      const filteredPokemons = pokemons.filter((pokemon) => pokemon.type.includes(filter));
      filteredPokemons.length > 1 ? 
      document.getElementsByClassName('buttonChange')[0].style.backgroundColor = 'forestgreen' :
      document.getElementsByClassName('buttonChange')[0].style.backgroundColor = 'grey';
      return(
        {
        ...previewState,
        pokemons: filteredPokemons,
        choiced: 0,
      }
      )  
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.pokemons} choiced={this.state.choiced} />
        <section className="filterConteiner">
          {filters.map((filter, index) => (
            <button key={index} className="filterButton" onClick={this.setFilter}>{filter}</button>
          ))}
        </section> 
        <button onClick={this.nextPoke} className="buttonChange">Próximo Pokemon</button> 
      </div>
    );
  } 

}

export default App;