import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const Button = styled(LinkR)`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? "#FF7C5D" : "#FF4C5D")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 28px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;