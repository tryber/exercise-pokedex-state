import React from 'react';
import './App.css';
import Data from './data';
import Pokedex from './';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={ Data }/>
    </div>
  );
}

export default App;
