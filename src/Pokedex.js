import React from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          next: 0,
          type: this.props.pokemons,
      };
    }

    typePokemonBtn = (element) => {
        const { pokemons } = this.props;
        const pokemonsbyType = pokemons.filter((pokemon) => pokemon.type === element);
        this.setState((prevState, _props) => ({
            type: pokemonsbyType,
            next: 0,
        }));
    }
    
    nextPokemonBtn = () => {
        this.setState((prevState, _props) => ({
            next: prevState.next + 1 === this.state.type.length ?
            0 : prevState.next + 1,
        }))
    }

    showAllPokemons = () => {
        const { pokemons } = this.props;
        this.setState((prevState, _props) => ({
            type: pokemons,
            next: 0,
        }))
    }

    
    render() {
        const types = this.props.pokemons.map((pokemon) => pokemon.type);
        const noRepeatTypes = [ ...new Set(types) ];
        
        return (
          <>
            <div className="pokedex">
              <Pokemon pokemon={this.state.type[this.state.next]} />
            </div>
            {noRepeatTypes.map((type, index) => 
            <button 
              className="typeBtn" 
              key={ index } 
              onClick={() => this.typePokemonBtn(type)}>
              { type }
            </button>
            )}
            <button className="nextBtn" type="button" onClick={this.nextPokemonBtn}>Proximo pokemon</button>
          </>
        );
    }
}
