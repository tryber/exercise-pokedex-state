import React from 'react';
import filters from './data';

class  FilterButtons extends React.Component {
  render() {
    return (
      <section className="filterConteiner">
          {filters.map((filter, index) => (
            <button key={index} className="filterButton" onClick={this.setFilter}>{filter}</button>
          ))}
      </section> 
    )
  }
}

export default FilterButtons
