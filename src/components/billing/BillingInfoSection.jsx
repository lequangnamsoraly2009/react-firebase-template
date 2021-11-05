import React from 'react';
import {
  Heading,
  Wrapper,
} from '../styledComponents/styledComponentsIndex';

export default function BillingInfoSection({ sectionHeading, children }) {
  return (
    <Wrapper className="billing-info-section-wrapper">
      <Heading className="center heading-2">{sectionHeading}</Heading>
      {children}
    </Wrapper>
  );
};