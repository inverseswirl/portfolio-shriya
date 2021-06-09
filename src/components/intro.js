import React from 'react';
import {FaLaptopCode} from 'react-icons/fa';




class Intro extends React.Component{
    constructor(props){
        super(props)

this.Checkanime=this.Checkanime.bind(this)

    
 }


Checkanime(e){

 this.props.animate(e.animationName)

}


 render(){


    return(
     <div  className="text"  onAnimationEnd={this.Checkanime}  >
         <p ><span className="M">M</span><span className="y">y</span>  <span className="l">l</span><span className="i">i</span><span className="f">f</span><span className="e">e</span>  <span className="a">a</span><span className="s">s</span> <span className="aa">a</span> <span className="C"> C</span><span className="o">o</span><span className="d">d</span><span className="ee">e</span><span className="r">r</span> </p> 
         <br/>
    

    </div> 
   
         

   
          
   
   
          
    )
}
}




export default Intro;