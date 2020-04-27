import React, { Component } from 'react'
import {Viewbar} from './shared'
import {Home, About, Experience, Projects, Education, Contact} from './views'

import './App.css';

class App extends Component {
  state = {
    view: "home" // ['home', 'about', 'experience', 'projects', 'education', 'contact']
  }

  getView = () => {
    const {view} = this.state

    switch(view) {
      case "home":
        return <Home/>
      case "about":
        return <About/>
      case "experience":
        return <Experience/>
      case "projects":
        return <Projects/>
      case "education":
        return <Education/>
      case "contact":
        return <Contact/>
    }
  }

  render() {
    const {view} = this.state

    return (
      <div className="App">
        <Viewbar view={view} onChange={view => this.setState({view})}/>
        {this.getView()}
      </div>
    )
  }
}

export default App
