import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container as ContainerBase } from "../PlainServices/misc/Layouts";
import logo from "../../assets/newlogo.png";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookIcon } from "feather-icons/dist/icons/instagram.svg";
import { FaDiscord as DiscordIcon } from "react-icons/fa";
import { FaLinkedin as LinkedIcon } from "react-icons/fa";

const Container = tw(ContainerBase)`bg-gray-800 text-gray-100
// -mx-8
-mb-8
w-full
`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-10 -mr-3`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const LinkI = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
function MinimalFooter() {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>ntive.</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">
              <LinkI>Home</LinkI>
            </Link>
            <Link to="/termsofservice" target="_blank">
              <LinkI>Terms Of Use</LinkI>
            </Link>
            <Link to="/privacypolicy" target="_blank">
              <LinkI>Privacy Policy</LinkI>
            </Link>
            <Link to="/login">
              <LinkI>Login</LinkI>
            </Link>
            <Link to="/signup">
              <LinkI>Signup</LinkI>
            </Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink
              href="https://www.instagram.com/antive.team/"
              target="_blank"
            >
              <FacebookIcon />
            </SocialLink>
            <SocialLink
              //  href="https://youtube.com"
              target="_blank"
            >
              <DiscordIcon />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/company/antivecompany/about/"
              target="_blank"
            >
              <LinkedIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            Antive. © 2020-{new Date().getFullYear()}. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
}

export default MinimalFooter;
