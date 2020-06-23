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
          Full stack developer position working for a small team of designers and developers in downtown Winnipeg. Work is heavily focused on front-end development in Wordpress but will also include backend development using Python and Django in the future.
        </p>
        <p style={{marginBottom: 2}}>
          Responsibilities include:
        </p>
        <ul style={{marginTop: 2}}>
          <li> Taking site designs from the design team and implementing them in Wordpress, while keeping them responsive, and easily editable for staff and clients </li>
          <li> Improving and updating existing sites to use the latest wordpress features and fit client needs </li>
          <li> Miscellaneous programming jobs to make work in the office easier and more efficient </li>
         </ul>
      </div>
    ),
    theme: 'themeD',
    boxVariant: 'D',
  },
  {
    type: "header",
    title: "Past Experiences",
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
