import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect, Link } from 'react-router-dom';

import { Wrapper, Title, Fields, Content, Creds, Fail, SignUp } from './styles';
import paths from '../../lib/paths';
import { setCookie } from '../../lib/cookies';
import { passwordLogin } from '../../lib/login';

export default function Login({ setLoggedInUser }) {
  const [loggedOn, setLoggedOn] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loginError, setLoginError] = useState(false);

  const onLogin = async () => {
    setLoginError(false);
    setLoggingIn(true);
    const userInfo = await passwordLogin(username, password);

    if (userInfo) {
      const { firstName, lastName } = userInfo;
      const name = `${firstName} ${lastName}`;
      setCookie('username', name);
      setLoggedInUser(name);
      setLoggedOn(true);
    } else {
      setLoginError(true);
    }

    setLoggingIn(false);
  };

  return (
    <Wrapper>
      {loggedOn && <Redirect to={paths.allergies} />}

      <Content>
        <Title>My Food Planner</Title>
        <Fields>
          <TextField
            id="outlined-password-input"
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </Fields>
        <Button variant="contained" color="primary" onClick={onLogin}>
          {loggingIn ? 'Logging in...' : 'Login'}
        </Button>
        {loginError && <Fail>Login Failed!</Fail>}
        <SignUp>
          Don't have an account?{' '}
          <Link
            to={paths.createAccount}
            style={{
              textDecoration: 'none'
            }}
          >
            Sign up!
          </Link>
        </SignUp>
        <Creds>
          <div>Login in with example creds:</div>
          <div>Username: test, Password: test</div>
        </Creds>
      </Content>
    </Wrapper>
  );
}
