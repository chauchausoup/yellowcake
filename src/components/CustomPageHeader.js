import React from 'react'
import './CustomPageHeader.css'
import image from '../imageSide.jpg'


function CustomPageHeader(){
    return(
        <div className="customHeader">
            <div className="backgroundGraphics">

                <div className="insideInfo">
                    <div className="infoSide">
                    <p id="heading1">Krishna Dhakal </p>
                    <p id="heading2">Pulchowk Campus</p>
                    <p id="heading5">Bachelor's in Computer Engineering</p>
                    <p id="heading3">Lalitpur, Nepal</p>
                    <p id="heading4">+9779861028227</p>
                    
                    </div>
                    <div className="imageSide">
                        <div className="box">
                            <img src={image} alt="img side"/>
                        </div>
                    </div> 
                </div>               
            </div>
          
        </div>
    )
}
export default CustomPageHeader;
