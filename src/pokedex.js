import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
        
    this.state = {
      count: 0  
    };    
  }
    
  handleClick = () => {    
    if (this.state.count !== pokemons.length - 1) {
      this.setState({
        count: this.state.count + 1
      })
    } else {
      this.setState({
        count: 0
      });
    }
  }

  render() {
    const { pokemons } = this.props;
    const { count } = this.state;

    return(
      <div className='pokedex'>
        <Pokemon pokemon={ pokemons[count] } />

        <button type="button" onClick={this.handleClick}>
          Próximo Pokémon
        </button>        
      </div>
    );
  }
}

export default Pokedex;