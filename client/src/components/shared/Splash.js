import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { motion } from 'framer-motion'

const styles = theme => ({
	root: {
		position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
		zIndex: 10,
	},
})

class Splash extends Component {
	state = {
		visible: this.props.visible,
		isNone: !this.props.visible,
	}

	onClick = () => {
		this.setState({visible: false})
		setTimeout(() => {
			console.log('yo')
			this.setState({isNone: true})
		}, 500)
	}

  render() {
    const { classes, children } = this.props
		const styles2 = {
			display: this.state.isNone ? 'None' : 'flex',
		}

	  return (
			<motion.div className={classes.root} style={styles2} onClick={this.onClick} animate={{ opacity: this.state.visible ? 1 : 0 }}>
				<Typography variant="h2" color="secondary" component='div'>
					{children}
				</Typography>
			</motion.div>
	  )
	}
}

export default withStyles(styles, { withTheme: true })(Splash);
