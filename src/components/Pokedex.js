import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
	constructor() {
		super();
		this.state = {
			pokemonIndex: 0,
			filteredType: 'all',
		};
		this.nextButton = this.nextButton.bind(this);
		this.filterPokemon = this.filterPokemon.bind(this);
	}

	nextButton({ length }) {
		this.setState((state) => {
			const { pokemonIndex } = this.state;
			if (pokemonIndex === length -1) {
				return ({ pokemonIndex: 0 })
			}
			return ({ pokemonIndex: state.pokemonIndex + 1 });
		}
		);
	}

	filterPokemon(type) {
		this.setState({ filteredType: type })
	}
	

	render() {
		const { pokemons, types } = this.props; 
		const { pokemonIndex, filteredType } = this.state;
		const filteredPokemons = pokemons.filter((pokemon) => this.filteredType === 'all' || pokemon.type.includes(filteredType));
		console.log(filteredType);

		return (
				<div className="pokedex">
					<Pokemon key={ filteredPokemons[pokemonIndex].id } pokemon={ filteredPokemons[pokemonIndex] } />

					<section>
						{types.map((type) => <Button 
							key={type}
							btnText={type}
							onClick={() => this.filterPokemon(type)} /> 
						)}
						<Button 
							btnText="all" 
							onClick={() => this.filterPokemon("all")}
							/>  
					</section>

					<section>
						<Button 
							btnText="Next Pokemon"
							onclick={()=> this.nextButton(filteredPokemons)}
							desabled={filteredPokemons.length <= 1} />
					</section>

				</div>
		);
	}
}

export default Pokedex;