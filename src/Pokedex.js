import React from 'react';
import Pokemon from './Pokemon';
import Pokemons from './data'
import './pokedex.css'
class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedPokemon: 0,
            typePokemon: Pokemons.filter((item) => item.type === 'Fire')
        }
        this.selectPokemon = this.selectPokemon.bind(this);
        this.selectTypeFirePokemon = this.selectTypePokemon.bind(this);
        this.allPokemons = this.allPokemons.bind(this);
    }
    allPokemons() {
        this.setState({
            typePokemon: Pokemons,
            selectedPokemon: 0

        })
    }
    selectPokemon() {
        this.setState((previusState, _props) => ({
            selectedPokemon: previusState.selectedPokemon + 1
        }))

        if (this.state.selectedPokemon === this.state.typePokemon.length - 1) {
            this.setState({
                selectedPokemon: 0
            })
        }
    }

    selectTypePokemon(typePoke) {
        this.setState({
            typePokemon: Pokemons.filter((item) => item.type === typePoke),
            selectedPokemon: 0
        })
    }



    render() {
     const listPokemons = []

     Pokemons.forEach((item)=> {
         if(listPokemons.includes(item.type)) {
             
         } else {
             listPokemons.push(item.type)
         }
     })

        return (
            <div className='conteiner'>

                <div className="pokedex">

                    <Pokemon pokemon={this.state.typePokemon[this.state.selectedPokemon]} />
                </div>
                {listPokemons.map((item , index) => {
                    return <button className='button-filter' key={index} onClick={() => this.selectTypePokemon(item)}  >{item}</button>
                })}
                <button className='button-filter' onClick={this.allPokemons} >All</button>
                <button className='button-filter next' onClick={this.selectPokemon}>Next</button>
            </div>
        );
    }
}

export default Pokedex;