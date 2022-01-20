import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Svg from "../style-components/svg";

const Navbar = () => {
  return (
    <nav className="intro">
     
     <p className="intro-tag1"> Hi! I'm Shriya </p>
      <div className="intro-tag2">
        <IoIosArrowDown size={80} />
      </div>
      {/* <a
        className="linkedin"
        href="https://www.linkedin.com/in/shriya-dhar-174886103/"
        rel="noreferrer"
        target="_blank"
      >
        in
      </a>
      <Link
        className="github"
        href="https://github.com/inverseswirl"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
      </Link> */}

    
    </nav>
  );
};

export default Navbar;
