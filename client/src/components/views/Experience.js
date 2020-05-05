import React, { Component } from 'react'
import clsx from 'clsx'
import { TextBox, Title, ContactInfo } from '../shared'
import { experience } from '../../data/experience'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 932, //1177,
  },
  contentItem: {
    margin: theme.spacing(1),
    flex: '10 1 auto',
  },
  header: {
    fontWeight: theme.typography.fontWeightLight,
    borderWidth: '0px 0px 1px 0px',
    //borderColor: theme.palette.primary.main,
    //borderStyle: 'solid',
    borderStyle: 'groove',
  },
})

const Header = withStyles(styles, { withTheme: true })(({classes, className, children}) => {
  return (
    <Typography className={clsx(className, classes.header)} variant="h4" color="primary">
      {children}
    </Typography>
  )
})

class Experience extends Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" subtitle="Experience" color="primary"/>
          {experience.map((item) => {
            if (item.type === 'header') {
              return (
                <Header className={classes.contentItem}>
                  {item.title}
                </Header>
              )
            }
            else {
              return (
                <TextBox
                  className={classes.contentItem}
                  title={item.title}
                  subtitle={item.subtitle}
                  body={item.body}
                  theme={item.theme}
                  variant={item.boxVariant}
                  key={item.title}
                />
              )
            }
          })}
            <ContactInfo className={classes.contentItem}/>
        </div>
      </div>
    )
  }

  getImagePath = (name) => (
    require(`../../images/${name}`)
  )

}

export default withStyles(styles, { withTheme: true })(Experience)
