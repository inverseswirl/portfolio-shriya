import './sass/App.css';
// import Title from './components/title';

import React from 'react';
import Second from './components/second';
import Intro from './components/intro';







class App extends React.Component {
  constructor(props){
    super(props)


    this.state={top: 500,left:500,animate: ""}
    this.handleMouse=this.handleMouse.bind(this);
    this.handleAnimation=this.handleAnimation.bind(this);
   
  }




  handleMouse(e){
    this.setState({
      top: e.pageY,
      left: e.pageX
    
    })

  }
   
  handleAnimation(animate){
    this.setState({animate: animate})
  }


render(){
  const{top,left,animate}=this.state


  return (
    <div className="App" onMouseMove={this.handleMouse}  >
        {/* <div className="cursor" style={{top: top - 10,left: left - 10}}></div> */}
      
     
     {animate==="font" ? <Second /> :  <Intro  animate={this.handleAnimation}/>}
     
 
    </div>
  );
}

}
export default App;
