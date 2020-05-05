import React from 'react'
import { contact } from '../../data/contact'
import TextBox from './TextBox'
import { Link } from '@material-ui/core'

const ContactInfo = ({className}) => {
  return (
    <TextBox
      className={className}
      title="Contact"
      body=
        <div>
          {Object.keys(contact).map((key, i) => {
            const {text, href} = contact[key]
            return (<div key={i}> {`${key} - `} <Link href={href} > {text} </Link></div>)
          })}
        </div>
      variant='none'
    />
  )
}

export default ContactInfo
