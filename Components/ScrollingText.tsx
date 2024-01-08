import React from "react";

const ScrollingText = ({ text }) => {
  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text [font-size:_clamp(2em,4.5vw,5em)] font-bold">
        {text}
      </div>
    </div>
  );
};

export default ScrollingText;
