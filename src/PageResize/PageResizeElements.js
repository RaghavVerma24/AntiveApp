import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import {BsArrowBarLeft, BsArrowLeft} from 'react-icons/bs'

export const PageNotFoundBtnWrapper = styled.div`
  display: flex;
  color: white;
  z-index: 999;
  width: auto;
  background-color: yellow;
`;

export const ArrowForwardError = styled(BsArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
  background: transparent;
`
export const ArrowRightError = styled(BsArrowBarLeft)`
  margin-left: 8px;
  font-size: 20px;
  background: transparent;
`
