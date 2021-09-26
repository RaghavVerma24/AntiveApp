//React Shit
import React, { lazy, Suspense, useState } from "react";
import { GlobalStyle } from "../OfficialLandingPage/globalStyles";

//Components
import Navbar from "../LandingPage/components/Navbar";
import Sidebar from "../LandingPage/components/SideBar";
import Footer from "../LandingPage/components/Footer";
import MinimalFooter from "../OfficialLandingPage/Sections/PlainFooter/MinimalFooter"

const OfficialHome = lazy(() => import("../OfficialLandingPage/Pages/Home"));

const Header = lazy(() =>
  import("../OfficialLandingPage/components/Header/index")
);
const FooterOfficial = lazy(() =>
  import("../OfficialLandingPage/components/Footer/index")
);
// const ScrollToTop = lazy(() =>
//   import("../OfficialLandingPage/components/ScrollToTop/index")
// );

function OfficialLandingpage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <OfficialHome />
        {/* <Footer /> */}
        <MinimalFooter />
      </Suspense>
    </>
  );
}

export default OfficialLandingpage;
