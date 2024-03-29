import React, { Component } from 'react'
import clsx from 'clsx'
import { TextBox, Title, ContactInfo } from '../shared'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: 932,//1177,
  },
  contentItem: {
    margin: theme.spacing(1),
    flex: '10 1 auto',
    width: '100%',
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

class ListView extends Component {
  render() {
    const {classes, items, title, subtitle} = this.props

    return (
      <div className={classes.content}>
        <Title title={title} subtitle={subtitle} color="primary"/>
        {items.map((item, i) => {
          if (item.type === 'header') {
            return (
              <Header key={i} className={classes.contentItem}>
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
                icon={item.icon && this.getImagePath(item.icon)}
                isIconToLeft={item.isIconToLeft}
                key={i}
              />
            )
          }
        })}
        <ContactInfo className={classes.contentItem}/>
      </div>
    )
  }

  getImagePath = (name) => (
    require(`../../images/${name}`)
  )

}

export default withStyles(styles, { withTheme: true })(ListView)
