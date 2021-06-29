import React from 'react';
import './sass/App.css';
import Second from './components/second-slide';
import Intro from './components/intro';









class App extends React.Component {
  constructor(props){
    super(props)


    this.state={animate: "",scroll:""}
    this.handleAnimation=this.handleAnimation.bind(this);
    this.handleScroll=this.handleScroll.bind(this);
  }


 

  handleScroll(e){
  
      console.log(e.target.scrollTop)
    this.setState({scroll:e.target.scrollTop})
  
  }



  

  
   
  handleAnimation(animate){
    this.setState({animate: animate})
  }





render(){
  const{animate,scroll}=this.state


  return (
    <div className="App"  onScroll={this.handleScroll} >
      

    
     {animate==="font" ? <Second scroll={scroll}/> :  <Intro  animate={this.handleAnimation}/>}
     
  



    </div>
  );
}

}
export default App;
