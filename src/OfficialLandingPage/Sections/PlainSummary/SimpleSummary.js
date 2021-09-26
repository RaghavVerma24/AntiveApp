import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import mockupImageSrc from "../../assets/Summary.svg";
import {
  ContentWithPaddingXl,
  Container as ContainerBase,
} from "./misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings";

const Container = tw(ContainerBase)`bg-primary-700 w-full`;
const Content = tw(ContentWithPaddingXl)``;
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center`;

const ColumnContainer = tw.div`max-w-2xl`;
const TextContainer = tw(ColumnContainer)`md:ml-12 lg:ml-16 md:order-last`;
const Text = tw(
  SectionHeading
)`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-black leading-relaxed text-primary-900`;
const Subheading = tw(SubheadingBase)`text-primary-600 font-black mb-4 tracking-wider`;

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center sm:block`;
const Link = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }
  span {
    ${tw`leading-none inline-block`}
  }
`;

const ImageContainer = tw(
  ColumnContainer
)`mt-16 lg:mt-0 lg:ml-16 flex justify-end`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
// const DecoratorBlob1 = tw(SvgDecoratorBlob1)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-gray-800 opacity-50`
// const DecoratorBlob2 = tw(SvgDecoratorBlob1)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-gray-800 opacity-50`
function SimpleSummary({
  subheading = "SUMMARY",
  text = "We help our users organize themselves, to adapt and stay on top of their busy lives, especially in this global pandemic, in an increasingly worrisome society. Students will be able to keep a track of their activities and content on a safe and secure platform.",
  link1Text = "App Store",
  link1Url = "http://apple.com",
  //   link1IconSrc = appleIconImageSrc,
  link2Text = "Google Play",
  link2Url = "http://play.google.com",
  //   link2IconSrc = googlePlayIconImageSrc,
  pushDownFooter = false,
  imageSrc = mockupImageSrc,
}) {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <Content>
        <Row>
          <TextContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Text>{text}</Text>
          </TextContainer>
          <ImageContainer>
            <img src={imageSrc} alt="" tw="w-64" />
          </ImageContainer>
        </Row>
      </Content>
    </Container>
  );
}

export default SimpleSummary;
