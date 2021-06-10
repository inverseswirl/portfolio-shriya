import React from 'react';
import {IoMdFlower,IoIosLeaf} from 'react-icons/io';
import {IoScanOutline} from 'react-icons/io5';
import {RiLeafFill} from 'react-icons/ri'; 
import AboutMe from '../components/about';
import Story from '../components/story';



class Second extends React.Component{
constructor(props){
    super(props)

 
 
}



  





render(){


    return(
   <>
    <button className="intro-linkedin">in</button> 
        <div className="intro" >
          
            <span  className="intro-leaf"><RiLeafFill size={38} /></span>
            <span  className="intro-leaf1"><IoIosLeaf size={40} /></span>
            <span  className="intro-leaf2"><IoIosLeaf  size={42} /></span>


       
            <button className="intro-tag1">How it started ?</button>
             <button  className="intro-tag2"></button>

           </div>
     
      <AboutMe scroll={this.props.scroll}/>
      
      {this.props.scroll > 950 ? <Story scroll={this.props.scroll} /> :null}


      

   
        
  
      
    
   

      </> 

    )
}
}
export default Second;
