import React, { Component } from 'react'
import ListView from './ListView'
import { education } from '../../data/education'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
		backgroundColor: theme.palette.background.default,
  },
})

class Education extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <ListView
          title="Joshua Teichroeb"
          subtitle="Education"
          items={education}
        />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Education)
