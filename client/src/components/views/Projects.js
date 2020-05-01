import React, { Component } from 'react'
import { TextBox, Title } from '../shared'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 1177,
    margin: 5,
  },
}

class Projects extends Component {

  project1 = {
    title: "A Weathery Journey (3D Video Game)",
    subtitle: "Jan. 2020 - Apr. 2020",
    body: (
      <div>
        <p>
          “A Weathery Journey” is a game that can be played on Mac or Windows and is about a wizard who wields weather-like powers and must use these powers to complete a quest that involves plaforming and solving puzzles. The game was created by a group of 8 students: 3 developers from University of Toronto Computer Science, 2 musicians form University of Toronto Music, and 3 artists from OCAD University.
        </p>
        <p>
          As one of the three developers, I played a key part in developing the core components of the game, including creating the ui, designing puzzles, lighting, and implementing many of the core mechanics. The game was built using C# together with Unity.
        </p>
        <p>
          One particularly interesting mechanic that I implemented from scratch is the frost mechanic that occurs when the player freezes water, turning it into ice. In order to make this work in Unity, I had to manually create a mesh at runtime whenever the player would use their frost ability near water. This mesh had to also work together with the physics system to ensure that the player could stand on top of the ice, which proved difficult because updating the physics system at runtime is very slow. My solution involved precomputing the triangles in the mesh and using a gridlike system to determine which triangles needed to be visible as well as to determine when the water was solid so that the player could walk on top of it.
        </p>
        <p style={{marginBottom: 0}}>
          link to game: https://josh-teichro.itch.io/a-weathery-journey
        </p>
        <p style={{marginTop: 0}}>
          link to repository: https://github.com/zuhaib27/AWeatheryJourneyProject
        </p>
      </div>
    )
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Title title="Joshua Teichroeb" color="primary"/>
          <TextBox
            title={this.project1.title}
            subtitle={this.project1.subtitle}
            body={this.project1.body}
            theme='main'
            variant='D'
            leftIcon='profile-pic.jpg'
          />
        </div>
      </div>
    )
  }

}

export default withStyles(styles)(Projects)
