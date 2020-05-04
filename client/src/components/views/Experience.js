import React, { Component } from 'react'
import { TextBox, Title } from '../shared'
import { experience } from '../../data/experience'
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

class Experience extends Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" subtitle="Experience" color="primary"/>
          {experience.map((exp) => (
              <TextBox
                className={classes.contentItem}
                title={exp.title}
                subtitle={exp.subtitle}
                body={exp.body}
                theme={exp.theme}
                variant={exp.boxVariant}
                key={exp.title}
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

export default withStyles(styles, { withTheme: true })(Experience)
