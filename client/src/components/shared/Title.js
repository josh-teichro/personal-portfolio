import React from 'react';
import clsx from 'clsx'
import Themes from './Themes'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root: {
    width: 'inherit',
  },
  typography: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
  }
}))

const Title = ({className, title, ...other}) => {
  const classes = useStyles({})

  return (
      <div className={clsx(classes.root, className)}>
      <Typography className={classes.typography} variant="h4" align="left" {...other}>
        {title}
      </Typography>
    </div>
  )
};

export default Title;
