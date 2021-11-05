import React from 'react';
import StripeLogo from '../../images/stripe-logo.png'
import {
  Heading,
  Image,
  Text,
  Wrapper,
} from '../styledComponents/styledComponentsIndex';
import BillingInfoSection from './BillingInfoSection';

export default function BillingInfo() {
  return (
    <Wrapper>
      <Heading className="center">Billing Info</Heading>
      <Wrapper className="billing-info-wrapper">
        <BillingInfoSection
          sectionHeading="No contracts."
        >
          <Text className="light">Cancel any time</Text>
        </BillingInfoSection>

        <BillingInfoSection
          sectionHeading="Secure Payments Powered By"
        >
          <Image className="stripe-logo" src={StripeLogo} alt="Stripe logo" />
        </BillingInfoSection>

        <BillingInfoSection
          sectionHeading="Billing Info Section"
        >
          <Text className="light">Simple software, easy to get started</Text>
          <Text className="light">Pre-loaded data or upload your own</Text>
        </BillingInfoSection>
      </Wrapper>
    </Wrapper>
  );
};