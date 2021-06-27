import React from 'react';
import { acomplishmentsData } from '../../constants/constants';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section>
    <SectionDivider /> <br />
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {acomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.award}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
