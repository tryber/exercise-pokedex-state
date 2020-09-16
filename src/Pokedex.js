import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
          index: 0
        }
      }
      handleClick() {
        while(this.state.index < pokemons.length) {
          if (this.state.index === pokemons.length - 1) {
            this.setState((estadoAnterior, _props) => ({
              index: 0
            }))
          } else {
            this.setState((estadoAnterior, _props) => ({
              index: estadoAnterior.index + 1
            }))
          }
        }
      }
    render() {
        const { pokemon } = this.props
        return (
            <div className="pokedex">
                <Pokemon key={pokemons[this.state.index].id} name={pokemons[this.state.index].name} type={pokemons[this.state.index].type} averageWeight={pokemons[this.state.index].averageWeight} image={pokemons[this.state.index].image} />
                <button onClick={this.handleClick}>Próximo Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;