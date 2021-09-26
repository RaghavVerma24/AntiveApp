import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
// import "../../../../src/tailwind.config"
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "./misc/HeadingMisc";
import { SectionDescription } from "./misc/Typography";
import { Container, ContentWithPaddingXl } from "./misc/Layouts";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full text-primary-900`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12  max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold text-primary-900`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`
);

function SingleCol({
  subheading = "",
  heading = "You have Questions ?",
  description = "Lets get your questions out of the way!",
  faqs = [
    {
      question: "Is any data saved on a private server ?",
      answer:
        "No, none of the images, videos or documents being uploaded in the drive or chat get saved in a private server. They are saved in Google Firestore to be called back and displayed in front of you.",
    },
    {
      question: "Why is the chat not working ?",
      answer:
        "The chat is made using the ChatEngine API where it only allows us to able to hold 25 user on the free plan. Once we get sponsorships, we will upgrade to a higher plan!",
    },
    {
      question: "Why can't I sign in with Google ?",
      answer:
        "Using the Continue with Google option on login will need you to do the authentication twice for the utmost security.",
    },
    {
      question: "What happens if I forget my password ?",
      answer:
        "Being able to reach your account is an important priority; there is an option on the right side under each, Login and Signup page.",
    },
  ],
}) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={
                      activeQuestionIndex === index ? "open" : "collapsed"
                    }
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      {/* <DecoratorBlob1/>
      <DecoratorBlob2 /> */}
    </Container>
  );
}

export default SingleCol;
