import React from 'react';

import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'

import { Container } from './styles';

class Button extends React.Component {
  render() {
    const isLeft = this.props.children === 'Anterior';
    const isRight = this.props.children === 'Próximo';
    return (
      <Container>
        <button 
          onClick={this.props.callback}
          disabled={this.props.disabled}
        >
          {isLeft && <RiArrowLeftSFill />}
          {this.props.children}
          {isRight && <RiArrowRightSFill />}
        </button>
      </Container>
    );
  }
}

export default Button;