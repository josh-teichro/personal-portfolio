// education list
import React from 'react'

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: 40,
  },
  gridItem: {
    flex: '1 0 auto',
  },
}

export const education = [
  {
    type: 'item',
    title: "University of Toronto - Honours Bachelor of Science",
    subtitle: "Sep. 2015 - Jun. 2020 | Toronto, ON | Cum. GPA: 3.68/4.00",
    body: (
      <div>
        <p>
          Area of Study: Computer Science Specialist (specialized major) with focuses in Computer Vision (including graphics), AI, and Game Design.
        </p>
        <p style={{marginBottom: 2}}>
          Awards and Accomplishments:
        </p>
        <ul style={{marginTop: 2}}>
          <li> University of Toronto Scholar (entrance scholarship worth $6000) </li>
          <li> Winter 2018 Dean’s List Scholar </li>
          <li> 3.97 annual GPA during 3rd year (with full course load) </li>
          <li> 3.75 GPA thus far in 4th year (1 semester) </li>
        </ul>
        <p style={{marginBottom: 2}}>
          Extra-Curricular:
        </p>
        <ul style={{marginTop: 2}}>
          <li> Intramural hockey </li>
          <li> Intramural volleyball </li>
          <li> D-League hockey </li>
          <li> Violinist for Chambers Strings Orchestra </li>
          <li> First-Year Learning Community (FLC) for philosphy </li>
        </ul>
        <p style={{marginBottom: 2}}>
          Course Distribution (20 credits):
        </p>
        <div style={{...styles.grid, marginTop: 2, marginLeft: 40}}>
          <div style={styles.gridItem}> English (1.5) </div>
          <div style={styles.gridItem}> Math (2.5) </div>
          <div style={styles.gridItem}> Algorithms & Programming (7.0) </div>
          <div style={styles.gridItem}> Computer Vision, Machine Learning, & AI (3.0) </div>
          <div style={styles.gridItem}> Philosophy (2.0) </div>
          <div style={styles.gridItem}> Statistics (0.5) </div>
          <div style={styles.gridItem}> UI & Web Development (2.0) </div>
          <div style={styles.gridItem}> Graphics & Game Design (1.5) </div>
        </div>
      </div>
    ),
    theme: 'themeA',
    boxVariant: 'A',
  },
  {
    type: 'item',
    title: "Accelerated Christian Education - Manitoba High School Academic Diploma",
    subtitle: "Sep. 2012 - Aug. 2015 | Portage La Prairie | Avg. Ann. 98.5%",
    body: (
      <div>
        <p>
          Accelerated Christian Education is the curriculum used by the private school through which I (Joshua) was homeschooled.
        </p>
        <p style={{marginBottom: 2}}>
          Awards and Accomplishments:
        </p>
        <ul style={{marginTop: 2}}>
          <li> 98+% annual average throughout highschool </li>
        </ul>
        <p style={{marginBottom: 2}}>
          Extra-Curricular:
        </p>
        <ul style={{marginTop: 2}}>
          <li> 7 years private violin lessons </li>
          <li> Recreational hockey </li>
        </ul>
      </div>
    ),
    theme: 'themeC',
    boxVariant: 'C',
  },
]
