import React from 'react'

class ChangeButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.nextPoke} className={this.props.isAble ? 'changeButton' : 'changeButton disable'}>Próximo Pokemon</button>
    );
  }
}

export default ChangeButton
