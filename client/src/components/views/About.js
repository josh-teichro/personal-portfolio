import React, { Component } from 'react'
import clsx from 'clsx'
import { TextBox, Title, ContactInfo } from '../shared'
import { about } from '../../data/about'
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '70%',
  },
  contentItem: {
    margin: theme.spacing(1),
  },
  contentImage: {
    position: 'relative',
    flex: 'initial',
    width: '100%',
    paddingTop: '50%', // aspect ratio
  },
  contentTextBox: {
    flex: '10 1 auto',
  },
  contentIntro: {
    width: '100%',
  },
  contentInterests: {
    width: '35%',
  },
  contentSkills: {
    width: '55%',
  },
  contentSkillsBox: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  contentSkillsBoxColumn: {
    marginTop: 0,

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

class About extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" subtitle="About" color="primary"/>
          <div className={classes.contentLeft}>
            <Image src="profile-pic.jpg"/>
            <ContactInfo className={clsx(classes.contentItem, classes.contentTextBox)}/>
          </div>
          <div className={classes.contentRight}>
            <TextBox
              className={clsx(classes.contentItem, classes.contentTextBox, classes.contentIntro)}
              title="Introduction"
              body={about.intro}
              theme='themeC'
              variant='C'
            />
            <TextBox
              className={clsx(classes.contentItem, classes.contentTextBox, classes.contentInterests)}
              title="Interests"
              body={
                <ul style={{marginTop:0}}>
                  {about.interests.map((interest, i) => (
                    <li key={i}> {interest} </li>
                  ))}
                </ul>
              }
              theme='themeB'
              variant='B'
            />
            <TextBox
              className={clsx(classes.contentItem, classes.contentTextBox, classes.contentSkills)}
              title="Skills"
              body=
              <div className={classes.contentSkillsBox}>
                {about.skills.cols.map((col, i) => (
                      <ul key={i} className={classes.contentSkillsBoxColumn} style={{width: `${100 / about.skills.cols.length}%` }}>
                        {col.map((skill, j) => (
                          <li key={j}> {skill} </li>
                        ))}
                      </ul>
                  ))}
              </div>
              theme='themeB'
              variant='B'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(About)
