import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

import { Wrapper, Title, Fields, Content, Creds } from './styles';
import paths from '../../lib/paths';
import { setCookie } from '../../lib/cookies';

export default function Login({ setLoggedInUser }) {
  const [loggedOn, setLoggedOn] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const onLogin = () => {
    setCookie('username', username);
    setLoggedInUser(username);
    setLoggedOn(true);
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
          Login
        </Button>
        <Creds>
          <div>Login in with example creds:</div>
          <div>Username: john, Password: doe</div>
        </Creds>
      </Content>
    </Wrapper>
  );
}
