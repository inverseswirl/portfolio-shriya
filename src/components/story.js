import React from 'react';


class Story extends React.Component{
constructor(props){
    super(props)
 



}



render(){


    return(
   
        
        
        <div className="story"  >
      
      {/* <span className="story-dots"></span>
      <span className="story-dots1"></span>
      <span className="story-dots2"></span>
      <span className="story-dots3"></span>
      <span className="story-dots4"></span>
      <span className="story-dots5"></span> */}

   
        
    <span className="story-prism" ></span>
      


    {this.props.scroll > 1120 && (
            <p className="story-headline"> In Aug 2019, I moved to Melbourne.</p>
         

    )}
   
  {this.props.scroll > 1150 && (
          <p className="story-para">I decided to re-skill and learn to code.</p>
        
  )}

    {this.props.scroll > 1153 && (<p  className="story-lastline">And made a couple of Projects.</p>
    
    )}

        




 
        </div>






     
    


       

    )
}
}
export default Story;