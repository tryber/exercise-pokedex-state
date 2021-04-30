import React from 'react';

import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
	constructor(props) {
		super(props);
		const { pokemons } = this.props;
		
		this.state = {
			pokemons: pokemons,
			index: 0
		}

		this.types = pokemons.map(pokemon => pokemon.type)
			.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);

		this.handleNext = this.handleNext.bind(this);
		this.handleType = this.handleType.bind(this);
	}

	handleNext() {
		this.setState(previousState => {
			const { index, pokemons } = previousState;
			return { index: (index + 1) % pokemons.length }
		});
	}

	handleType(event) {
		const { target } = event;
		const { textContent: filter } = target;
		const { pokemons } = this.props;
		this.setState({ 
			pokemons: pokemons.filter(pokemon => filter === 'All' || pokemon.type === filter),
			index: 0
		});
	}

	render() {
		const { index, pokemons } = this.state;
		
		return (
			<>
				<div className="pokedex">
					{ <Pokemon key={pokemons[index].id} pokemon={pokemons[index]} /> }	
				</div>

				<Button
					onClick={ this.handleNext }
					disabled={ pokemons.length < 2 }
				>
					Next
				</Button>

				<Button key="all" onClick={ this.handleType }>All</Button>
				{ this.types.map(type => 
					<Button key={ type } onClick={ this.handleType }>{ type }</Button> )}
			</>
		);
	}
}

export default Pokedex;
