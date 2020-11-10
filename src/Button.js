import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor() {
    super();
    this.renderChildren = this.renderChildren.bind(this);
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        onClick: (() => this.props.filterFunction(child.type))
      })
    })
  }


  render() {
    return ( 
      <div className="filterButton">
        {this.renderChildren()}
      </div>
    );
  }

}

export default Button;