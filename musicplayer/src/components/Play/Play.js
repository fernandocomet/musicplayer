import React from "react";
import play from "../../img/play.svg";
import play_ko from "../../img/pause.svg";
import "./Play.css";

const Play = ({ children, ...rest }) => {
  return (
    <div className="play" {...rest}>
      {children}
      <div className="container">
        <img src={play} alt="Play" className="icon" />
      </div>
    </div>
  );
};

export default Play;
