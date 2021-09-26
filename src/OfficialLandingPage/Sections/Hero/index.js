//React shit
import { Link as LinkR } from "react-router-dom";
import React, { useState } from "react";

//Styles
import styled, { keyframes } from "styled-components";
// import { ArrowForward, ArrowRight } from "../../../LandingPage/components/Hero/HeroElements";

//Assets
import pinkBlob from "../../assets/LogoBlob.png";
import purpleBlob from "../../assets/NavbarBlob.png";
import whiteBlob from "../../assets/BgBlob.png";
import arrow from "../../assets/Arrow Right.svg";
import Mobile from "../../assets/HeroImage.svg";

//Icons
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #090e14;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 6;
`;
const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;
const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(3.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 5;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: #edeeee;
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #9e32f7;
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: lightgrey;
`;

const CTA = styled(LinkR)`
  // background-color: var(--white);
  // width: 100px;
  // height: 50px;
  gap: 20px;
  color: #edeeee;
  // padding: 0.5rem 5rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    // transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    background: #edeeee;
    color: #090e14;
    border: 1px solid #1a202c;
    padding: 0.2rem 0.8rem;
  }
  &:active {
    transform: scale(0.9);
  }
`;

const ArrowForward = styled(MdArrowForward)`
  // margin-left: 8px;
  font-size: 1px;
  background: transparent;
`;
const ArrowRight = styled(MdKeyboardArrowRight)`
  // margin-left: 8px;
  font-size: 10px;
  background: transparent;
`;

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HomeSection id="home">
      <Blobs>
        {/* <PinkBlob>
          <img src={pinkBlob} alt="" width="400" height="400" />{" "}
        </PinkBlob> */}
        <WhiteBlob>
          <img src={purpleBlob} alt="" width="400" height="400" />
        </WhiteBlob>
        {/* <PurpleBlob>
          <img src={purpleBlob} alt="" width="400" height="400" />
        </PurpleBlob> */}
      </Blobs>

      <MainContent id="home">
        <Lb id="leftBlock">
          <Topic>
            <Circle />
            <span>Organization Tool</span>
          </Topic>
          <Title>Managment Tools For Success.</Title>
          <SubText>
            Get organized with the free tools provided by Antive to manage your
            busy lives.
          </SubText>
          <CTA to="/signup">
            Get Started
            {/* <img src={arrow} alt="cta" width="100" height="100" /> */}
          </CTA>
        </Lb>

        <MobileSvg
          src={Mobile}
          alt="Mobile Svg"
          srcset=""
          width="400"
          height="400"
        />
      </MainContent>
    </HomeSection>
  );
};

export default HeroSection;
