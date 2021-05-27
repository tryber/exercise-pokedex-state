import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    const { id, image, type, name, moreInfo, averageWeight } = this.props.pok;
    return (
      <div>
        <div>
          <h1>{name}</h1>
          <img src={image} alt={name} />
          <p>{id}</p>
          <p>{type}</p>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
          <p>{moreInfo}</p>
        </div>
      </div>
    )
  }
}
export default Pokemon;