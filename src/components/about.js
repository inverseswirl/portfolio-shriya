import React from "react";
import { IoMdFlower } from "react-icons/io";
import Dots from "../style-components/dots";
import Svg from "../style-components/svg";

const AboutMe = () => {
  const headline = "Hi! I'm Shriya";
  const para =
    " I moved to Melbourne in 2019. My journey as a coder started in 2020.";

  return (
    <div className="about">
      <Svg />
      <div className="about-flower">
        <IoMdFlower color="#aca106" size={400} />
      </div>
      <Dots />
      <div className="about-first">
        <div className="about-first-pic"></div>
        <div className="about-first-para">
          <h1 className="about-first-para-headline">{headline} &amp;</h1>
          <p className="about-first-para-mainpara">
            {para}
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
