import React, { Component } from 'react';
import Pokemon from './Pokemon';


class Pokedex extends Component {
  render() {
    const { Pokedex } = this.props;
    return (
      {Pokedex.map((value)=> ({
        <Pokemon pok={value}/>
      }))}
      
    )
  }
}

export default Pokedex;
