import React from 'react';
import {IoIosLeaf,IoIosArrowDown} from 'react-icons/io';
import {RiLeafFill} from 'react-icons/ri'; 
import AboutMe from '../components/about';
import Story from '../components/story';
import Video from '../components/video';
import Projects from './projects';



class Second extends React.Component{
constructor(props){
    super(props)

 
 this.About=this.About.bind(this);
}



  About(e){
    console.log(e)
  }





render(){


    return(
   <>
    <button className="linkedin">in</button> 

      <div className="theme"> 
        <button className="theme-btn">Ideation</button>
        <div className="theme-card">
          <div className="">
            <div className="theme-card-img"></div>
            <div className="theme-card-para"></div>
          </div>
          <p>I like</p>
       </div>
     </div>
    


        <div className="intro" >
          
           <button className="intro-tag1">How it started ?</button>
            <button  className="intro-tag2" onClick={this.About}><IoIosArrowDown size={90}/></button>

            <span  className="intro-leaf"><RiLeafFill size={38} /></span>
            <span  className="intro-leaf1"><IoIosLeaf size={40} /></span>
            <span  className="intro-leaf2"><IoIosLeaf  size={42} /></span>


       
          
           </div>
     
      <AboutMe scroll={this.props.scroll}/>
      
     <Story scroll={this.props.scroll} /> 

      <Video />

      <Projects/>





      

   
        
  
      
    
   

      </> 

    )
}
}
export default Second;
