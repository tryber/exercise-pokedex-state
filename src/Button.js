import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick, text } = this.props
    return <button name={ text } onClick={ onClick } className='button'>{text}</button>
  }
}

export default Button;