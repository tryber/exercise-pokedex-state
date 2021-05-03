import React from 'react';

class Button extends React.Component {
  render() {
    const { name, type, value, handleClick, disable } = this.props;
    return (
      <button  disabled={disable} name={type} value={value} onClick={handleClick}>{name}</button>
    );
  }
}

export default Button;
