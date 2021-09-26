import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
  vertical-align: center;
  align-items: center;
`;

export const FooterWrap = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  background: transparent;
`;
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
    background: transparent;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  background: transparent;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    background: transparent;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  background: transparent;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    background: transparent;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  // margin-bottom: 16px;
  background: transparent;
  align-items: center;
  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  background: transparent;
  align-items: center;
  &:hover {
    color: #01bf71;
    transition: all 0.3s ease-in-out;
    background: transparent;
  }
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  background: transparent;
  align-items: center;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  background: transparent;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    background: transparent;
  }
`;

export const SocialLogo = styled(Link)`
  color: #edeeee;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  // margin-bottom: 16px;
  font-weight: bold;
  background: transparent;
  &:hover {
    color: #fff;
    font-size: 1.6rem;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;
export const WebsiteRights = styled.small`
  color: #edeeee;
  // margin-bottom: 16px;
  background: transparent;
  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  // justify-content: space-between;
  gap: 20px;
  align-items: center;
  vertical-align: middle;
  // width: 240px;
  background: transparent;
`;
export const SocialIconLink = styled.a`
  color: #edeeee;
  font-size: 24px;
  background: transparent;
  &:hover {
    color: #fff;
    font-size: 27px;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
`;

export const LegalStuff = styled.div`
  // margin-left: -4rem;
  align-items: center;
  text-align: center;
  background-color: transparent;
`;

export const PrivacyPolicy = styled(Link)`
  color: #edeeee;
  font-size: 10px;
  padding-left: 10px;
  &:hover {
    text-decoration: underline;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
`;

export const TermsOfService = styled(Link)`
  color: #edeeee;
  font-size: 10px;
  padding-right: 10px;
  &:hover {
    text-decoration: underline;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
`;
