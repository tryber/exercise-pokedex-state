import React, { Component } from 'react'

class Button extends Component {
    render() {
        const { text, click } = this.props
        return(
            <button onClick={ click }>{ text }</button>
        )
    }
}

export default Button