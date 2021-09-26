import styled from "styled-components";

//Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

const CARD = styled.div`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  background-color: #090e14;
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const TEXT = styled.h4`
  color: var(--white);
  padding: 0 calc(1rem + 1vw);
  margin-top: 30px;
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  color: var(--pink);
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;

const StarContainer = styled.div`
  margin-top: 5px;
  font-size: 20px;
  display: flex;
  color: gold;
`;

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <CARD>
      <Image img={Avatar} width="400" height="400" />
      <TEXT>
        <strong>“</strong>
        {text}
        <strong>”</strong>
      </TEXT>
      <NAME>{name}</NAME>
      <StarContainer>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </StarContainer>
    </CARD>
  );
};

export default Card;
