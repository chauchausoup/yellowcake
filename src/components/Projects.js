import React from 'react'

export default function Projects() {
    return (
        <div className="projects">
        <div className="projectPlaceholder">PROJECTS</div>
        <div className="projectHolders">
          <ul className="projectGroup">
            <li className="projectPer">
              <div className="projectTitle">
                Traffic Data Entry and Visualization System
              </div>
              <div className="projectDesc">
                Heat map showing possible data entered using a client side web
                UI.
              </div>
              <br />
              <div className="projectStacks">
                <ul className="stacks">
                  <li className="stackItem">Javascript</li>
                  <li className="stackItem">PHP</li>
                  <li className="stackItem">MySQL</li>
                </ul>
              </div>
            </li>
            <li className="projectPer">
              <div className="projectTitle">
                Human Tracking and Reidentification
              </div>
              <div className="projectDesc">
                Made using YOLOV4,Bhattacharya Distance,Karlman Filter etc
              </div>
              <div className="projectStacks">
                Stack
                <ul className="stacks">
                  <li className="stackItem">Python</li>
                  <li className="stackItem">co lab</li>
                </ul>
              </div>
            </li>
            <li className="projectPer">
              <div className="projectTitle">
                News Portal Dashboard App using MERN stack
              </div>
              <div className="projectDesc">
                Individuals can login and add their news entry in the dashboard.
              </div>
              <br />
              <div className="projectStacks">
                <ul className="stacks">
                  <li className="stackItem">Mongo DB</li>
                  <li className="stackItem">React</li>
                  <li className="stackItem">NodeJS</li>
                  <li className="stackItem">ExpressJS</li>
                </ul>
              </div>
            </li>
            <li className="projectPer">
              <div className="projectTitle">
                MVP for a Audience Response System
              </div>
              <div className="projectDesc">
                ARS was made using Socket IO and NodeJS at backend. It gave real
                time communication in between the components.
              </div>
              <br />
              <div className="projectStacks">
                <ul className="stacks">
                  <li className="stackItem">NodeJS</li>
                  <li className="stackItem">ReactJS</li>
                  <li className="stackItem">SocketIO</li>
                </ul>
              </div>
            </li>
            <li className="projectPer">
              <div className="projectTitle">
                MVP website for professional doctors.
              </div>
              <div className="projectDesc">
                React app with leafletJS for mapping doctors position, dashboard
                for managing clients data.
              </div>
              <br />
              <div className="projectStacks">
                <ul className="stacks">
                  <li className="stackItem">React</li>
                  <li className="stackItem">LeafletJS</li>
                  <li className="stackItem">React Router</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
}
