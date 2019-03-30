import React, { Component } from 'react';
import './App.css';
import Bio from './bio'
import copy from './resources/copy'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Bio bio={copy.bio}/>
        </main>
      </div>
    );
  }
}

export default App;
