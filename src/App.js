import React from 'react';

import Pokedex from './components/Pokedex';

import pokemons from './data';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <div className="App">
        <Pokedex pokemons={pokemons} />
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;