import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import './App.css';
import Bio from './bio'
import {copy} from './resources/copy'
import Project from './project'
import Contact from './contact'

class App extends Component { 
  // constructor(props) {
  //   super(props)
  //   this.bioMarker = React.createRef()
  //   this.projectMarker = React.createRef()
  //   this.contactMarker = React.createRef()
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => scrollToComponent(this.bio, { offset: 0, align: 'top', duration: 1200})}>About</button>
          <button onClick={() => scrollToComponent(this.projects, { offset: 0, align: 'top', duration: 1200})}>Projects</button>
          <button onClick={() => scrollToComponent(this.contact, { offset: 0, align: 'top', duration: 1200})}>Contact</button>
        </header>
        <main> 
          <div className='bio' ref={(section) => { this.bio = section }}>
            <Bio bio={copy.bio} headshot={copy.headShot}/>
          </div>
          <div className='projects' ref={(section) => { this.projects = section }}>
            <h2>Projects</h2>
            <Project info={copy.projects.singleStep}/>
            <Project info={copy.projects.recipeIterator}/>
            <Project info={copy.projects.surrealImageQuoteMachine}/>
          </div>
          <div className='contact' ref={(section) => { this.contact = section }}>
            <Contact />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
