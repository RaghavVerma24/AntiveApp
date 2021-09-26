import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#090E14' : '#090E14')};
  width: 100%;
  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  width: 100% auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  background: transparent;
`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  background: transparent;
  gap: 20%;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 768px) {
    gap: 0;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  background: transparent;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  background: transparent;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  background: transparent;
`
export const TopLine = styled.p`
  color: #5956E9;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  background: transparent;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
  background: transparent;
  @media screen and (max-width: 480px) {
    font-size: 32px;
    background: transparent;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  background: transparent;
  color: ${({darkText}) => (darkText ? 'grey' : 'grey')};
`
export const BtnWrap = styled.div`
  display:flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  background: transparent;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  background: transparent;
`;

export const ToolsTitle = styled.div`
font-size: 60px;
`