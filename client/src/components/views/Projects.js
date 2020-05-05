import React, { Component } from 'react'
import { TextBox, Title } from '../shared'
import { projects } from '../../data/projects'
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
    width: 932,//1177,
    margin: -theme.spacing(1),
  },
  contentItem: {
    margin: theme.spacing(1),
  },
})

class Projects extends Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" subtitle="Projects" color="primary"/>
          {projects.map((project) => (
              <TextBox
                className={classes.contentItem}
                title={project.title}
                subtitle={project.subtitle}
                body={project.body}
                theme={project.theme}
                variant={project.boxVariant}
                icon={this.getImagePath(project.icon)}
                isIconToLeft={project.isIconToLeft}
                key={project.title}
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

export default withStyles(styles, { withTheme: true })(Projects)
