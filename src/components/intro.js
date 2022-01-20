import React from "react";

const Intro = (props) => {
  const letter_array = [
    "M",
    "y",
    " ",
    "l",
    "i",
    "f",
    "e",
    " ",
    "a",
    "s",
    " ",
    "a",
    " ",
    "C",
    "o",
    "d",
    "e",
    "r",
  ];
  const intro_line = letter_array.map((letter, index) => (
    <span className={`letter-${index + 1}`}>{letter}</span>
  ));

  function checkanime(e) {
    props.animateFunction(e.animationName);
  }

  return (
    <div className="text" onAnimationEnd={checkanime}>
      {intro_line}

      <br />
    </div>
  );
};

export default Intro;
