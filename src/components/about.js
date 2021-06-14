import React from 'react';
import mypic from '../img/mypic.jpg';
import {GiSpotedFlower,GiSunflower,GiFlowers} from 'react-icons/gi';

class AboutMe extends React.Component{
constructor(props){
    super(props)
 



}



render(){


    return(
   
        <div className="about"  >

 
    <svg  className="about-svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,128L30,112C60,96,120,64,180,53.3C240,43,300,53,360,53.3C420,53,480,43,540,48C600,53,660,75,720,85.3C780,96,840,96,900,85.3C960,75,1020,53,1080,64C1140,75,1200,117,1260,144C1320,171,1380,181,1410,186.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

    <div className="about-flower"><GiFlowers color="#aca106" size={700}/></div>
    
    <div className="about-first">
       
        <div className="about-first-pic1"></div>
        <div className="about-first-para"> 
              <h1 className="about-first-para-headline">Hi! I'm Shriya</h1>
              <p className="about-first-para-main">
                  My journey as a coder started last year. Earlier , I worked in a hospital in administration role. I moved to Melbourne in 2019.
              </p>
        </div>
        
    </div>  
     






    
 {/* {  this.props.scroll > 400 &&(
       
<div className="about-flexright">
       <p className="about-flexright-headline"> I worked in a hospital in admin role.</p>
       <span className="about-flexright-pic"></span>
       
       </div>
 )

 } */}


      
     


        </div>
       

    )
}
}
export default AboutMe;