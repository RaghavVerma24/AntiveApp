import React, { useState } from "react";
import "./ComingSoon.css";
import { Link } from "react-router-dom";
import {
  PageNotFoundBtnWrapper,
  ArrowForwardError,
  ArrowRightError,
} from "./ComingSoonElements";
// import errorImage from "./images/404error.gif";
import comingsoon from "./images/comingsoon.png";

const ComingSoon = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="ComingSoonPage">
      <h1 className="ComingSoonOops">Attention!</h1>
      <h2 className="ComingSoonThisPage">Budgeting will soon be available!</h2>
      <img src={comingsoon} className="ComingSoonpngpic" />
      <Link to="/dashboard">
          <div
            className="ComingSoonbtn"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {hover ? <ArrowRightError /> : <ArrowForwardError />} Back to dashboard!
          </div>
      </Link>
    </div>
  );
};

export default ComingSoon;
