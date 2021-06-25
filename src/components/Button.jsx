import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const { onclick, btnTxt, btnClass, desabled } = this.props;
    return (
      <button className={btnClass} type="button" onClick={ onclick } disabled={ desabled }>
        {btnTxt}
      </button>
    );
  }
}

export default Button;
