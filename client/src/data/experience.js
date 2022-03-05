// expereience list
import React from 'react'

export const experience = [
  {
    type: "header",
    title: "Current Position",
  },
  {
    type: "item",
    title: "Web Developer / Programmer - Vincent Design",
    subtitle: "May. 2020 - Current | Winnipeg, MB",
    body: (
      <div>
        <p>
          Full stack developer position working for a small, but growing, team of designers and developers in downtown Winnipeg. 
        </p>
        <p style={{marginBottom: 2}}>
          Responsibilities include:
        </p>
        <ul style={{marginTop: 2}}>
          <li> Front-end development of Wordpress sites using modern technologies like Tailwind and Laravel </li>
          <li> Mobile app development for both IOS and Android using react-native and expo </li>
          <li> Building misc. apps in React to improve development workflow </li>
         </ul>
      </div>
    ),
    theme: 'main',
    boxVariant: 'D',
  },
  {
    type: "item",
    title: "Freelance Unity Developer - Propel VR",
    subtitle: "Nov. 2021 - Current | Remote",
    body: (
      <div>
        <p>
          Also currently doing freelance work with Propel VR building small Unity projects varying from VR games to academic/training simulations.
        </p>
        <p style={{marginBottom: 2}}>
          Responsibilities include:
        </p>
        <ul style={{marginTop: 2}}>
          <li> Game design </li>
          <li> Game mechanics </li>
          <li> UI/UX </li>
          <li> Working with external API's and integrating them with Unity </li>
          <li> Misc. Unity and game dev related tasks </li>
         </ul>
      </div>
    ),
    theme: 'themeA',
    boxVariant: 'A',
  },
  {
    type: "header",
    title: "Past Experiences",
  },
  {
    type: "item",
    title: "Freelance Unity Developer - Richard Beare",
    subtitle: "Oct. 2021 | Remote",
    body: (
      <div>
        <p>
          Contracted to build an app prototype in Unity.
        </p>
        <p style={{marginBottom: 2}}>
          Responsibilities include:
        </p>
        <ul style={{marginTop: 2}}>
          <li> Building a responsive Unity app for mobile devices to match a given design </li>
         </ul>
      </div>
    ),
    theme: 'themeB',
    boxVariant: 'B',
  },
  {
    type: "item",
    title: "Software Engineering Intern - Magna Electronics",
    subtitle: "May. 2018 - Sep. 2019 | Brampton, ON",
    body: (
      <div>
        <p>
          16 month co-op working on vehicle software features, in C++, with some Matlab. Work was computer vision intensive and required knowledge of low level image processing algorithms, as well as high level software development techniques.
        </p>
        <p style={{marginBottom: 2}}>
          Responsibilities included:
        </p>
        <ul style={{marginTop: 2}}>
          <li> writing visual and debugging tools in C++ using OpenCV </li>
          <li> live testing (i.e. in-car testing) and diagnosing problems in current projects </li>
          <li> fixing bugs in current projects </li>
          <li> converting common computer vision algorithms into C++ code </li>
          <li> researching and developing new solutions for existing projects </li>
          <li> maintaining project codebases </li>
          <li> training new interns to understand existing projects </li>
         </ul>
        <p>
          As an intern at Magna, I began my term working on smaller tasks such as writing tools and testing existing features, however, my last 8 months were spent working directly alongside my superior developing new algorithms and writing fresh code. During this time I gained the responsibility of writing an entire project codebase from scratch - a project which would surpass its previous version and put my name on two new patents.
        </p>
      </div>
    ),
    theme: 'themeB',
    boxVariant: 'B',
  },
]
