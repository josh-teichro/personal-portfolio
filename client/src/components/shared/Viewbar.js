import React from 'react'
import {AppBar, Tabs, Tab} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledAppBar = withStyles({
  root: {
    backgroundColor: 'var(--darkgrey)',
    color: 'white',
    height: 40,
    boxShadow: '0 4px 0px 0px rgba(0, 0, 0, .25)',
  },
})(AppBar)

const StyledTabs = withStyles({
  root: {
    minHeight: 40,
  },
  indicator: {
    color: 'white',
    backgroundColor: 'white',
  },
})(Tabs)

const StyledTab = withStyles({
  root: {
    minHeight: 40,
    flex: 3,
  },
})(Tab)

export default ({classes, view, onChange}) => {
  const views = ['home', 'about', 'experience', 'projects', 'education', 'contact']

  return (
    <StyledAppBar position="static">
      <StyledTabs
        value={views.indexOf(view)}
        onChange={(e, index) => onChange(views[index])}
        centered
      >
        {views.map(view =>
          <StyledTab label={view} key={view}/>
        )}
      </StyledTabs>
    </StyledAppBar>
  )
}
