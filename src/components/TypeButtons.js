import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class TypeButtons extends React.Component {
  render() {
    const { types, click } = this.props;
    return types.map((type) =>
      <Button key={ type } className={ type }text={ type } click={ () => click(type) }/>);
  }
}

TypeButtons.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  click: PropTypes.func.isRequired,
}

export default TypeButtons;