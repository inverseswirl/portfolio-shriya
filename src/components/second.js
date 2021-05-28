import React from 'react';
// import mypic from '../img/mypic.png'
import {IoSettings} from 'react-icons/io5'


class Second extends React.Component{
constructor(props){
    super(props)
 


}



render(){

    return(
   
        <div className="intro" >
          
            <h1  className="intro-headline">Hi!<br/>I'm Shriya </h1>
            <h1  className="intro-headline second" >Hi!<br/>I'm Shriya </h1>
      
            {/* <img  className="intro-img" alt="my-pic" src={mypic} /> */}
            <button className="intro-btn"><IoSettings color="whitesmoke" size={75}/></button>

        </div>
       

    )
}
}
export default Second;
