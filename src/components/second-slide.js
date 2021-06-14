import React from 'react';
import {IoIosLeaf,IoIosArrowDown} from 'react-icons/io';
import {RiLeafFill} from 'react-icons/ri'; 
import AboutMe from '../components/about';
import Story from '../components/story';
import Projects from '../components/projects';



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
    <button className="intro-linkedin">in</button> 
        <div className="intro" >
          
           <button className="intro-tag1">How it started ?</button>
            <button  className="intro-tag2" onClick={this.About}><IoIosArrowDown size={90}/></button>

            <span  className="intro-leaf"><RiLeafFill size={38} /></span>
            <span  className="intro-leaf1"><IoIosLeaf size={40} /></span>
            <span  className="intro-leaf2"><IoIosLeaf  size={42} /></span>


       
          
           </div>
     
      <AboutMe scroll={this.props.scroll}/>
      
      {/* {this.props.scroll > 1120 ? <Story scroll={this.props.scroll} /> :null} */}

      {/* <Projects/> */}





      

   
        
  
      
    
   

      </> 

    )
}
}
export default Second;
