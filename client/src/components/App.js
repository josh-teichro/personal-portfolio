import React, { Component, Fragment } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Viewbar, Themes } from './shared'
import { Home, About, Experience, Projects, Education, Contact } from './views'
import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={Themes.main}>
          <Switch>
            <Route exact strict path={["/", "/home"]}>
              <Viewbar view={"home"}/>
              <Home/>
            </Route>
            <Route exact strict path="/about">
              <Viewbar view={"about"}/>
              <About/>
            </Route>
            <Route exact strict path="/experience">
              <Viewbar view={"experience"}/>
              <Experience/>
            </Route>
            <Route exact strict path="/projects">
              <Viewbar view={"projects"}/>
              <Projects/>
            </Route>
            <Route exact strict path="/education">
              <Viewbar view={"education"}/>
              <Education/>
            </Route>
            <Route exact strict path="/contact">
              <Viewbar view={"contact"}/>
              <Contact/>
            </Route>
            <Route path="*" render={this.notFound}/>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    )
  }

  notFound = () => (
    <Fragment>
      <Viewbar view={"none"}/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Typography style={{margin: 16}} variant="h4" color="primary">
          404 Error: Sorry that path doesn't exist!
        </Typography>
      </div>
    </Fragment>
  )
}

export default App
