import styled from "styled-components";

export const ProfileEmailAgenda = styled.div`
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-top: 7px;
  margin-right: 20px;
  position: absolute;
  right: 0;
  @media screen and (max-width: 1170px) {
    background-color: transparent;
  }
`;

export const NavIconPfpAgenda = styled.div`
  display: none;

  @media screen and (max-width: 1170px) {
    display: block;
    top: -1px;
    position: absolute;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.25rem;
    background: transparent;
  }

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

export const EmailShownAgenda = styled.p`
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 15px;

  @media screen and (max-width: 1170px) {
    display: none;
  }
`;

export const ProfileEmailAgendaSidebar = styled.div`
  font-weight: bold;
  // padding: 10px 20px;
  // border-radius: 20px;
  // background-color: #ff7c5d;
  letter-spacing: px;
  margin-top: -70px;
  margin-bottom: 40px;
  margin-right: 10px;
  font-size: 18px;
  // position: absolute;
  right: 0;
  // @media screen and (max-width: 1170px) {
  //   background-color: transparent;
  // }
`;

export const EmailShownAgendaSidebar = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 15px;
  color: #ff7c5d;
  padding-top: 10px;
  padding-bottom: 10px;

  // @media screen and (max-width: 1170px) {
  //   display: none;
  // }
`;

export const Searchbar = styled.div`
position: relative;
margin-left: auto;
margin-right: -140px;
margin-top: -34px;
font-size: 15px;
padding: 10px 10px 10px 10px;
border-left: none;

@media screen and (max-width: 500px) {
  display: none;
}
`
