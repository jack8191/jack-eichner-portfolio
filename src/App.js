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
          <i className="fas fa-compass fa-2x"></i>
          <button onClick={() => scrollToComponent(this.bio, { offset: 0, align: 'top', duration: 1200})}>About</button>
          <button onClick={() => scrollToComponent(this.projects, { offset: 0, align: 'top', duration: 1200})}>Projects</button>
          <button onClick={() => scrollToComponent(this.contact, { offset: 0, align: 'top', duration: 1200})}>Contact</button>
        </header>
        <main> 
          <div className='bio' ref={(section) => { this.bio = section }}>
            <Bio bio={copy.bio} headshot={copy.headShot}/>
          </div>
          <div className='projects' ref={(section) => { this.projects = section }}>
            <i className="fas fa-archway fa-6x"></i>
            <h2>Projects</h2>
            <h3>Where relevant, a demo account may be accessed with</h3>
            <p className="test-credentails">Username: test</p>
            <p className="test-credentails">Password: testpassword</p>
            <Project info={copy.projects.singleStep}/>
            <i className="fas fa-feather-alt fa-5x"></i>
            <Project info={copy.projects.recipeIterator}/>
            <i className="fas fa-bolt fa-5x"></i>
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
