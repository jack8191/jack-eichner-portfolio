import React, { Component } from 'react';
import './App.css';
import Bio from './bio'
import headshot from './resources/headshot.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Bio headShot={headshot}/>
        </main>
      </div>
    );
  }
}

export default App;
