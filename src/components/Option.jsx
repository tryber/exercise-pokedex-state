import React from 'react';

class Option extends React.Component {
  render() {
    const { listType } =this.props;
    return (
      <select>
        {listType.map(type => (<option value={type}>{type}</option>))}
      </select>
    );
  }
}

export default Option;
