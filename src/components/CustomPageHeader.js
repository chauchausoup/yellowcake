import React from 'react'
import './CustomPageHeader.css'



function CustomPageHeader(){
    return(
        <div className="customHeader">
            <div className="backgroundGraphics">

                <div className="insideInfo">
                    <div className="infoSide">
                    <p id="heading1">Krishna Dhakal (....under construction) </p>
                    <p id="heading2">Pulchowk Campus</p>
                    <p id="heading5">Bachelor's in Computer Engineering</p>
                    <p id="heading3">Lalitpur, Nepal</p>
                    <p id="heading4">+9779861028227</p>
                    
                    </div>
                    <div className="imageSide">
                        <div className="box">
                            <img src="https://instagram.fktm1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/50512988_542139546293336_4224320041212940611_n.jpg?_nc_ht=instagram.fktm1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=bI6jMvYDi10AX9-Dgk0&tp=1&oh=9a8693504be881939971051fd334f9f2&oe=602E3A71" alt="img side"/>
                        </div>
                    </div> 
                </div>               
            </div>
          
        </div>
    )
}
export default CustomPageHeader;
