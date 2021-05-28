import React from 'react';
import {IoMdFlower,IoIosLeaf} from 'react-icons/io';
import {IoScanOutline} from 'react-icons/io5';
import {RiLeafFill} from 'react-icons/ri'; 
import {GiTreeBranch} from 'react-icons/gi';



class Second extends React.Component{
constructor(props){
    super(props)
 
    this.state={btn:false}


}



render(){
const{btn}=this.state;

    return(
   
        <div className="intro" >
          
            <span  className="intro-leaf"><RiLeafFill size={38} /></span>
            <span  className="intro-leaf1"><IoIosLeaf size={40} /></span>
            <span  className="intro-leaf2"><GiTreeBranch  size={42} /></span>
            <h1  className="intro-headline">Hi!<br/> I'm <br/>Shriya</h1> 
            <h1  className="intro-headline second" >Hi!<br/> I'm <br/>Shriya</h1>

            
    
            <button onClick={()=>this.setState({btn: true})} className="intro-btn"><IoMdFlower color="whitesmoke" size={75}/></button>
         {btn && (  
              <p className="intro-tag1">My creative work</p>
         )} 
         {btn && (  
                <button className="intro-tag2">Know about me</button>
         )} 
  
      
    
   

        </div>
       

    )
}
}
export default Second;
