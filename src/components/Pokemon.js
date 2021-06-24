import React from 'react';
import Button from './Button';
import TypeButtons from './TypeButtons';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.changePokemon = this.changePokemon.bind(this);
    this.pokemonsPerTypes = this.pokemonsPerTypes.bind(this);
    this.changeType = this.changeType.bind(this);
    this.arrayFromType = this.arrayFromType.bind(this);
    this.actualPokemon = this.actualPokemon.bind(this);
    this.nextButtonClass = this.nextButtonClass.bind(this);
  
    this.types = props.pokemons.reduce((acc, { type }) => {
      if (!acc.includes(type)) { acc.push(type); }
      return acc;
    }, []);
  
    this.state = {
      pokemonIndex: 0,
      pokemonType: 'All',
    }
  }

  changePokemon(array) {
    if (this.state.pokemonIndex < array.length - 1) {
      this.setState({ pokemonIndex: this.state.pokemonIndex + 1 });
    } else {
      this.setState({ pokemonIndex: 0 });
    }
  }

  pokemonsPerTypes(pokemonType) {
    const { pokemons } = this.props;
    if (this.types.includes(pokemonType)) {
      return pokemons.filter(({ type }) => type === pokemonType);
    } else {
      return pokemons;
    }
  }

  changeType(type) {
    this.setState({ pokemonType: type });
  }

  arrayFromType() {

    return this.pokemonsPerTypes(this.state.pokemonType);
  }

  actualPokemon() {
    if (this.state.pokemonIndex >= this.arrayFromType().length){
      return this.arrayFromType()[0];
    } else {
      return this.arrayFromType()[this.state.pokemonIndex];
    }
  }

  nextButtonClass(pokemon) {
    if (pokemon.length <= 1) {
      return 'invalidButton';
    }
    return 'nextButton';
  }

  render() {
    const pokArr = this.arrayFromType()
    const pokemon = this.actualPokemon();
    const { name, type, averageWeight, image } = pokemon;

    const buttonClass = this.nextButtonClass(pokArr);

    return (
      <main>
        <section className="pokemon">
          <div>
            <p>{ name }</p>
            <p>{ type }</p>
            <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </section>
        <section className="typeButtonContainer">
          <Button key={ 'All' } text={ 'All' } click={ () => this.changeType('All') } />
          <TypeButtons types={ this.types } click={ this.changeType } className={ this.types }/>
        </section>
        <Button text={ 'Next Pokemon' } className={ buttonClass }
          click={ () => { this.changePokemon(pokArr) }}/>
      </main>
    );
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Pokemon;