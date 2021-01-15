import React from 'react';

import Button from '../Button';

class ButtonsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokeTypes: Array.from(new Set(this.props.pokemons.map(pokemon => pokemon.type))),
    };
  }
  render() {
    return (
      <>
        <Button
          callback={this.props.handleTypeChange}
        >
          All
        </Button>
        {this.state.pokeTypes.map(type => (
          <Button 
            key={type}
            callback={this.props.handleTypeChange}
          >
            {type}
          </Button>
        ))}
      </>
    );
  }
}

export default ButtonsContainer;