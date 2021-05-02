import React from 'react';

class Button extends React.Component {
  render() {
    const { name, value, onClick } = this.props;
    return (
      <button name={name} value={value} onClick={onClick}>{name}</button>
    );
  }
}

export default Button;
