import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  PrivacyPolicy,
  TermsOfService,
  LegalStuff
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Antive.
            </SocialLogo>
            <WebsiteRights>
              Antive © 2006-{new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <LegalStuff>
              <TermsOfService to="/termsofservice" target="_blank">Terms Of Use</TermsOfService>
              <PrivacyPolicy to="/privacypolicy" target="_blank">Privacy Policy</PrivacyPolicy>
            </LegalStuff>

            <SocialIcons>
              <SocialIconLink
                href="https://www.instagram.com/antive.team/"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/leonardtlauenstein/"
                target="_blank"
                arial-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
