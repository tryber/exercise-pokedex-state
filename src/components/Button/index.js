import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button 
        onClick={this.props.callback}
        disabled={this.props.disabled}
      >{this.props.children}</button>
    );
  }
}

export default Button;