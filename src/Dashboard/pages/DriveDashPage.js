import React from "react";

//Components
import DriveDash from "../components/DriveDash";
import theme from "../../Drive/utilities/theme";

//Styles
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";

const DriveDashPage = () => {
  return (
    <div className="DrivePageBg">
      <ChakraProvider theme={theme}>
        <CSSReset />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <DriveDash />
      </ChakraProvider>
    </div>
  );
};

export default DriveDashPage;
