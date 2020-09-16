import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = {
          index: 0
        }
        this.handleClick = this.handleClick.bind(this)
      }
      handleClick() {
        if (this.state.index === pokemons.length - 1) {
            this.setState({ index: 0 })
        } else {
            this.setState((estadoAnterior) => ({
            index: estadoAnterior.index + 1
            }))
        }
      }
    render() {
        const { pokemon } = this.props
        return (
            <div className="pokedex">
                {pokemons.filter((pokemon, index) => index === this.state.index).map((pokemon) => {
                        return <Pokemon key={this.props.pokemons[this.state.index].id} pokemon={this.props.pokemons[this.state.index]} />
                })}                
                <button onClick={this.handleClick}>Próximo Pokemon</button>
            </div>
        );
    }
}

export default Pokedex;