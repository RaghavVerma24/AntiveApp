import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "./misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings";
import { SectionDescription } from "./misc/Typography";
import { ReactComponent as QuoteIconBase } from "../PlainServices/images/quotes-l.svg";
import { ReactComponent as ArrowLeftIcon } from "../PlainServices/images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../PlainServices/images/arrow-right-3-icon.svg";
import Param from "../../assets/Param.jpg";
import Anujan from "../../assets/Kopu.jpg";
import Justin from "../../assets/Justin.jpg";

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(
  Container
)`-mx-8 px-8 bg-primary-700 text-gray-100 w-full`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)`text-primary-900`;
const Description = tw(
  SectionDescription
)`mx-auto text-center text-primary-900`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`;
const QuoteContainer = tw.div`relative`;
const QuoteIcon = tw(
  QuoteIconBase
)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-primary-500`;
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`;
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`;
const CustomerImage = tw.img`w-16 h-16 rounded-full`;
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`;
const CustomerName = tw.span`text-lg font-semibold`;
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`;
const ControlsContainer = tw.div`sm:ml-auto flex`;
const ControlButton = styled.button`
  ${tw`text-primary-900 hover:text-primary-600 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0 bg-transparent cursor-pointer`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

function NewTestTestimonial({
  subheading = "",
  heading = "Testimonials",
  description = "Here's are some statements from our users!",
  testimonials = [
    {
      customerName: "Param Thakkar",
      customerProfile: "SHAD Alumni",
      imageSrc: Param,
      quote:
        "I just started using Antive and I feel as if I am part of a greater community, the chat feature lets me connect with others or ask for help/advice.",
    },
    {
      customerName: "Justin Lau",
      customerProfile: "Programmer",
      imageSrc: Justin,
      quote:
        "Using Antive as a main organizer has increase my productivity, the ease and variety of tools helped me fix up my time management skills.",
    },
    {
      customerName: "Tom Helix",
      customerProfile: "Mechanical Engineer",
      imageSrc: Anujan,
      quote:
        "Antive has a great vault. I love using this feauture because it's convenient and easy to use.",
    },
  ],
}) {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <TestimonialsSlider arrows={false} ref={setSliderRef}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>❝ {testimonial.quote} ❞</Quote>
              </QuoteContainer>
              <CustomerInfoAndControlsContainer>
                <CustomerImage src={testimonial.imageSrc} />
                <CustomerNameAndProfileContainer>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerProfile>
                    {testimonial.customerProfile}
                  </CustomerProfile>
                </CustomerNameAndProfileContainer>
                <ControlsContainer>
                  <ControlButton onClick={sliderRef?.slickPrev}>
                    <ArrowLeftIcon className="icon" />
                  </ControlButton>
                  <ControlButton>
                    <ArrowRightIcon
                      className="icon"
                      onClick={sliderRef?.slickNext}
                    />
                  </ControlButton>
                </ControlsContainer>
              </CustomerInfoAndControlsContainer>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
}

export default NewTestTestimonial;
