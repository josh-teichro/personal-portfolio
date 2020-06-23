import React from 'react'
import { contact } from '../../data/contact'
import TextBox from './TextBox'
import { Link } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  root: {

  },
  key: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  link: {

  },
}))

const ContactInfo = ({className}) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <TextBox
      className={className}
      title="Contact"
      body=
        <div>
          {Object.keys(contact).map((key, i) => {
            const {text, href} = contact[key]
            return (<div key={i}> <span className={classes.key}> {`${key} - `} </span> <Link href={href} className={classes.link}> {text} </Link></div>)
          })}
        </div>
      variant='none'
    />
  )
}

export default ContactInfo
