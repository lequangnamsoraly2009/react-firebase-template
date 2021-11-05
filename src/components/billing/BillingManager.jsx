import React from 'react';
import PricingOptions from './PricingOptions';
import BillingInfo from './BillingInfo';
import { Wrapper } from '../styledComponents/styledComponentsIndex';

export default function BillingManager() {
  return (
    <Wrapper className="billing-manager-wrapper">
      <PricingOptions />
      <BillingInfo />
    </Wrapper>
  );
};