import React from 'react'
import Icon1 from '../../images/ToolUnity1.svg'
import Icon2 from '../../images/VarietyOptions.svg'
import Icon3 from '../../images/Security.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const ServicesLandingPage = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Benefits</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Tool Unity</ServicesH2>
          <ServicesP>
            All the tools needed to excel as a student are present!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Ease Access</ServicesH2>
          <ServicesP>
            All the tools are avalible as soon as you make an account!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Privacy</ServicesH2>
          <ServicesP>
            Antive doesn't share any data to second or third parties!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesLandingPage