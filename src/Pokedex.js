import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
	constructor(props) {
		super();
		this.state = {
			pokeIndex: 0,
			pokeType: "Fire",
		}
		this.goToNextPokemon = this.goToNextPokemon.bind(this);
		this.filterByType = this.filterByType.bind(this);
	}

	goToNextPokemon({ length }) {
		this.setState(
			(state) => {
				const { pokeIndex } = this.state;
				if (pokeIndex === length - 1) return ({ pokeIndex: 0 })
				return ({ pokeIndex: state.pokeIndex + 1 });
			}
		);
	}

	filterByType(type) {
		this.setState({ pokeType: type })
	}

	render() {
		const { pokemons } = this.props;
		const { pokeIndex, pokeType } = this.state;
		const filteredPokemons = pokemons.filter((pokemon) => pokemon.type.includes(pokeType));
		return (
			<div className="pokedex">
				<Pokemon key={ filteredPokemons[pokeIndex].id } pokemon={ filteredPokemons[pokeIndex] } />
				<Button btnTxt="Next pokemon" onclick={ () => this.goToNextPokemon(filteredPokemons) }/>
				<Button btnTxt="Fire" onclick={ () => this.filterByType("Fire") }/>
				<Button btnTxt="Psychic" onclick={ () => this.filterByType("Psychic") }/>
			</div>
		);
	}
}

export default Pokedex;