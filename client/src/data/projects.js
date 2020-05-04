// projects list
import React from 'react'

export const projects = [
  {
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
    ),
    icon: 'a-weathery-journey.png',
    theme: 'main',
    boxVariant: 'D',
    isIconToLeft: false
  },
  {
    title: "Blossom (University Finder Website)",
    subtitle: "Jan. 2020 - Apr. 2020",
    body: (
      <div>
        <p>
          “Blossom” is a website designed to help high-school sudents find the university that is right for them. The goal of the project was to create a better environment for students to find different universities based on location, subject, and admission averages so that they could compare their interests and grades all in a single location, while also keeping track of the universities that they were interested in.
        </p>
        <p>
          The project was built using a React frontend and a javascript (node.js) backend. This website was a course project built by 4 students, but has been deployed using heroku and holds valid data.
        </p>
        <p style={{marginBottom: 0}}>
          visit wesite: https://blossom-309.herokuapp.com
        </p>
        <p style={{marginTop: 0}}>
          link to repository: https://github.com/josh-teichro/blossom
        </p>
      </div>
    ),
    icon: 'blossom.PNG',
    theme: 'themeA',
    boxVariant: 'A',
    isIconToLeft: true
  },
  {
    title: "Graphics Raycaster (Image Rendering Competition)",
    subtitle: "Jan. 2020 - Apr. 2020",
    body: (
      <div>
        <p>
          Built a raycaster in C++ in order to render an image which was submitted to the Unversity of Toronto’s undergraduate graphics course’s “Final Image” competition. The competition was to determine the best work created using what was learned in the 4th year undergraduate course CSC418 (Computer Graphics).
        </p>
        <p>
          The raycaster supports Blinn-Phong shading, reflections, and transparent materials where Snell’s Law, Beer’s Law, and the Fresnel equations are used to simulate realistic transparency. Scenes are created using meshes, point or directional lights, and predefined materials. The raycaster is complete with a json input system and loading display.
        </p>
        <p>
          The image on the left was my submission for the competition and demonstrates the simulated transparency.
        </p>
        <p>
          Contact for project access.
        </p>
      </div>
    ),
    icon: 'iced_tea.png',
    theme: 'main',
    boxVariant: 'D',
    isIconToLeft: true
  },
  {
    title: "Animated Symbol Detection (Computer Vision Project)",
    subtitle: "Nov. 2019 - Dec. 2019",
    body: (
      <div>
        <p>
          This was an open-ended research project where I, along with one other student from the University of Toronto, were to propose a topic or problem related to computer vision and then solve it. The topic we chose was that of analyzing an episode of a Japanese show titled “Naruto” and detecting and tracking the faces of the characters in the show, as well as detecting the symbols that were commonly on bandana’s that were on the character’s foreheads. The project was split into two parts and each part was to be solved using different types of computer vision algorithms. My partner took over character face recognition using deep learning, while I worked on symbol detection using traditional feature matching techniques (this was to fulfill the course requirement).
        </p>
        <p>
          The symbols that I was required to detect were located in various positions relative to any particular character’s face, could be rotated to various degrees, and could be scaled to different sizes depending on how near the character was to the virtual camera. All of these factors, along with the fact that any symbol looked different from one frame to the next (due to the images being animated drawings), were the key difficulties in this project. To solve the problem, I considered using both a SIFT based method as well as a variant of the Generalized Hough Transform by D. H. Balard. Of these, the method based on the Generalized Hough Transform proved the most successful.
        </p>
        <p>
          You can read my paper which describes the algorithms I used here.
        </p>
        <p>
          link to repository: https://github.com/jaruserickson/naruto-cv
        </p>
      </div>
    ),
    icon: 'naruto.png',
    theme: 'main',
    boxVariant: 'D',
    isIconToLeft: false
  },
]
