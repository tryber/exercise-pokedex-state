import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemonIndex: 0,
			// filteredType: 'all',
		};
		this.nextButton = this.nextButton.bind(this);
	}

	// filterPokemons(filteredType) {
	// 	this.setState({

	// 	})
	// }
	
	nextButton(numberOfPokemons) {
		this.setState(state => ({
			pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
		}));
	}

	render() {
		return (
				<div className="pokedex">
					<button onClick={this.nextButton} disabled={ this.props.pokemons.length <= 1 }>Próximo Pokemon</button>
						{/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
						{/* <Pokemon key={this.props.pokemons[0].id} pokemon={this.props.pokemons[0]} /> */}
						{/* {this.props.pokemons.forEach(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
				</div>
		);
	}
}

export default Pokedex;