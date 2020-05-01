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
      default:
        return <Home/>
    }
  }

  render() {
    const {view} = this.state

    return (
      <ThemeProvider theme={Themes.main}>
        <Viewbar view={view} onChange={view => this.setState({view})}/>
        {this.getView()}
      </ThemeProvider>
    )
  }
}

export default App
