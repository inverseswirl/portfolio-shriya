import React from 'react';
import {IoMdFlower,IoIosLeaf} from 'react-icons/io';
import {IoScanOutline} from 'react-icons/io5';
import {RiLeafFill} from 'react-icons/ri'; 
import AboutMe from '../components/about';
import Story from '../components/story';



class Second extends React.Component{
constructor(props){
    super(props)

    this.state={btn:false}
 
}



  





render(){
const{btn}=this.state;

    return(
   <>
    <button className="intro-linkedin">in</button> 
        <div className="intro" >
          
            <span  className="intro-leaf"><RiLeafFill size={38} /></span>
            <span  className="intro-leaf1"><IoIosLeaf size={40} /></span>
            <span  className="intro-leaf2"><IoIosLeaf  size={42} /></span>


        {/* <button onClick={()=>this.setState({btn: true})} className="intro-btn"><IoMdFlower color="whitesmoke" size={75}/></button> */}
       
            <button className="intro-tag1">How it started ?</button>
             <button  className="intro-tag2">Know about me</button>

           </div>
     
        <AboutMe scroll={this.props.scroll}/>
        <Story />

   
        
  
      
    
   

      </> 

    )
}
}
export default Second;
