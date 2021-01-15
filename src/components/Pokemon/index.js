import React from 'react';

import { Container } from './styles';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <Container>
                <section>
                    <p> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </section>
                <div>
                    <img src={image} alt={`${name} sprite`} />
                </div>
            </Container>
        );
    }
}

export default Pokemon;