import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { click, text, className } = this.props;
    return (
      <button className={ "button " + className } onClick={ click }>{ text }</button>
    );
  }
}

Button.defaultPropTypes = {
  className: 'button',
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Button;