import React, { Component } from 'react';

class ButtonType extends Component {
  typePokemon() {
    let { setPokemons, setIndex, index } = this.props.values;
    index = 0;
    setIndex(index);
    setPokemons(this.props.type);
  }

  render() {
    return (
      <button className="row-btn-types" onClick={this.typePokemon.bind(this)}>
        {this.props.type || 'All' }
      </button>
    );
  }
}

export default ButtonType;
