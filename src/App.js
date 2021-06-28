import React from 'react';
import './sass/App.css';
import Second from './components/second-slide';
import Intro from './components/intro';









class App extends React.Component {
  constructor(props){
    super(props)


    this.state={top: 500,left:500,animate: "",scroll:"",background: ""}
    this.handleMouse=this.handleMouse.bind(this);
    this.handleAnimation=this.handleAnimation.bind(this);
    this.handleScroll=this.handleScroll.bind(this);
  }


  // componentDidMount(){
  //   setInterval(()=>{
  //     this.setState({background: })
  //   })
  // }

  handleScroll(e){
  
      console.log(e.target.scrollTop)
    this.setState({scroll:e.target.scrollTop})
  
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
  const{top,left,animate,scroll,background}=this.state


  return (
    <div className="App" onMouseMove={this.handleMouse}  onScroll={this.handleScroll} >
        {/* <div className="cursor" style={{top: top - 10,left: left - 10}}></div> */}
      

    
     {animate==="font" ? <Second scroll={scroll}/> :  <Intro  animate={this.handleAnimation}/>}
     
  



    </div>
  );
}

}
export default App;
