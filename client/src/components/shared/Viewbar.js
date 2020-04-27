import React, { Component } from 'react'
import {AppBar, Toolbar, Typography, Paper, Tabs, Tab} from '@material-ui/core'

export default ({view, onChange}) => {
  const views = ['home', 'about', 'experience', 'projects', 'education', 'contact']

  return (
    <AppBar position="static">
      <Tabs
        value={views.indexOf(view)}
        onChange={(e, index) => onChange(views[index])}
        centered
      >
        {views.map(view =>
          <Tab label={view} />
        )}
      </Tabs>
    </AppBar>
  )
}
