import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css';

class Pokedex extends React.Component {
	constructor() {
		super();
		this.state = {
			pokeIndex: 0,
			pokeType: "All",
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
		const { pokemons, types } = this.props;
		const { pokeIndex, pokeType } = this.state;
		const filteredPokemons = pokemons.filter((pokemon) => pokeType === 'All' || pokemon.type.includes(pokeType));
		return (
			<main className="pokedex">
				<Pokemon key={ filteredPokemons[pokeIndex].id } pokemon={ filteredPokemons[pokeIndex] } />
				<section className="btn-types-container">
					{types.map((type) => <Button key={ type } btnTxt={ type } btnClass="btn-filter-type" onclick={ () => this.filterByType(type) }/>)}					
					<Button btnTxt="All" btnClass="btn-filter-type" onclick={ () => this.filterByType("All") }/>
				</section>
				<section className="btn-next-poke-container">
					<Button btnTxt="Next pokemon" btnClass="btn-next-poke" onclick={ () => this.goToNextPokemon(filteredPokemons) } desabled={ filteredPokemons.length <= 1 } />
				</section>
			</main>
		);
	}
}

export default Pokedex;