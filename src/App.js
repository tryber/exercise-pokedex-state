import React from 'react';
import Header from './components/Header.js';
import Pokedex from './components/Pokedex.js';
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
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
