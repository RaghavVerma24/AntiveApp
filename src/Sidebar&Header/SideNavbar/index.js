import React, { useState, useEffect, useRef, Component } from "react";
import {
  Nav,
  NavIcon,
  SidebarNav,
  SidebarWrap,
  NavLogo,
  ProfileEmail,
  EmailShown,
  NavIconPfp,
  LogoutBtnWrapper,
  LogoutRoute,
  ErrorMSG,
  NavIconTrashPfp,
  AllowScroll
} from "./SideElements";
import { BiDownArrow, BiCog, BiCaretDown } from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { CgProfile, CgTrash } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SideMenu";
import { IconContext } from "react-icons/lib";
import { useAuth } from "../../Signin/context/AuthContext";
import { useHistory, Link } from "react-router-dom";
import "./SideNavBar.css";
import "../Header/HeaderComponent.css";
// import db, { firebase, auth } from "../../Signin/firebase";
//redux
// import { useSelector, useDispatch } from "react-redux";

const SideNavBar = ({ userProfile }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  // const [loading, setLoading] = useState(false);
  // const [showUnfollow, setShowUnfollow] = useState(false);
  // const [showMore, setShowMore] = useState(false);
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Nav>
        <IconContext.Provider value={{ color: "#fff" }}>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </IconContext.Provider>
        <NavLogo to="/dashboard">Antive.</NavLogo>
        <ErrorMSG>
          {error && <div className="errordashboard">{error}</div>}
        </ErrorMSG>
        <IconContext.Provider value={{ color: "#EDEEEE" }}>
          <NavItem icon={<CgProfile />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </IconContext.Provider>
        {/* <IconContext.Provider value={{ color: "#FF7C5D" }}> */}
        <ProfileEmail>
          {/* <EmailShown><NavIconPfp><CgProfile /></NavIconPfp>{currentUser.displayName || currentUser.email}</EmailShown> */}
          <EmailShown>
            <NavIconPfp>
              <CgProfile />
            </NavIconPfp>
            {currentUser.displayName ||
              currentUser.email.substring(
                0,
                currentUser.email.lastIndexOf("@")
              )}
          </EmailShown>
        </ProfileEmail>
        {/* </IconContext.Provider> */}
      </Nav>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <AllowScroll>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
              <LogoutBtnWrapper onClick={handleLogout}>
                <LogoutRoute>
                  <logoutIcon>
                    <BiLogOut />
                  </logoutIcon>
                  Log Out
                </LogoutRoute>
              </LogoutBtnWrapper>
            </AllowScroll>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
  function NavbarComponent(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }

  function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
      <li className="nav-item">
        <a className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>

        {open && props.children}
      </li>
    );
  }

  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    const { currentUser } = useAuth();

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    function DropdownItem(props) {
      return (
        <a
          className="menu-item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }

    return (
      <div
        className="dropdown"
        style={{ height: menuHeight }}
        ref={dropdownRef}
      >
        <div className="menu">
          <DropdownItem>{currentUser.email}</DropdownItem>
          <Link to="/update-profile">
            <DropdownItem leftIcon={<BiCog />}>Settings</DropdownItem>
          </Link>
        </div>
      </div>
    );
  }
};

export default SideNavBar;
