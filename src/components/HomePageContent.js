import React from 'react'
import './HomePageContent.css'


import Skills from './Skills'
import Projects from './Projects'
import Socials from './Socials'

function HomePageContent() {
  return (
    <div className="homePageContent">
     <Skills/>
     <Projects/>
    <Socials/>
    </div>
  )
}

export default HomePageContent
