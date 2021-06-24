import React from 'react';
import Button from './Button';
import TypeButtons from './TypeButtons';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.changePokemon = this.changePokemon.bind(this);
    this.changeType = this.changeType.bind(this);
  
    this.types = props.pokemons
      .reduce((acc, { type }) => {
        if (!acc.includes(type)) { acc.push(type); }
        return acc;
      }, []);
  
    this.state = {
      pokemonIndex: 0,
      pokemonType: 'all',
    }
  }

  changePokemon(array) {
    const { state } = this;
    const { pokemonIndex } = state;

    if (pokemonIndex < array.length - 1) {
      this.setState({ pokemonIndex: pokemonIndex + 1 });
    } else {
      this.setState({ pokemonIndex: 0 });
    }
  }

  pokemonsPerTypes(pokemonType) {
    const { pokemons } = this.props;
    const { types } = this;
    if (types.includes(pokemonType)) {
      return pokemons.filter(({ type }) => type === pokemonType);
    } else {
      return pokemons;
    }
  }

  changeType(type) {
    this.setState({ pokemonType: type });
  }

  arrayFromType() {
    const { pokemonType } = this.state;
    return this.pokemonsPerTypes(pokemonType);
  }

  actualPokemon() {
    const { pokemonIndex } = this.state

    if (pokemonIndex >= this.arrayFromType().length) {
      return this.arrayFromType()[0];
    }
    return this.arrayFromType()[pokemonIndex];
  }

  nextButtonClass(pokemon) {
    if (pokemon.length <= 1) {
      return 'invalidButton';
    }
    return 'nextButton';
  }

  render() {
    const { types } = this;

    const pokArr = this.arrayFromType()
    const pokemon = this.actualPokemon();
    const { name, type, averageWeight, image } = pokemon;
    const { value, measurementUnit } = averageWeight

    const buttonClass = this.nextButtonClass(pokArr);

    return (
      <main>
        <section className="pokemon">
          <div>
            <p>{ name }</p>
            <p>{ type }</p>
            <p>{`Average weight: ${value} ${measurementUnit}`}</p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </section>
        <section className="typeButtonContainer">
          <Button key={ 'all' } text={ 'all' } click={ () => this.changeType('all') } />
          <TypeButtons types={ types } click={ this.changeType } className={ types } />
        </section>
        <section>
          <Button text={ 'Next Pokemon' } className={ buttonClass }
            click={ () => { this.changePokemon(pokArr) }} />
        </section>
      </main>
    );
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Pokemon;