import React, { Component } from 'react'
import ListView from './ListView'
import { experience } from '../../data/experience'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
})

class Experience extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <ListView
          title="Joshua Teichroeb"
          subtitle="Experience"
          items={experience}
        />
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Experience)
