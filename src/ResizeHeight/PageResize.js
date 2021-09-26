import React, { useState } from "react";
import "./PageResize.css";
import { Link } from "react-router-dom";
import {
  PageNotFoundBtnWrapper,
  ArrowForwardError,
  ArrowRightError,
} from "./PageResizeElements";
// import errorImage from "./images/404error.gif";
import resizepng from "./images/ResizePage.png";

const ResizeHeight = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="ResizePage">
      <h1 className="ResizeOops">Attention!</h1>
      <h2 className="ResizeThisPage">
        Resize the height of the page to 560px or higher.
      </h2>
      <img src={resizepng} className="Resizepngpic" />
      {/* <Link to="/dashboard">
        <div
          className="Resizebtn"
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
          {hover ? <ArrowRightError /> : <ArrowForwardError />} Back to
          dashboard!
        </div>
      </Link> */}
    </div>
  );
};

export default ResizeHeight;
