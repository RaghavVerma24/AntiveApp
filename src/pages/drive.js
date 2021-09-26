import React from "react";
import DashboardDrive from "../Drive/components/layout/DashboardDrive";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import OfficialNav from "../OfficialNavbar/OfficialNav";
import theme from "../Drive/utilities/theme";
import "../Dashboard/dashboard.css";
import ResizeHeight from "../ResizeHeight/PageResize";
import SideNavBar from "../Sidebar&Header/SideNavbar";

const Drive = ({ currentUser }) => {
  return (
    <div className="DrivePageBg">
      <div className="ResizeHeight">
        {/* <ResizeHeight /> */}
        <SideNavBar currentUser={currentUser} />
      </div>
      {/* <div className="WholeDashboard">
        <OfficialNav />
      </div> */}
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <DashboardDrive />
      </ChakraProvider>
    </div>
  );
};

export default Drive;
