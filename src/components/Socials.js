import React from 'react'
import './Socials.css'

import github from '../../static/images/github.png'
import hackerrank from '../../static/images/hackerrank.png'
import upwork from '../../static/images/upwork.png'
import linkedin from '../../static/images/linkedin.png'
import insta from '../../static/images/insta.png'



export default function Socials() {
  return (
    <div className="socials">
      <div className="socialPlaceholder">Follow me on:</div>
      <div className="socialHolders">
        <ul className="socialGroup">
          <a
            href="https://github.com/chauchausoup/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <li className="socialPer">
              <img src={github} alt="github" />
            </li>
          </a>
          <a
            href="https://www.hackerrank.com/7krishna7dhakal7"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <li className="socialPer">
              <img src={hackerrank} alt="github" />
            </li>
          </a>
          <a
            href="https://www.upwork.com/o/profiles/users/~0158ace3e5c4e72b07/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <li className="socialPer">
              <img src={upwork} alt="github" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-dhakal-60400a169/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <li className="socialPer">
              <img src={linkedin} alt="github" />
            </li>
          </a>
          <a
            href="https://instagram.com/chauchausoup/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <li className="socialPer">
              <img src={insta} alt="github" />
            </li>
          </a>
          

        </ul>
      </div>
    </div>
  )
}
