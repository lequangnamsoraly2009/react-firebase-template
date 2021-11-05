import React from 'react';
import { firebaseAuth } from '../../firebase';
import createCheckoutSession from '../../utils/createCheckoutSession';
import {
  Button,
  Heading,
  Text,
  Wrapper,
} from '../styledComponents/styledComponentsIndex';

export default function PricingOption({
  pricingOptionHeading,
  pricingOptionText,
  pricingOptionValue,
}) {
  const currentUserID = firebaseAuth.currentUser.uid;

  const onPricingOptionClick = (event) => {
    createCheckoutSession(event.target.value, currentUserID);
  };

  return (
    <Wrapper className="pricing-option-wrapper">
      <Heading>{pricingOptionHeading}</Heading>
      <Text>{pricingOptionText}</Text>
      <Button
        onClick={onPricingOptionClick}
        value={pricingOptionValue}
      >
        Get Started
      </Button>
    </Wrapper>
  );
};