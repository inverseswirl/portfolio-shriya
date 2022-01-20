import React from "react";
import Dots2 from "../style-components/story_dots";

const Story = () => {
  return (
    <div className="story">
      <Dots2 />

      <div className="story-shape"></div>
      <p className="story-para">
        I've always felt the need to get technical guidance while learning to
        code in a self-paced manner.
        <br />
        <br />
        Through CoderAcademy's Web developer Bootcamp, I wish to change my
        career, receive feedback and network with people in the industry.
      </p>
    </div>
  );
};

export default Story;
