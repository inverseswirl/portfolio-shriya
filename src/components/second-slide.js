import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { GiPlainCircle } from "react-icons/gi";
import AboutMe from "../components/about";
import Story from "../components/story";
import Video from "../components/video";
import Projects from "./projects";
import Navbar from "./navbar";

const Second = () => {
  const [click, handleClick] = useState(0);

  return (
    <>
      <Navbar />

      {/* <div
        className="theme"
        onClick={() => handleClick(click === 0 ? click + 1 : click - 1)}
      >
        <button className="theme-btn">Theme</button>
        {click === 1 && (
          <div className="theme-card">
            <div className="theme-card-flex">
              <div className="theme-card-flex-img"></div>
              <p className="theme-card-flex-para">
                {" "}
                Colours
                <IoIosArrowForward
                  size={15}
                  style={{ marginBottom: "-3px" }}
                />{" "}
                <GiPlainCircle color="#ffffff" size={15} />{" "}
                <GiPlainCircle color="#aca106" size={15} />{" "}
                <GiPlainCircle size={15} />
                <br /> Design{" "}
                <IoIosArrowForward size={15} style={{ marginBottom: "-3px" }} />
                Floral
                <br />
                <br />
                <span className="theme-card-flex-cross">
                  <MdCancel size={15} />
                </span>
              </p>
            </div>
            <p className="theme-card-main">
              {" "}
              The idea is inspired from the nature. <br />
              The theme & colours reflect the same.
            </p>
          </div>
        )}
      </div> */}

      <AboutMe />

      <Story />

      <Video />

      <Projects />
    </>
  );
};
export default Second;
