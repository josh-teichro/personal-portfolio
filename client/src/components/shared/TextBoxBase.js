import React from 'react'
import clsx from 'clsx'
import { Typography, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '5px 7px',
  },
  content: {
    flex: '10',
    padding: 'inherit',
  },
  contentBody: {
    margin: '4px 0px',
    '& p' : {
      margin: '16px 0px',
    },
  },
  icon: {
    position: 'relative',
    flex: '0 0 auto',
    width: 330,
    height: 253,
    margin: '28px 27px',
  },
  leftIcon: {
  },
  rightIcon: {
  },
}))

const Icon = (({src, className, ...other}) => {
  const classes = useStyles()
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
      className={clsx(className, classes.icon)}
      elevation={4}
      square
      {...other}
    >
      <img style={styles} src={src} alt={src}/>
    </Paper>
  )
})

const TextBoxBase = ({children, className, title, subtitle, body, leftIcon, rightIcon, ...other}) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Paper className={clsx(classes.root, className)} {...other}>
      {leftIcon &&
        <Icon className={classes.leftIcon} src={leftIcon}/>
      }
      <div className={classes.content}>
        <Typography variant="h5">
          {title}
        </Typography>
        {subtitle &&
          <Typography variant="subtitle2">
            {subtitle}
          </Typography>
        }
        <Typography className={classes.contentBody} variant="body1" component="div" gutterBottom>
          {body}
        </Typography>
      </div>
      {rightIcon &&
        <Icon className={classes.rightIcon} src={rightIcon}/>
      }
      {children}
    </Paper>
  )
}

export default TextBoxBase
