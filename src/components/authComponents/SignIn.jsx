import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/userSlice';
import {
  Button,
  Form,
  Heading,
  Input,
  Wrapper,
} from '../styledComponents/styledComponentsIndex';

export default function SignIn({ toggleShowSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitUserData = async (event) => {
    event.preventDefault();
    try {
      dispatch(signIn({
        submittedEmail: email,
        submittedPassword: password,
      }));
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <Wrapper className="sign-in">
      <Heading className="center">Welcome back!</Heading>
      <Form className="space-children" onSubmit={submitUserData}>
        <Input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
        <Button type="submit">
          Sign In
        </Button>
      </Form>
      <Button
        className="text-only toggle-auth-page"
        onClick={toggleShowSignUp}
        type="button"
      >
        New here? Click here to sign Up
      </Button>
    </Wrapper>
  );
};
