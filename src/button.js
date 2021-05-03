import React from 'react';
import Pokemons from './data'

class Button extends React.Component {
    selectTypePokemon(typePoke) {
        this.setState({
            typePokemon: Pokemons.filter((item) => item.type === typePoke),
            selectedPokemon: 0
        })
    }
    render() {
        const { item } = this.props
        return <button className='button-filter' key={item.name} onClick={() => this.selectTypePokemon(item.type)}  >{item.type}</button>
    }
}

export default Button;