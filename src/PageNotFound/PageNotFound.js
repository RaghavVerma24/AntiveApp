import React, { useState } from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";
import {
  PageNotFoundBtnWrapper,
  ArrowForwardError,
  ArrowRightError,
} from "./NotFoundElements";
import errorImage from "./images/404error.gif";
import errorpng from "./images/test404.png";

const PageNotFound = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="NotFoundPage">
      <h1 className="Oops">Oops!</h1>
      <h2 className="ThisPage">This page doesn't exist.</h2>
      <img src={errorpng} className="errorpngpic" />
      <Link to="/dashboard">
          <div
            className="pagenotfoundbtn"
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

export default PageNotFound;
