import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import TextBoxBase from './TextBoxBase'
import Themes from './Themes'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => {
  return {
  // styles applied to the root TextBox element
  root: {
    borderRadius: 10,
    //position: 'absolute',
    //top: 0,
    //bottom: 0,
  },
  // styles applied to the root TextBox element when `variant="A"`
  variantA: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the root TextBox element when `variant="B"`
  variantB: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the root TextBox element when `variant="C"`
  variantC: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the root TextBox element when `variant="D"`
  variantD: {
    backgroundColor: 'inherit',
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderStyle: 'dotted',
  },
  // styles applied to the design element
  design: {
    borderRadius: 10,
    position: 'absolute',
    top: 'inherit',
    left: 'inherit',
    zIndex: -1,
  },
  // styles applied to the design element when `variant="A"`
  designA: {
    borderColor: 'black',//theme.palette.primary.main,
    borderStyle: 'dotted',
  },
  // styles applied to the design element when `variant="B"`
  designB: {
    borderColor: theme.palette.primary.main,
    borderStyle: 'dotted',
  },
  // styles applied to the design element when `variant="C"`
  designC: {
    borderColor: theme.palette.primary.main,
    borderStyle: 'dotted',
  },
  // styles applied to the design element when `variant="D"`
  designD: {
  },
}})

const TextBox = (props) => {
  const {
    children,
    className,
    variant='A',
    title,
    subtitle,
    body,
    leftIcon,
    rightIcon,
    ...other
  } = props

  const classes = useStyles(props)

  return (
    <TextBoxBase
      className={clsx(
        classes.root,
        classes[`variant${variant}`],
        className,
      )}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      title={title}
      subtitle={subtitle}
      body={body}
      {...other}
    >
      <div
        className={clsx(
          classes.design,
          classes[`design${variant}`],
        )}
      >
      </div>
      {children}
    </TextBoxBase>
  )
}

TextBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['A', 'B', 'C', 'D']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  body: PropTypes.node.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
}

const ThemedTextBox = ({theme='main', ...other}) =>
  <ThemeProvider theme={Themes[theme]}>
    {console.log("using theme")}
    <TextBox {...other}/>
  </ThemeProvider>

export default ThemedTextBox
