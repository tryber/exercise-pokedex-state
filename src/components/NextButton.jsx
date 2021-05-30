import React from 'react';

class NextButton extends React.Component {


  render() {
    const { next } = this.props;
    return (
    <div>
      <button onClick={next}>Next</button>
    </div>
    )}
}

export default NextButton;