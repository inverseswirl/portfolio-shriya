import React, { useState } from "react";
import "./sass/App.scss";
import Second from "./components/second-slide";
import Intro from "./components/intro";

const App = () => {
  const [animate, handleAnimation] = useState(" ");

  function animateFunction(animate) {
    handleAnimation(animate);
  }

  return (
    <div className="App">
       {/* {animate === "font" ? (
        <Second />
      ) : ( 
        <Intro animateFunction={animateFunction} />
       )} */}
          <Second/>

    </div>
  );
};
export default App;
