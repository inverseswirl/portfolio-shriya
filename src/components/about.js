import React from 'react';
import mypic from '../img/mypic.jpg';

class AboutMe extends React.Component{
constructor(props){
    super(props)
 



}



render(){


    return(
   
        <div className="about"  >
          
    
    <svg  className="about-svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,176C840,160,960,128,1080,112C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      
   {this.props.scroll > 60 && ( 
        <div className="about-first">

          {/* <img  className="about-first-pic" src={mypic}/> */}
          <span className="about-first-pic"></span>
           <p className="about-first-headline"> Hi! I'm Shriya</p>
         </div>  
    )
}
    



    
 {  this.props.scroll > 400 &&(
       
<div className="about-flexright">
       <p className="about-flexright-headline"> I worked in a hospital in admin role.</p>
       <span className="about-flexright-pic"></span>
       
       </div>
 )

 }


      
     


        </div>
       

    )
}
}
export default AboutMe;