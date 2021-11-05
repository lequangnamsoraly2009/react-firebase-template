import React from 'react';
import SignOut from './authComponents/SignOut';
import {
  Button,
  Nav,
  Heading,
  Wrapper,
} from './styledComponents/styledComponentsIndex';

export default function MainNav() {
  return (
    <Nav>
      <Heading className="main-nav-heading">
        Heading text!
      </Heading>
      <Wrapper className="nav-buttons-wrapper">
        <Button
        // onClick={}
        >
          Button text!
        </Button>
        <SignOut />
      </Wrapper>
    </Nav>
  );
};
