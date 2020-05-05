import React, { Component } from 'react'
import { Viewbar, Themes } from './shared'
import { Home, About, Experience, Projects, Education, Contact } from './views'
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css'

class App extends Component {
  state = {
    view: "home" // ['home', 'about', 'experience', 'projects', 'education', 'contact']
  }

  getView = () => {
    const {view} = this.state

    switch(view) {
      case "home":
        return <Home goToView={this.setView}/>
      case "about":
        return <About goToView={this.setView}/>
      case "experience":
        return <Experience goToView={this.setView}/>
      case "projects":
        return <Projects goToView={this.setView}/>
      case "education":
        return <Education goToView={this.setView}/>
      case "contact":
        return <Contact goToView={this.setView}/>
      default:
        return <Home goToView={this.setView}/>
    }
  }

  setView = (view) => {
    this.setState({view})
    window.scrollTo({
      top: 0,
      //behavior: "smooth"
    });
  }

  render() {
    const {view} = this.state

    return (
      <ThemeProvider theme={Themes.main}>
        <Viewbar view={view} onChange={this.setView}/>
        {this.getView()}
      </ThemeProvider>
    )
  }
}

export default App
