import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#141b23' : 'transparent')};
  height: 80px;
  width: 100%;
  margin-top: -80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:999; 
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  background: transparent;
`
export const NavLogo = styled(LinkR) `
  color: #EDEEEE;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  background: transparent;
`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    background: transparent;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  background: transparent;

  @media screen and (max-width: 768px) {
    display: none;
    background: transparent;
  }
`
export const NavItem = styled.li`
  height: 80px;
  background: transparent;
`
export const NavLinks = styled(LinkS)`
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  background: transparent;
  &.active {
    border-bottom: 3px solid #FF7C5D;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  background: transparent;
  // float: right;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 10px;
  background: #081225;
  white-space: nowrap;
  padding: 10px 26px;
  color: #EDEEEE;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: 2px solid #EDEEEE;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    border: 2px solid #081225;
  }
`

export const NavBtnContainer = styled.nav`
float: right;
display: flex;
gap: 2rem;
align-items: center;
`

export const AntiveLogo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`