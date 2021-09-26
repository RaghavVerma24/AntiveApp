import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  OverlayerBtnWrapper
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        {/* <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>Tools</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Benefits</SidebarLink>
        </SidebarMenu> */}
        <OverlayerBtnWrapper>
          <SideBtnWrap>
            <SidebarRoute to="/signup">Sign Up</SidebarRoute>
          </SideBtnWrap>
          <SideBtnWrap>
            <SidebarRoute to="/login">Log In</SidebarRoute>
          </SideBtnWrap>
        </OverlayerBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
