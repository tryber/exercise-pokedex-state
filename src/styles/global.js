import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/pokemonBackground.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
    font-family: 'Press Start 2P', cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  button:hover {
    cursor: pointer;
  }

  .App {
    text-align: center;
  }
`;