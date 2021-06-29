import React from 'react';
import {IoIosArrowDown,IoIosArrowForward} from 'react-icons/io';
import {MdCancel} from 'react-icons/md';
import {GiPlainCircle} from 'react-icons/gi';
import AboutMe from '../components/about';
import Story from '../components/story';
import Video from '../components/video';
import Projects from './projects';



class Second extends React.Component{
constructor(props){
    super(props)

 this.state={click:0}
 this.handleClick=this.handleClick.bind(this);
}





 

handleClick(){
 const{click}=this.state;
 this.setState({click:  click===0 ?  click + 1 : click - 1} )
 
}




render(){
  
const{click}=this.state;
    return(
   <>
    <button className="linkedin">in</button> 


    <div className="theme" onClick={this.handleClick}> 
      <button className="theme-btn">Theme</button>
      { click===1 && (  
     <div className="theme-card">
        <div className="theme-card-flex">
            <div className="theme-card-flex-img" ></div>
             <p className="theme-card-flex-para"> Colours<IoIosArrowForward size={15} style={{marginBottom:"-3px"}}/> <GiPlainCircle  color="#ffffff"size={15}/> <GiPlainCircle  color="#aca106"size={15}/> <GiPlainCircle size={15}/><br/>  Design  <IoIosArrowForward size={15} style={{marginBottom:"-3px"}}/>Floral
             <br/>
             <br/>
             <span className="theme-card-flex-cross"><MdCancel size={15}/></span>
            </p>
          </div>
         <p className="theme-card-main"> The idea is inspired from the nature. <br/>The theme & colours reflect the same.</p>
      </div> 
       )}

     </div>
  

    
        
    


        <div className="intro" >
          
           <button className="intro-tag1">How it started ?</button>
            <button  className="intro-tag2" ><IoIosArrowDown size={80}/></button>

         


       
          
           </div>
     
      <AboutMe />
      
     <Story  /> 

      <Video />

      <Projects/>





      

   
        
  
      
    
   

      </> 

    )
}
}
export default Second;
