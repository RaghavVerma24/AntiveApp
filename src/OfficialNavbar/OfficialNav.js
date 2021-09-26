//React Shit
import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

//All the svg files
import logoNav from "./assets/logo.svg";
import Home from "./assets/home-solid.svg";
import Team from "./assets/social.svg";
import Calender from "./assets/sceduled.svg";
import Projects from "./assets/starred.svg";
import Documents from "./assets/draft.svg";
import PowerOff from "./assets/power-off-solid.svg";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { useAuth } from "../Signin/context/AuthContext";
import NewLogo from "./assets/newlogo.png";

//Style
import "./OfficialNav.css";

//Icons
import { FiLogOut } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { ErrorMSG } from "../Sidebar&Header/SideNavbar/SideElements";
import { RiDashboardFill } from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import * as BiIcons from "react-icons/bi";

const Container = styled.div`
  position: fixed;
  z-index: 99;
  margin-top: 1.6rem;
  // background-color: #1A202C;
  border: none;
  .active {
    border-right: 4px solid white;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: #081225;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  // margin-top: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  // z-index: 99999999999999999999999999999999999999999999999;
  &::before,
  &::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: #081225;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #081225;
  padding: 2rem 0;
  position: absolute;
  top: 4rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
  overflow-y: scroll;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: white;
  width: 100%;
  // gap: 10px;
  align-items: center;
  height: 60px;
  // padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  // background-color: yellow;
  &:hover {
    border-right: 4px solid white;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "17rem" : "2rem")};
  // width: ${(props) => (props.clicked ? "auto" : "2rem")};
  height: ${(props) => (props.clicked ? "3rem" : "2rem")};
  z-index: 999999999999999999999999999999;
  // padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => (props.clicked ? "auto" : "0")};
  background-color: #010b1d;
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    height: 3rem;
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: grey;
    &:hover {
      color: white;
      font-size: 0.82rem;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  font-size: 20px;
  
  // gap: 10px;

    &:hover {
      border: none;
      cursor: pointer;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const LogoutIcon = styled(FiLogOut)`
  margin-left: auto;
  color: white;
`;

const ProfileIcon = styled(CgProfile)`
  background-color: none;
  font-size: 20px;
  margin-left: 0 auto;
  &:hover {
    height: 3rem;
    opacity: 50%;
    transition: all 0.3s ease-in-out;
  }
`;

const UpdateProfileLink = styled(Link)``;

const OfficialNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  const { logout } = useAuth();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  const [isShown, setIsShown] = useState(false);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
      // window.location.reload(false);
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Container>
        <Button clicked={click} onClick={() => handleClick()} />
        <SidebarContainer>
          <Logo>
            <img src={NewLogo} alt="logo" />
          </Logo>
          <SlickBar clicked={click}>
            <Link to="/dashboard"></Link>
            <Item
              onClick={() => setClick(false)}
              exact
              activeClassName="active"
              to="/dashboard"
            >
              <RiDashboardFill />
              <Text clicked={click}>Dashboard</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              to="/agenda"
            >
              <IoIcons.IoIosPaper />
              <Text clicked={click}>Agenda</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              to="/budget"
            >
              <FaIcons.FaMoneyCheck />
              <Text clicked={click}>Budget</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              to="/drive"
            >
              <BiIcons.BiLockAlt />
              <Text clicked={click}>Vault</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              to="/chat"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <IoIcons.IoMdPeople />
              <Text clicked={click}>Chat</Text>
            </Item>
          </SlickBar>
          <Profile clicked={profileClick} onClick={() => handleProfileClick()}>
            <ProfileIcon />

            <Details clicked={profileClick}>
              <Name>
                <h4>
                  {currentUser.displayName ||
                    currentUser.email.substring(
                      0,
                      currentUser.email.lastIndexOf("@")
                    )}
                </h4>

                <a>
                  <UpdateProfileLink to="/update-profile">
                    want to update profile?
                  </UpdateProfileLink>
                </a>
              </Name>

              <Logout onClick={handleLogout}>
                {/* <img src={PowerOff} alt="logout" /> */}
                <LogoutIcon />
              </Logout>
            </Details>
          </Profile>
        </SidebarContainer>
        <ErrorMSG>
          {error && <div className="errordashboard">{error}</div>}
        </ErrorMSG>
      </Container>
      {isShown && (
        <div className="HoverText">
          On Phone? Rotate to Landscape to create your first chat!
        </div>
      )}
    </>
  );
};

export default OfficialNav;
