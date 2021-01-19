import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
      super()
      this.handleClick = this.handleClick.bind(this)

      this.state = {
        cliques: 0,
      }
    }

    handleClick() {
      this.setState((estadoAnterior, _props) => ({
        cliques: estadoAnterior.cliques + 1
      }))
      this.resetClick()
    }
    
    resetClick() {
      if(this.state.cliques === pokemons.length - 1) {
        this.setState((estadoAnterior, _props) => ({
          cliques: estadoAnterior.cliques = 0
        }
        ))
      }
    }

    render() {
        return (
            <div>
                <div className="pokedex">
                    {this.props.pokemons.map((pokemon, index) => index === this.state.cliques? <Pokemon key={pokemon.id} pokemon={pokemons[this.state.cliques]} />: '')}
                </div>
                <button onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}

// (pokemon, index)=> index === 0? <Pokemon key={pokemon.id} pokemon={pokemon} /> : ''

export default Pokedex;