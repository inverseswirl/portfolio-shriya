import React from 'react';
import { IoMdFlower } from 'react-icons/io';

const Projects=()=>{
    return(
        <div className="projects">
       
       <svg className="projects-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,256L80,250.7C160,245,320,235,480,213.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

       <div className="projects-dots">
            <span className="projects-dots-1"></span>
            <span className="projects-dots-2"></span>
            <span className="projects-dots-3"></span>
            <span className="projects-dots-4"></span>
            <span className="projects-dots-5"></span>
      </div>
       <div className="projects-flower"><IoMdFlower color="#aca106" size={400}/></div>
       <div className="projects-shape" ></div>

            <h1 className="projects-headline">Projects</h1>

        <div className="projects-project1">
            <div className="projects-project1-pic"></div>
            <a  href="https://emi-cal.netlify.app/" rel="noreferrer" target="_blank" className="projects-project1-name">EMI Calculator</a>
        </div>
       
        <div className="projects-project2">
        <div className="projects-project2-pic"></div>
            <a href="https://accent-s26.netlify.app" rel="noreferrer" target="_blank" className="projects-project2-name">Accent App</a>
        </div>
          <div className="projects-project3">
            <div className="projects-project3-pic"></div>
            <a  href="https://weatherapp-s26.netlify.app" rel="noreferrer" target="_blank" className="projects-project3-name">Weather App</a>
        </div>

        <div className="projects-dots2">
            <span className="projects-dots2-1"></span>
            <span className="projects-dots2-2"></span>
            <span className="projects-dots2-3"></span>
            <span className="projects-dots2-4"></span>
            <span className="projects-dots2-5"></span>
      </div>
                
        </div>
    )
}
export default Projects;