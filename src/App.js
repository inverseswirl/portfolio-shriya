import React from 'react';
import './sass/App.css';
import Second from './components/second-slide';
import Intro from './components/intro';









class App extends React.Component {
  constructor(props){
    super(props)


    this.state={animate: ""}
    this.handleAnimation=this.handleAnimation.bind(this);
  }


 




  

  
   
  handleAnimation(animate){
    this.setState({animate: animate})
  }





render(){
  const{animate}=this.state


  return (
    <div className="App"   >
      

     {animate==="font" ? <Second /> :  <Intro  animate={this.handleAnimation}/>}
    
     
    </div>
  



  );
}

}
export default App;
