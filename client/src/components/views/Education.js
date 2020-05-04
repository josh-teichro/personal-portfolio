import React, { Component } from 'react'
import { TextBox, Title } from '../shared'
import { education } from '../../data/education'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 932, //1177,
    margin: -theme.spacing(1),
  },
  contentItem: {
    margin: theme.spacing(1),
    flex: '10 1 auto',
  },
})

class Education extends Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" subtitle="Education" color="primary"/>
          {education.map((item) => (
              <TextBox
                className={classes.contentItem}
                title={item.title}
                subtitle={item.subtitle}
                body={item.body}
                theme={item.theme}
                variant={item.boxVariant}
                key={item.title}
              />
            ))}
        </div>
      </div>
    )
  }

  getImagePath = (name) => (
    require(`../../images/${name}`)
  )

}

export default withStyles(styles, { withTheme: true })(Education)
