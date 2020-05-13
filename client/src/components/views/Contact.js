import React, { Component } from 'react'
import clsx from 'clsx'
import { Title, TextBox, ContactInfo } from '../shared'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: 1024, //932, //1177,
  },
  contentLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '30%',
  },
  contentRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '70%',
  },
  contentItem: {
    margin: theme.spacing(1),
    width: '100%',
  },
  contentImage: {
    position: 'relative',
    flex: 'initial',
    width: '100%',
    paddingTop: '118%', // aspect ratio
  },
  contentTextBox: {
    flex: '10 1 auto',
  },
})

const Image = withStyles(styles, { withTheme: true })(({src, classes, ...other}) => {
  const styles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
  return (
    <Paper
      className={clsx(classes.contentItem, classes.contentImage)}
      square
      elevation={4}
      {...other}
    >
      <img style={styles} src={src} alt={src}/>
    </Paper>
  )
})

class Contact extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" subtitle="Contact" color="primary"/>
          <div className={classes.contentLeft}>
            <Image src="profile-pic.jpg"/>
          </div>
          <div className={classes.contentRight}>
            <ContactInfo className={clsx(classes.contentItem, classes.contentTextBox)}/>
            <TextBox
              className={clsx(classes.contentItem, classes.contentTextBox)}
              body=" * Please contact by email before calling to set up a time."
              theme="main"
              variant="none"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Contact)
