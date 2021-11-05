import React from 'react';
import {
  Heading,
  Wrapper,
} from '../styledComponents/styledComponentsIndex';
import PricingOption from './PricingOption';

export default function PricingOptions() {
  return (
    <Wrapper>
      <Heading className="center">Pricing Options</Heading>
      <Wrapper className="pricing-options-wrapper">
        <PricingOption
          pricingOptionHeading="1 month"
          pricingOptionText="$29.99 every month"
          pricingOptionValue="price_1JlgLaEQppdPQR1BHoepQL9j"
        />
        <PricingOption
          pricingOptionHeading="3 months"
          pricingOptionText="$59.99 every 3 months"
          pricingOptionValue="price_1Jm042EQppdPQR1BFtXfPdSg"
        />
        <PricingOption
          pricingOptionHeading="6 months"
          pricingOptionText="$89.99 every 6 months"
          pricingOptionValue="price_1Jm04PEQppdPQR1B940VZj9w"
        />
        <PricingOption
          pricingOptionHeading="12 months"
          pricingOptionText="$179.99 every 12 months"
          pricingOptionValue="price_1Jm04nEQppdPQR1BAnfAAR1a"
        />
      </Wrapper>
    </Wrapper>
  );
};