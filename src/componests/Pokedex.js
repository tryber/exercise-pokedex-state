import Pokemon from './Pokemon';
import React, { Component } from 'react';


class Pokedex extends Component {
  render() {
    return (
      <div>
        {this.props.Pokedex.map((value)=> <Pokemon pok={value}/>)}
      </div>
      
    )
  }
}

export default Pokedex;
