import React from 'react';

import Button from '../Button';

import { Container } from './styles';

class ButtonsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeTypes: Array.from(new Set(this.props.pokemons.map(pokemon => pokemon.type))),
    };
  }
  render() {
    return (
      <Container>
        {this.state.pokeTypes.map(type => (
          <Button 
            key={type}
            callback={this.props.handleTypeChange}
            className="type"
          >
            {type}
          </Button>
        ))}
      </Container>
    );
  }
}

export default ButtonsContainer;