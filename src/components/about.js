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
      
  {this.props.scroll > 180 &&(  <div className="about-">

          <img  className="about--pic" src={mypic}/>
           <p className="about--headline"> Hi! I'm Shriya</p>
         </div>  
    )
}
    



    
 {  this.props.scroll > 490 &&(
       
<div className="about-flexright">
       <p className="about--headline"> Earlier, I have worked in a hospital in admin role</p>
       <img  className="about--pic" src="https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
       
       </div>
 )

 }


      
      {/* <div className="timeline">
         <h1>Timeline</h1> 
         <span className="timeline-year">2007</span>
         <div className="timeline-thread">
         <span className="timeline-thread-vertical"></span>
         <span className="timeline-thread-horizontal"></span>
         <span className="timeline-thread-vertical"></span>
         </div>
       
      </div> */}
    


        </div>
       

    )
}
}
export default AboutMe;