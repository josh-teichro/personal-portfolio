import React from 'react'
import clsx from 'clsx'
import { Typography, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root: {
    textAlign: 'left',
  },
  content: {
    margin: "12px 15px",
  },
  contentBody: {
    margin: '4px 0px',
    '& p': {
      margin: '16px 0px',
    },
  },
  icon: {
    position: 'relative',
    flex: '0 0 auto',
    width: 330,
    height: 253,
    margin: '22px 18px',
  },
  leftIcon: {
    float: 'left',
  },
  rightIcon: {
    float: 'right',
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

const TextBoxBase = ({children, className, title, subtitle, body, icon, isIconToLeft, ...other}) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Paper className={clsx(classes.root, className)} {...other}>
      <div className={classes.content}>
        {icon &&
          <Icon className={ isIconToLeft ? classes.leftIcon : classes.rightIcon} src={icon}/>
        }
        <Typography variant="h5" component="p">
          {title}
        </Typography>
        {subtitle &&
          <Typography variant="subtitle2" component="p">
            {subtitle}
          </Typography>
        }
        <Typography className={classes.contentBody} variant="body1" component="div" gutterBottom>
          {body}
        </Typography>
      </div>
      {children}
    </Paper>
  )
}

export default TextBoxBase
