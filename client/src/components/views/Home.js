import React, { Component } from 'react'
import clsx from 'clsx'
import { TextBox, Title } from '../shared'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: 782,
    margin: -theme.spacing(1),
  },
  contentItem: {
    margin: theme.spacing(1),
  },
  contentImage: {
    display: 'flex',
    flex: 'initial',
    width: 250,
    alignSelf: 'flex-end',
  },
  contentTextBox: {
    flex: '10 1 auto',
    height: 208,
  },
  contentItemFullWidth: {
    width: '100%',
  },
  contentItemHalfWidth: {
    width: '50%',
  },
})

const Image = withStyles(styles, { withTheme: true })(({src, classes, ignoreTop, ...other}) => {
  return (
    <Paper
      className={clsx(classes.contentItem, classes.contentImage)}
      elevation={4}
      style={{
        height: ignoreTop ? 10 : 300,
        alignItems: ignoreTop ? 'flex-end' : 'flex-start'
      }}
      {...other}
    >
      <img style={{width: '100%', height: ignoreTop ? 300 : '100%'}} src={src} alt=""/>
    </Paper>
  )
})

class Home extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" color="primary"/>
          <Image src="profile-pic.jpg"/>
          <TextBox
            className={clsx(classes.contentItem, classes.contentTextBox, classes.contentItemHalfWidth)}
            title="About"
            body="Graduating computer science specialist at the University of Toronto, seeking a full-time time software development job in software development. Currently looking in the Toronto, Canada area, but open to opportunities elsewhere, including in the United States..."
            theme='themeA'
          />
          <TextBox
            className={clsx(classes.contentItem, classes.contentTextBox, classes.contentItemHalfWidth)}
            title="Experience"
            body="Most recent employment was with Magna Electronics in Brampton, ON, where he worked as a software engineering intern, but quickly became a key piece in a patent producing project..."
            theme='themeA'
          />
          <Image src="profile-pic.jpg" ignoreTop/>
          <TextBox
            className={clsx(classes.contentItem, classes.contentTextBox, classes.contentItemFullWidth)}
            title="Projects"
            body="Joshua’s projects include a variety of team and solo projects. His most recent project was creating this website, however he has also partaken in projects related to graphics, game design, and computer vision. Joshua is passionate about each one of his projects, and will always put his best foot forward to ensure that whatever he is doing becomes a success..."
            theme='themeB'
          />
          <Image src="profile-pic.jpg"/>
          <TextBox
            className={clsx(classes.contentItem, classes.contentTextBox, classes.contentItemHalfWidth)}
            title="Education"
            body="Joshua just completed his post-secondary education at the University of Toronto in ON, Canada. The University of Toronto is a globally top 25 ranked university and is the largest university in Canada..."
            theme='themeA'
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Home)
