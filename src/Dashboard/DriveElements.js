import styled from "styled-components";

export const HorLine = styled.div`
  color: grey;
  background-color: grey;
  height: 5px;
  z-index: 9999;
`;

export const HorLine2 = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    color: grey;
    background-color: grey;
    height: 100%;
    width: 5px;
    z-index: 9999;
  }
`;
