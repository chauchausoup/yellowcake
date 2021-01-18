import React from 'react';
import './HomePageContent.css'

function HomePageContent(){
    return(
        <div className="homePageContent">
            <div className="projects">
                <div className="projectPlaceholder">
                    PROJECTS
                </div>
                <div className="projectHolders">
                    <ul className="projectGroup">
                        
                        <li className="projectPer">
                        <div className="projectTitle">
                                Traffic Data Entry and Visualization System
                            </div>
                            <div className="projectDesc">
                                Heat map showing possible data entered using a client side web UI.
                            </div>
                            <br/>
                            <div className="projectStacks">
                            Stack

                                <ul className="stacks">
                                    <li className="stackItem">Javascript</li>
                                    <li className="stackItem">PHP</li>
                                    <li className="stackItem">MySQL</li>
                                </ul>
                            </div>

                        </li>
                        {/* <li className="projectPer">
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
                        
                        </li> */}
                        <li className="projectPer">3</li>
                        <li className="projectPer">4</li>
                        <li className="projectPer">5</li>
                        <li className="projectPer">6</li>
                        <li className="projectPer">7</li>
                    </ul>
                </div>
            </div>
            <div className="skills">
            <div className="skillPlaceholder">
                    SKILLS
                </div>
                <div className="skillHolders">
                    <ul className="skillGroup">
                        <li className="skillPer">1</li>
                        <li className="skillPer">2</li>
                        <li className="skillPer">3</li>
                        <li className="skillPer">4</li>
                    </ul>
                </div>
            </div>
            <div className="socials">
            <div className="socialPlaceholder">
                    SOCIALS
                </div>
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


export default HomePageContent;
