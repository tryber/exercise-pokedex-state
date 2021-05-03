import React from 'react';
import Header from './components/Header.js';
import Pokedex from './components/Pokedex.js';
import Button from './components/PokeButton.js';
import Footer from './components/Footer.js';
import './App.css';


class App extends React.Component {
 render() {
    return (
      <div className="App" id="app">
        <header className="App-header">
          <Header />
        </header>

        <main className="App-main">
          <Pokedex />
          <Button />
          <Footer />

        </main>
      </div>
    );
  }
}

export default App;
