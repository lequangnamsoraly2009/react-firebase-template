import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/userSlice';
import {
  Button,
  Form,
  Heading,
  Input,
  Wrapper,
} from '../styledComponents/styledComponentsIndex';

export default function SignUp({ toggleShowSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const signUpNewUser = async (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      console.log('Please fill out all fields.');
      return;
    };

    if (password !== confirmPassword) {
      console.log('Passwords do not match.');
      return;
    };

    try {
      dispatch(signUp({
        submittedEmail: email,
        submittedPassword: password,
      }));
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <Wrapper className="sign-up">
      <Heading className="center">Sign Up</Heading>
      <Form
        className="space-children"
        onSubmit={signUpNewUser}
      >
        <Input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
        <Input
          autoComplete="new-password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
        <Input
          autoComplete="new-password"
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          placeholder="Confirm Password"
        />
        <Button type="submit">
          Sign Up
        </Button>
      </Form>
      <Button
        className="text-only toggle-auth-page"
        onClick={toggleShowSignUp}
        type="button"
      >
        Already have an account? Click here to sign In
      </Button>
    </Wrapper>
  );
};
