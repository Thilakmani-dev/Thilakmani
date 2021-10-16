import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi!, Myself Thilak Mani <br />
          Developer
        </SectionTitle>
        <SectionText>
          I always wants to learn new & different concepts, share something he
          learned
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
