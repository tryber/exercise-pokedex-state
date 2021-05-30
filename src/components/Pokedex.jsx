import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";
import NextButton from "./NextButton";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: 0,
      type: 'Fire',
    };

    this.next = this.next.bind(this);
  }

  // Codigo do botão next
  next = () => {
    if (this.state.pokemons === this.props.pokemons.filter((pokemon) => pokemon.type === this.state.type).length - 1) {
      this.setState(() => ({
        pokemons: 0,
      }));
    } else {
      this.setState((actualState) => ({
        pokemons: actualState.pokemons + 1,
      }));
    }
  };

  // A pokedex faz o tratamento com o status para definir quall poquemon vai como props para o compopnente pokemon.
  // Pokemon devie como vai tratar e apresentar o card polkemon.
  // Ou seja - App redereriza tudo. Pokedex devine pokemon. Pokemon define molde. Buton define state pokedex.
  
  // acessar a propriedade de cada um dos elementos pelo tipo e retornar um array com todo os poquemons desse tipo. 
  // O tipo será escolhido pelo dropdpwm
  // Pokemons sera renderizado por mep que usará como parametro os itens do state.

  render() {
    const listSelectPokemonType = pokemons.filter((pokemon) => pokemon.type === this.state.type)
    // console.log(listSelectPokemonType)

    return (
      <div className="pokedex">
        <Pokemon pokemon={listSelectPokemonType[this.state.pokemons]} />
        <NextButton next={this.next} />

      </div>
    );
  }
}

// Acessar lista de tipos
// Usar a lista map de tipos para fazer a quantidade de options do select necessaria para cobrir todos os tipos
// Adicionar opção all para retornar todos os pokemons 
//colocar uma função onchange para chamar a função next e atualizar o state.
// Ajustar o codigo para quando o state do tipo mudar a renderização dos pokemons mude de acordo com o tipo.

export default Pokedex;
