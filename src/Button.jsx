import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onClick, disabled } = this.props
    return (
      <button onClick={ onClick } disabled={ disabled } className='poke-button'>
        { this.props.children }
      </button>
    );
  }
}
 
export default Button;
