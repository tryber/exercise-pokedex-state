import React from 'react'
import Pokedex from './components/Pokedex'
import './App.css';
import './components/pokedex.css'

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <div className='pokedex'>
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
