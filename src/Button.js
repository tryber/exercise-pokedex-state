import React from 'react';

class Button extends React.Component {
  render() {
    const { onclick, btnTxt } = this.props;
    return (
      <button type="button" onClick={ onclick }>
        {btnTxt}
      </button>
    );
  }
}

export default Button;
