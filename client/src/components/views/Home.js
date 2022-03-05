import React, { Component } from 'react'
import clsx from 'clsx'
import { Splash, TextBox, Title, ContactInfo } from '../shared'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: 782,
    margin: -theme.spacing(0),
  },
  contentItem: {
    margin: theme.spacing(0),
  },
  contentImage: {
    position: 'relative',
    display: 'flex',
    flex: 'initial',
    width: 250,
    alignSelf: 'flex-end',
  },
  contentTextBox: {
    flex: '10 1 auto',
	  height: 208,
	},
  contentTextBoxVariantB: {
    marginTop: theme.spacing(0)*2,
	},
	contentLink: {
    '&:hover': {
			cursor: 'pointer',
			opacity: '80%',
    }
  },
  contentItemFullWidth: {
    width: '100%',
  },
  contentItemHalfWidth: {
    width: '50%',
  },
})

const Image = withStyles(styles, { withTheme: true })(({src, classes, ignoreTop, ...other}) => {
  const styles = {
    width: '100%',
    height: ignoreTop ? 300 : '100%',
    objectFit: 'cover',
  }

  return (
    <Paper
      className={clsx(classes.contentItem, classes.contentImage)}
      square
      elevation={4}
      style={{
        height: ignoreTop ? 10 : 300,
        alignItems: ignoreTop ? 'flex-end' : 'flex-start'
      }}
      {...other}
    >
      <img style={styles} src={src} alt={src}/>
    </Paper>
  )
})

class Home extends Component {
	state = {
		splashVisible: this.props.splash
	}

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
				<Splash visible={this.state.splashVisible}>
					Welcome to My Portfolio!
				</Splash>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" color="primary"/>
          <Image src="profile-pic.jpg"/>
          <TextBox
            className={clsx(classes.contentItem, classes.contentTextBox, classes.contentItemHalfWidth, classes.contentLink)}
            title="About"
            body="This is Joshua's second year working full-time in the field of software development after graduating from the University of Toronto. Joshua is a focused computer scientist who loves what he does and is excited to continue to develop his knowledge and skills even now after completing his post-secondary education..."
            theme='themeA'
            variant='A'
            onClick={() => this.goToView("about")}
          />
          <TextBox
            className={clsx(classes.contentItem, classes.contentTextBox, classes.contentItemHalfWidth, classes.contentLink)}
            title="Experience"
            body="Currently, Joshua is working as a Web Developer / Programmer with Vincent Design in Winnipeg, while doing freelance game dev work on the side. However, he is also experienced in computer vision, having worked a 16 month internship for Magna Electronics where he was a key piece in developing new software for use in self-driving vehicles..."
            theme='themeA'
            variant='A'
            onClick={() => this.goToView("experience")}
          />
          <Image src={require("../../images/laptop.jpg")} ignoreTop/>
          <TextBox
            className={clsx(classes.contentItem, classes.contentTextBox, classes.contentTextBoxVariantB, classes.contentItemFullWidth, classes.contentLink)}
            title="Projects"
            body="Joshua’s projects include a variety of team and solo projects. He is currently working on building a game engine from scratch, however he has also partaken in projects related to web and app development, graphics, game design, and computer vision. Joshua is passionate about each one of his projects, and will always put his best foot forward to ensure that whatever he is doing becomes a success..."
            theme='themeB'
            variant='B'
            onClick={() => this.goToView("projects")}
          />
          <Image src={require("../../images/uoft_grey.jpg")}/>
          <TextBox
            className={clsx(classes.contentItem, classes.contentTextBox, classes.contentItemHalfWidth, classes.contentLink)}
            title="Education"
            body="Joshua just completed his post-secondary education at the University of Toronto in ON, Canada, receiving an Honours Bachelor of Science with High Distinction, while specializing in Computer Science..."
            theme='themeA'
            variant='A'
            onClick={() => this.goToView("education")}
          />
          <ContactInfo className={clsx(classes.contentItem, classes.contentTextBox, classes.contentItemHalfWidth)}/>
        </div>
      </div>
    )
  }

	goToView = (view) => {
		window.location = "/"+view
	}
}

export default withStyles(styles, { withTheme: true })(Home)
