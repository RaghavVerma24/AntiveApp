import React, { useState, useEffect } from "react";
import { FaAlignRight } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
  NavBtnContainer,
  AntiveLogo,
} from "./NavbarElements";

import antivelogo from "../../../OfficialNavbar/assets/newlogo.png";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <AntiveLogo>
                <img src={antivelogo} alt="logo" />{" "}
              </AntiveLogo>
              ntive.
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaAlignRight />
            </MobileIcon>
            {/* <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Tools</NavLinks>
            </NavItem>
            
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Benefits</NavLinks>
            </NavItem>            
          </NavMenu> */}
            <NavBtnContainer>
              <NavBtn>
                <NavBtnLink to="/login">Log in</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/signup">Sign Up</NavBtnLink>
              </NavBtn>
            </NavBtnContainer>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
