import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import TextBoxBase from './TextBoxBase'
import Themes from './Themes'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import capitalize from '../../utils/capitalize';

const useStyles = makeStyles( (theme) => {
  return {
  // styles applied to the root element
  root: {
    position: 'relative',
    //top: 0,
    //bottom: 0,
  },
  // styles applied to the base TextBox element (i.e. the TextBoxBase component)
  textBoxBase: {
    position: 'relative',
    //top: 0,
    //left: 0,
    minWidth: '100%',
    minHeight: '100%',
    zIndex: 1,
  },
  // styles applied to the base TextBox element when `variant="none"`
  variantNone: {
    backgroundColor: 'inherit',
    color: theme.palette.primary.main,
    boxShadow: 'None',
  },
  // styles applied to the base TextBox element when `variant="A"`
  variantA: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the base TextBox element when `variant="B"`
  variantB: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the base TextBox element when `variant="C"`
  variantC: {
    borderRadius: 10,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  // styles applied to the base TextBox element when `variant="D"`
  variantD: {
    //borderRadius: 10,
    backgroundColor: 'inherit',
    color: theme.palette.primary.main,
    //borderColor: theme.palette.primary.main,
    //borderStyle: 'dashed',
    //borderWidth: 2,
    //boxShadow: 'None',
  },
  // styles applied to the background element
  background: {
    position: 'absolute',
    zIndex: 0,
  },
  // styles applied to the background element  when `variant="A"`
  backgroundA: {
    top: 14,
    left: -12,
    width: '100%',
    height: '100%',
  },
  // styles applied to the background element  when `variant="B"`
  backgroundB: {
    top: -10,
    left: -12,
    width: 'calc(100% + 24px)',
    height: 'calc(100% + 24px)',
  },
  // styles applied to the background element  when `variant="C"`
  backgroundC: {
    top: 14,
    left: -12,
    width: '100%',
    height: '100%',
  },
  // styles applied to the background element  when `variant="D"`
  backgroundD: {
    top: -2,
    left: -2,
    width: 'calc(100% + 6px)',
    height: 'calc(100% + 6px)',
  },
  // styles applied to the background svg element when `variant="A"`
  svgA: {
    width: "calc(100% - 4px)",
    height: "calc(100% - 4px)",
    y: 2,
    x: 2,
    rx: "10",
    ry: "10",
    fill: 'none',
    stroke: theme.palette.primary.main,
    strokeWidth: 2,
    strokeDasharray:'12,12',
  },
  // styles applied to the background svg element when `variant="B"`
  svgB: {
    width: "calc(100% - 4px)",
    height: "calc(100% - 4px)",
    y: 2,
    x: 2,
    rx: "10",
    ry: "10",
    fill: 'none',
    stroke: theme.palette.primary.main,
    strokeWidth: 2,
    strokeDasharray:'12,12',
  },
  // styles applied to the background svg element when `variant="C"`
  svgC: {
    width: "100%",
    height: "100%",
    y: 0,
    x: 0,
    rx: "10",
    ry: "10",
    fill: theme.palette.primary.main,
    opacity: 0.3,
  },
  // styles applied to the background svg element when `variant="D"`
  svgD: {
    width: "calc(100% - 8px)",
    height: "calc(100% - 8px)",
    y: 3,
    x: 3,
    rx: "10",
    ry: "10",
    fill: 'none',
    stroke: theme.palette.primary.main,
    strokeWidth: 1,
    strokeDasharray:'20,20',
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
    <div className={clsx(classes.root, className)} {...other}>
      { /* the background element */ }
      <div
        className={clsx(
          classes.background,
          classes[`background${capitalize(variant)}`]
        )}
      >
        <svg width="100%" height="100%">
          <rect
            className={clsx(
              {
                [classes[`svg${capitalize(variant)}`]]: variant !== 'none',
              },
            )}
          />
        </svg>
      </div>
      { /* the base textbox element */ }
      <TextBoxBase
        className={clsx(
          classes.textBoxBase,
          classes[`variant${capitalize(variant)}`],
        )}
        icon={icon}
        isIconToLeft={isIconToLeft}
        title={title}
        subtitle={subtitle}
        body={body}
        elevation={0}
        {...other}
      >
        {children}
      </TextBoxBase>
    </div>
  )
}

TextBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['A', 'B', 'C', 'D', 'none']),
  title: PropTypes.string,
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
