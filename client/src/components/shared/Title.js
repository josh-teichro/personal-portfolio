import React from 'react'
import clsx from 'clsx'
import Themes from './Themes'
import { Typography } from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root: {
    width: 'inherit',
    margin: theme.spacing(0),
  },
  title: {
    fontWeight: theme.typography.fontWeightLight,
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightRegular,
  }
}))

const Title = ({className, title, subtitle, ...other}) => {
  const classes = useStyles({})

  return (
      <div className={clsx(classes.root, className)}>
      <Typography className={classes.title} variant="h2" align="left" {...other}>
        {title}
        {subtitle &&
          <Typography className={classes.subtitle} variant="h1" align="left" component='span' {...other}>
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
