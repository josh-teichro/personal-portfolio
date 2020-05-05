import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import TextBoxBase from './TextBoxBase'
import Themes from './Themes'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import capitalize from '../../utils/capitalize';

const useStyles = makeStyles( (theme) => {
  return {
  // styles applied to the root TextBox element
  root: {
    //position: 'absolute',
    //top: 0,
    //bottom: 0,
  },
  // styles applied to the root TextBox element when `variant="none"`
  variantNone: {
    backgroundColor: 'inherit',
    color: theme.palette.primary.main,
    boxShadow: 'None',
  },
  // styles applied to the root TextBox element when `variant="A"`
  variantA: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the root TextBox element when `variant="B"`
  variantB: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the root TextBox element when `variant="C"`
  variantC: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the root TextBox element when `variant="D"`
  variantD: {
    borderRadius: 10,
    backgroundColor: 'inherit',
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderStyle: 'dotted',
    boxShadow: 'None',
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
    //borderColor: 'black',//theme.palette.primary.main,
    //borderStyle: 'dotted',
  },
  // styles applied to the design element when `variant="B"`
  designB: {
    //borderColor: theme.palette.primary.main,
    //borderStyle: 'dotted',
  },
  // styles applied to the design element when `variant="C"`
  designC: {
    //borderColor: theme.palette.primary.main,
    //borderStyle: 'dotted',
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
    icon,
    isIconToLeft,
    ...other
  } = props

  const classes = useStyles(props)

  return (
    <TextBoxBase
      className={clsx(
        classes.root,
        classes[`variant${capitalize(variant)}`],
        //{
        //  [classes[`variant${variant}`]]: variant !== 'none',
        //},
        className,
      )}
      icon={icon}
      isIconToLeft={isIconToLeft}
      title={title}
      subtitle={subtitle}
      body={body}
      {...other}
    >
      <div
        className={clsx(
          classes.design,
          //classes[`design${variant}`],
          {
            [classes[`design${capitalize(variant)}`]]: variant !== 'none',
          },
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
  variant: PropTypes.oneOf(['A', 'B', 'C', 'D', 'none']),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  body: PropTypes.node.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
}

const ThemedTextBox = ({theme='main', ...other}) =>
  <ThemeProvider theme={Themes[theme]}>
    <TextBox {...other}/>
  </ThemeProvider>

export default ThemedTextBox
