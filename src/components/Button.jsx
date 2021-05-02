import React from 'react';

class Button extends React.Component {
  render() {
    return (
    <button 
      name={this.props.type} 
      onClick={this.props.callbackFilter}
    >
      {this.props.type}
    </button>
    )
  }
}

export default Button;