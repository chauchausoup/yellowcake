import React from 'react'
import './HomePageContent.css'
import reactLogo from '../../static/images/react.png'
import bootstrap from '../../static/images/bootstrap.png'
import htmljscss from '../../static/images/web.png'
/* import nodejs from '../../static/images/node.png'
import socketio from '../../static/images/socket.png'
import express from '../../static/images/express.png'
import mongo from '../../static/images/mongo.png'
 */




function HomePageContent() {
  return (
    <div className="homePageContent">
      <div className="skills">
        <div className="skillPlaceholder">SKILLS</div>

        <ul className="skillGroup">
          <li className="skillPer">
            <div className="skillPerTitle">FrontEnd</div>
            <ul className="skillPerInner">
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                  <img src={reactLogo} alt="react logo"  />
                </div>
                <div className="skillPerName">React</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={bootstrap} alt="bootstrap logo" />

                </div>
                <div className="skillPerName">Bootstrap</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={htmljscss} alt="web logo" />

                </div>
                <div className="skillPerName">HTML,JS,CSS</div>
              </li>
            </ul>
          </li>
          <li className="skillPer">
            <div className="skillPerTitle">BackEnd</div>
            <ul className="skillPerInner">
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">NodeJS</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">SocketIo</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">ExpressJS</div>
              </li>
            </ul>
          </li>
          <li className="skillPer">
            <div className="skillPerTitle">Database</div>
            <ul className="skillPerInner">
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">MongoDB</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">Redis</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">MySQL</div>
              </li>
            </ul>
          </li>
          <li className="skillPer">
            <div className="skillPerTitle">Devops</div>
            <ul className="skillPerInner">
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">AWS</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">Docker</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">Linux</div>
              </li>
            </ul>
          </li>
          <li className="skillPer">
            <div className="skillPerTitle">Other Tools</div>
            <ul className="skillPerInner">
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">Octave</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">Postman</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">Vs Code</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
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
      <div className="socials">
        <div className="socialPlaceholder">SOCIALS</div>
        <div className="socialHolders">
          <ul className="socialGroup">
            <li className="socialPer">1</li>
            <li className="socialPer">2</li>
            <li className="socialPer">3</li>
            <li className="socialPer">4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePageContent
