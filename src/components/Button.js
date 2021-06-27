import React, { Component } from 'react';

class Button extends Component {
  render() {
   // desestruturando os componentes que p botão vai ter: 
   const { /* btnClass */ btnText, onclick, desabled  } = this.props;
    return (
      <button
        // className={btnClass}
        type="button"
        onClick={onclick}
        disable = {desabled}
      >{btnText}</button>
   ) 
  }
}

export default Button;