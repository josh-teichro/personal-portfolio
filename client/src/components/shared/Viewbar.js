import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  appbar: {
  },
  tabs: {
      minHeight: 40,
  },
  tab: {
    flex: 3,
    minHeight: 40,
    fontWeight: 300,
    fontSize: '0.85rem',
    letterSpacing: '0.09em',
  },
}))

export default ({view, onChange}) => {
  const views = ['home', 'about', 'experience', 'projects', 'education', 'contact']
  const theme = useTheme()
  const classes = useStyles(theme)

	const goToView = (view) => {
		if (window.location !== "/"+view ) {
			window.location = "/"+view
		}
	}

  return (
    <AppBar className={classes.appbar} position="static" elevation={4}>
      <Tabs
        className={classes.tabs}
        value={views.indexOf(view)}
        onChange={(e, index) => goToView(views[index])}
        centered
      >
        {views.map(view =>
          <Tab className={classes.tab} label={view} key={view}/>
        )}
      </Tabs>
    </AppBar>
  )
}
