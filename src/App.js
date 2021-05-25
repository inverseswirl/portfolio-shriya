import './sass/App.css';
import Title from './components/title';

import React from 'react';
import Second from './components/second';
import Intro from './components/intro';







class App extends React.Component {
  constructor(props){
    super(props)


    this.state={top: 500,left:500,animate:'none'}
    this.handleMouse=this.handleMouse.bind(this);
    this.handleBackground=this.handleBackground.bind(this)
   
  }

componentDidMount(){
  window.addEventListener('scroll',this.handleBackground)
}
componentWillUnmount(){
  window.removeEventListener('scroll',this.handleBackground)
}


  
  handleBackground(e){
    // console.log(e.srcElement)
    console.log(window.pageYOffset)
     this.setState({visibility:window.pageYOffset>900 ? "appear 2s linear": "none"})
  
  }



  handleMouse(e){
    this.setState({
      top: e.pageY,
      left: e.pageX,
    })
   
  
      
  }


render(){
  const{top,left,animate}=this.state
  
  return (
    <div className="App" onMouseMove={this.handleMouse} >
        <div className="cursor" style={{top: top - 10,left: left - 10}}></div>
      
      <Intro />
     
     
    </div>
  );
}

}
export default App;
