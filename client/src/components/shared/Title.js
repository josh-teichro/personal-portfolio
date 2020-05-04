import React from 'react'
import clsx from 'clsx'
import Themes from './Themes'
import { Typography } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root: {
    width: 'inherit',
    margin: theme.spacing(1),
  },
  typography: {
  }
}))

const Title = ({className, title, subtitle, ...other}) => {
  const classes = useStyles({})

  return (
      <div className={clsx(classes.root, className)}>
      <Typography className={classes.typography} variant="h4" align="left" {...other}>
        {title}
        {subtitle &&
          <Typography className={classes.typography} variant="h3" align="left" component='span' {...other}>
            {` - ${subtitle}`}
          </Typography>
        }
      </Typography>
    </div>
  )
};

const ThemedTitle = ({theme='main', ...other}) =>
  <ThemeProvider theme={Themes[theme]}>
    <Title {...other}/>
  </ThemeProvider>

export default ThemedTitle;
