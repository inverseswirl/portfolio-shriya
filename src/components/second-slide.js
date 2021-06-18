import React from 'react';
import {IoIosLeaf,IoIosArrowDown,IoIosArrowForward} from 'react-icons/io';
import {RiLeafFill} from 'react-icons/ri'; 
import secondslide from '../img/secondslide.jpeg';
import {GiPlainCircle} from 'react-icons/gi';
import AboutMe from '../components/about';
import Story from '../components/story';
import Video from '../components/video';
import Projects from './projects';



class Second extends React.Component{
constructor(props){
    super(props)

 this.state={click:0}
 this.About=this.About.bind(this);
 this.handleClick=this.handleClick.bind(this);
}



  About(e){
    console.log(e)
  }

 

handleClick(){
 const{click}=this.state;
 this.setState({click:  click===0 ?  click + 1 : click - 1} )
 
}




render(){
const{click,doubleclick}=this.state;

    return(
   <>
    <button className="linkedin">in</button> 


      <div className="theme" onClick={this.handleClick}> 
        <button className="theme-btn">Ideation</button>
        { click===1 && (    <div className="theme-card">
          <div className="theme-card-flex">
            <div className="theme-card-flex-img" ></div>
            <p className="theme-card-flex-para"> Colours<IoIosArrowForward size={15} style={{marginBottom:"-3px"}}/> <GiPlainCircle  color="#ffffff"size={15}/> <GiPlainCircle  color="#aca106"size={15}/> <GiPlainCircle size={15}/><br/>  Design  <IoIosArrowForward size={15} style={{marginBottom:"-3px"}}/>Floral<br/>
            <br/></p>
            </div>
         <p className="theme-card-main"> The idea is inspired from floral design. <br/>The theme & colours reflect the same.</p>
       </div> )}
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
