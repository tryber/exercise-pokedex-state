import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    const { id, image, type, image, moreInfo, averageWeight } = this.props;
    return (
      <div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    )
  }
}
export default Pokemon;