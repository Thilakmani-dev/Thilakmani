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
          Myself Thilak Mani <br />
          Welcome you to my page
        </SectionTitle>
        <SectionText>
          I am a developer, who wants to learn, share everything he learned
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
