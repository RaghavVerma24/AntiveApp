import React from "react";
import SideNavBar from "../Sidebar&Header/SideNavbar";
import UpdateProfile from "../UpdateProfile/index";
import theme from "../Drive/utilities/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./pages.css";

const Settings = () => {
  return (
    <div>
      {/* <SideNavBar /> */}
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <UpdateProfile />
      </ChakraProvider>
    </div>
  );
};

export default Settings;
