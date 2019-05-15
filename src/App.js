import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import './App.css';
import Bio from './bio'
import {copy} from './resources/copy'
import Project from './project'
import Contact from './contact'
import TimeMachine from './TimeMachine'
import Greeting from './greeting'

class App extends Component { 
  constructor(props) {
    super(props)
    this.setState = this.setState.bind(this)
    this.state = {
      time: '',
      view: 'landing'
    }
  }
  handleLandingClick(e) {
    e.preventDefault()
    this.setState({
      time: 'present',
      view: ''
    })
  }
  handleTimeMachine(e) {
    e.preventDefault()
    if (this.state.time === 'present') {
      this.setState({
        time: 'past'
      })
      window.scrollTo(0, 0)
    }
    else if(this.state.time === 'past') {
      this.setState({
        time: 'present'
      })
      window.scrollTo(0, 0)
    }
  }
  render() {
    if (this.state.view === 'landing') {
      return (
        <div className="App">
          <Greeting bio={copy.bio} onClick={e => this.handleLandingClick(e)} headshot={copy.headShot}/>
          <section className='contact' ref={(section) => { this.contact = section }}>
              <Contact />
          </section>
        </div>
      )
    }
    
    else if(this.state.time === 'present') {
        return (
        <div className="App">
          <header className="App-header">
            <button onClick={() => scrollToComponent(this.bio, { offset: 0, align: 'top', duration: 1200})}>About</button>
            <button onClick={() => scrollToComponent(this.contact, { offset: 0, align: 'top', duration: 1200})}>Contact</button>
            <button onClick={() => scrollToComponent(this.projects, { offset: 0, align: 'top', duration: 1200})}>Projects</button>
          </header>
          <main> 
            <div className='bio' ref={(section) => { this.bio = section }}>
              <Bio bio={copy.bio} headshot={copy.headShot}/>
            </div>
            <section className='contact' ref={(section) => { this.contact = section }}>
              <Contact />
            </section>
            <div className='projects' ref={(section) => { this.projects = section }}>
              <h2>Projects</h2>
              <section className="test-credentails">
                <h3>Where relevant, a demo account may be accessed with</h3>
                <p>Username: test</p>
                <p>Password: testpassword</p>
              </section>  
              <Project info={copy.projects.singleStep}/>
              <Project info={copy.projects.recipeIterator}/>
              <Project info={copy.projects.surrealImageQuoteMachine}/>
            </div>
          </main>
          <footer>
            <Contact />            
            <button className="time-machine-control" onClick={e => this.handleTimeMachine(e)}>Travel into the Past</button>
          </footer>
        </div>
      );
    }
    else if (this.state.time === 'past') {
      return (
        <div className='past-app'>
          <main> 
          <button className="time-machine-control" onClick={e => this.handleTimeMachine(e)}>Back to the Present Day</button>
          <h2>Man it's boring in the present, right? Let's let Jack at age 12 take over!</h2>
          <TimeMachine />
            <div className='contact' ref={(section) => { this.contact = section }}>
              <Contact />
            </div>
          </main>
        </div>
      )
    }
  }
}

export default App;
