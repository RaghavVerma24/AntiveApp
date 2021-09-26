//React shit
import React, { useState, useEffect } from "react";

//Import Sections
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import ServicesLandingPage from "../../LandingPage/components/Services";
import Info from "../../LandingPage/components/Info";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../../LandingPage/components/Info/Data";
import SingleCol from "../components/FAQS/SingleCol";
import TwoColService from "../Sections/PlainServices/TwoColWithButton/TwoColWithButton";
import TwoColSingleFeature from "../Sections/PlainServices/TwoColSingleFeatureWithStats2/TwoColSingleFeatureWithStats2";
import TwoColHorizontalFeatures from "../Sections/PlainServices/TwoColWithTwoHorizontalFeaturesAndButton/TwoColWithTwoHorizontalFeaturesAndButton";
import TwoColHorizontalFeaturestwo from "../Sections/PlainServices/TwoColWithTwoHorizontalFeaturesAndButton/TwoColHorizontalFeaturestwo";
import TwoColHorizontalFeaturesthree from "../Sections/PlainServices/TwoColWithTwoHorizontalFeaturesAndButton/TwoColHorizontalFeaturesthree";
import TwoColHorizontalFeaturesfour from "../Sections/PlainServices/TwoColWithTwoHorizontalFeaturesAndButton/TwoColHorizontalFeaturesfour";
import NewTestTestimonial from "../Sections/PlainTestimonials/TwoColRate+Img";
import SimpleSummary from "../Sections/PlainSummary/SimpleSummary";

const Container = styled.div``;

const Infoonecontainer = styled.div`
  width: 100vw;
`;
const Infotwocontainer = styled.div`
  width: 100vw;
  margin-top: -9rem;
`;
const Infothreecontainer = styled.div`
  width: 100vw;
  margin-top: -9rem;
`;
const Infofourcontainer = styled.div`
  background-color: yellow;
  width: 100vw;
  margin-top: -9rem;
`;

const OfficialHome = () => {
  return (
    <Container>
      <HeroSection />
      {/* <About /> */}
      <SimpleSummary />
      <TwoColHorizontalFeatures />
      <TwoColHorizontalFeaturestwo />
      <TwoColHorizontalFeaturesthree />
      <TwoColHorizontalFeaturesfour />
      {/* <Testimonials /> */}
      <NewTestTestimonial />
      <ServicesLandingPage />
      <SingleCol />
    </Container>
  );
};

export default OfficialHome;
