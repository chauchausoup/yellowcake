import React from 'react'


import reactLogo from '../../static/images/react.png'
import bootstrap from '../../static/images/bootstrap.png'
import htmljscss from '../../static/images/web.png'
/* import nodejs from '../../static/images/node.png'
import socketio from '../../static/images/socket.png'
import express from '../../static/images/express.png'
import mongo from '../../static/images/mongo.png'
 */


export default function Skills() {
    return (
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
              <li className="skillPerMoreInner">
                <div className="skillPerLogo"></div>
                <div className="skillPerName">Github</div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
}
