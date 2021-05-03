import React from 'react';
import './button.css';

class Button extends React.Component {
  render() {
    const { btnClass, name, type, value, handleClick, disable } = this.props;
    return (
      <button  className={btnClass} disabled={disable} name={type} value={value} onClick={handleClick}>{name}</button>
    );
  }
}

export default Button;
