import React from "react";
import Dashboard from "../Dashboard/index";
import OfficialNav from "../OfficialNavbar/OfficialNav";
import ChakraNavPage from "../OfficialNavbar/ChakraNav/pages/OfficialSidebar";
import SideNavBar from "../Sidebar&Header/SideNavbar/index";
import ResizeHeight from "../ResizeHeight/PageResize";

//styles
import "../Dashboard/dashboard.css";

const dashboardPage = ({ currentUser }) => {
  return (
    <div>
      <div className="ResizeHeight">
        {/* <ResizeHeight /> */}
        <SideNavBar currentUser={currentUser} />
      </div>
      <div className="WholeDashboard">
        <OfficialNav />
      </div>
      <Dashboard />
    </div>
  );
};

export default dashboardPage;
