import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
  Heading,
  Wrapper,
} from '../styledComponents/styledComponentsIndex';

export default function AuthPage() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <Wrapper className="auth-page-wrapper">
      <Heading className="auth-page-heading">ClassLoops</Heading>
      {
        showSignUp ?
          <SignUp
            showSignUp={showSignUp}
            setShowSignUp={setShowSignUp}
            toggleShowSignUp={toggleShowSignUp}
          />
          :
          <SignIn
            showSignUp={showSignUp}
            setShowSignUp={setShowSignUp}
            toggleShowSignUp={toggleShowSignUp}
          />
      }
    </Wrapper>
  );
};