import React from 'react';
// import myvideo from '../video/myvideo.mp4';


const Video=()=>{

    return(
        <div className="video">
          <svg  className="video-svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,64L40,90.7C80,117,160,171,240,165.3C320,160,400,96,480,85.3C560,75,640,117,720,133.3C800,149,880,139,960,133.3C1040,128,1120,128,1200,144C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
         
          {/* <video  className="video-video" controls width="400" height="270">

              <source src={myvideo}
                      type="video/mp4"/>
          </video> */}
         
         

        </div>
    )
}
export default Video;

