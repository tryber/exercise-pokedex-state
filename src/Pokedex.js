import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
	constructor() {
		super();
		this.state = {
			pokeIndex: 0,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick({ length }) {
		this.setState(
			(state) => {
				const { pokeIndex } = this.state;
				if (pokeIndex === length - 1) return ({ pokeIndex: 0 })
				return ({ pokeIndex: state.pokeIndex + 1 });
			},
			() => {
				
			});
	}

	render() {
		const { pokemons } = this.props;
		const { pokeIndex } = this.state;
		return (
			<div className="pokedex">
					<Pokemon key={ pokemons[pokeIndex].id } pokemon={ pokemons[pokeIndex] } />
					<Button onclick={ () => this.handleClick(pokemons) }/>
			</div>
		);
	}
}

export default Pokedex;