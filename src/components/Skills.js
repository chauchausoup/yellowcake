import React from 'react'


import reactLogo from '../../static/images/react.png'
import bootstrap from '../../static/images/bootstrap.png'
import htmljscss from '../../static/images/web.png'
import nodejs from '../../static/images/node.png'
import socketio from '../../static/images/socket.png'
import express from '../../static/images/express.png'
import mongo from '../../static/images/mongo.png'
import mysql from '../../static/images/mysql.png'
import redis from '../../static/images/redis.png'
import aws from '../../static/images/aws.png'
import docker from '../../static/images/docker.png'
import linux from '../../static/images/linux.png'
import octave from '../../static/images/octave.png'
import vscode from '../../static/images/vscode.png'
import github from '../../static/images/github.png'
import netlify from '../../static/images/netlify.png'

import postman from '../../static/images/postman.png'



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
                <div className="skillPerLogo">
                <img src={nodejs} alt="web logo" />

                </div>
                <div className="skillPerName">NodeJS</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={socketio} alt="web logo" />

                </div>
                <div className="skillPerName">SocketIo</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={express} alt="web logo" />

                </div>
                <div className="skillPerName">ExpressJS</div>
              </li>
            </ul>
          </li>
          <li className="skillPer">
            <div className="skillPerTitle">Database</div>
            <ul className="skillPerInner">
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={mongo} alt="web logo" />

                </div>
                <div className="skillPerName">MongoDB</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={redis} alt="web logo" />

                </div>
                <div className="skillPerName">Redis</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={mysql} alt="web logo" />

                </div>
                <div className="skillPerName">MySQL</div>
              </li>
            </ul>
          </li>
          <li className="skillPer">
            <div className="skillPerTitle">Devops</div>
            <ul className="skillPerInner">
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={aws} alt="web logo" />

                </div>
                <div className="skillPerName">AWS</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={docker} alt="web logo" />

                </div>
                <div className="skillPerName">Docker</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={linux} alt="web logo" />

                </div>
                <div className="skillPerName">Linux</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={github} alt="web logo" />

                </div>
                <div className="skillPerName">Github</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={netlify} alt="web logo" />

                </div>
                <div className="skillPerName">Netlify</div>
              </li>
            </ul>
          </li>
          <li className="skillPer">
            <div className="skillPerTitle">Other Tools</div>
            <ul className="skillPerInner">
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={octave} alt="web logo" />

                </div>
                <div className="skillPerName">Octave</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={postman} alt="web logo" />

                </div>
                <div className="skillPerName">Postman</div>
              </li>
              <li className="skillPerMoreInner">
                <div className="skillPerLogo">
                <img src={vscode} alt="web logo" />

                </div>
                <div className="skillPerName">Vs Code</div>
              </li>
              
            </ul>
          </li>
        </ul>
      </div>
    )
}
