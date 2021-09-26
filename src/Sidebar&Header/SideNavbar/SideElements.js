import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background: #081225;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 100vw;
`;

export const NavLogo = styled(Link)`
  color: #edeeee;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  background: transparent;
`;

export const ProfileEmail = styled.div`
  margin-left: 100vh;
  padding: 0px 10px 0px 0px;
  border-radius: 10px;
  background-color: #1a202c;
  font-weight: bold;
  letter-spacing: 1.5px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  color: white;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    background-color: transparent;
  }
`;

export const NavIconPfp = styled.div`
  font-size: 1.25rem;
  background: #0A0B10;
  padding: 10px 20px;
  border-radius: 10px 0px 0px 10px;
  height: 100%;
  vertical-align: center;
  justify-content: center;
  align-items: center
  position: relative;
  margin-right: 10px;
  border: 1px;
  // border-color: #FF7C5D;
  color: #EDEEEE;
`;

export const NavIconTrashPfp = styled.div`
  &:hover {
    // font-size: 1.25rem;
    // padding: 10px 20px;
    // border-radius: 10px 10px 10px 10px;
    // height: 100%;
    // vertical-align: center;
    // justify-content: center;
    // align-items: center
    // position: relative;
    // margin-right: 10px;
    // border: 1px;
    // border-color: white;
    // font: white;
    color: #ff7c5d;
  }
`;

export const ErrorMSG = styled.div`
  display: flex;
  margin-left: 32%;
  justify-content: center;
  text-align: center;
  background-color: white;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  // padding: 10px 20px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 10%;
  }

  @media screen and (max-width: 411px) {
    display: none;
    background: transparent;
  }

  @media screen and (max-width: 445px) {
    display: none;
    background: transparent;
  }
`;

export const EmailShown = styled.p`
  display: flex;
  align-items: center;
  background: transparent;
  gap: 10px;
  // margin-right: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const LogoutBtnWrapper = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 60px;

  @media screen and (max-height: 480px) {
    margin-top: 10px;
  }
`;
export const LogoutRoute = styled(Link)`
  border-radius: 0px 12px 12px 0px;
  background: #632ce4;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  text-align: center;
  align-items: center;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3f8cff;
  }
`;

export const SidebarNav = styled.nav`
  background: #111827;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 99999999;
  overflow-y: scroll;
`;

export const SidebarWrap = styled.div`
  width: 100%;
  
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: #808191;
  // justify-content: space-between;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
  &.active {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 0rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: auto;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

export const AllowScroll = styled.div`
  overflow-y: scroll;
  text-align: center;
`;
