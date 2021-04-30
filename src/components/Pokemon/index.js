import React from 'react';

import { Container } from './styles';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <Container>
                <section>
                    <p>Nome: {name} </p>
                    <p>Tipo: {type} </p>
                    <p> {`Peso médio: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </section>
                <div>
                    <img src={image} alt={`${name} sprite`} />
                </div>
            </Container>
        );
    }
}

export default Pokemon;