import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

import { Wrapper, Title, Fields, Content, Fail } from './styles';
import paths from '../../lib/paths';
import { setCookie } from '../../lib/cookies';
import { createAccount } from '../../lib/createAccount';

export default function Login({ setLoggedInUser }) {
  const [loggedOn, setLoggedOn] = useState(false);
  const [signingUp, setSigningUp] = useState(false);
  const [createError, setCreateError] = useState(false);

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onLogin = async () => {
    setCreateError(false);
    setSigningUp(true);
    const userInfo = await createAccount(
      firstName,
      lastName,
      email,
      username,
      password
    );

    if (userInfo) {
      const name = `${firstName} ${lastName}`;
      setCookie('username', name);
      setLoggedInUser(name);
      setLoggedOn(true);
    } else {
      setCreateError(true);
    }

    setSigningUp(false);
  };

  return (
    <Wrapper>
      {loggedOn && <Redirect to={paths.allergies} />}

      <Content>
        <Title>Sign up</Title>
        <Fields>
          <TextField
            label="First Name"
            margin="normal"
            variant="outlined"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
          <TextField
            label="Last Name"
            margin="normal"
            variant="outlined"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
          <TextField
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </Fields>
        <Button variant="contained" color="primary" onClick={onLogin}>
          {signingUp ? 'Signing up...' : 'Sign up'}
        </Button>
        {createError && <Fail>Failed to create account! Please try again</Fail>}
      </Content>
    </Wrapper>
  );
}
