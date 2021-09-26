//React Shit
import React, { lazy } from "react";

//Styling import
import styled from "styled-components";

//Component Import
import Slider from "react-slick";

//Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

//Slick Styling
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Testimonials!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Having Antive as a primary tool has really helped me stay on top of busy schedule!"
            name="Justin Lau"
            image="Justin"
          />

          <Card
            text="Antive has a great vault. I love using this feauture because it's convenient and easy to use."
            name="Param Thakkar"
            image="Param"
          />

          <Card
            text="Using Antive as a main organizer has increase my productivity, the ease and variety of tools helped me fix up my time management skills."
            name="Andrews Sterling"
            image="randomguy"
          />

          <Card
            text="I just started using Antive and I feel as if I am part of a greater community, the chat feature lets me connect with others or ask for help/advice."
            name=""
            image="Kopu"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
