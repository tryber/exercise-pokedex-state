import React from 'react';

class Button extends React.Component {
  render() {
    const { type, value, handleClick } = this.props;
    return (
      <button name={type} value={value} onClick={handleClick}>{type}</button>
    );
  }
}

export default Button;
