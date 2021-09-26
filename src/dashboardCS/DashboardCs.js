import React, { useState } from "react";
import "./DashboardCS.css";
import { Link } from "react-router-dom";
import comingsoon from "./images/comingsoon2.png";

const DashboardCS = () => {
  return (
    <div className="DashboardCSPage">
      <img src={comingsoon} className="DashboardCSpngpic" />
    </div>
  );
};

export default DashboardCS;
