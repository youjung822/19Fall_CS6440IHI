import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

import { Wrapper, Title, Fields, Content, Creds } from './styles';
import paths from '../../lib/paths';

export default function Login() {
  const [loggedOn, setLoggedOn] = useState(false);

  const onLogin = () => {
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
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
          />
        </Fields>
        <Button variant="contained" color="primary" onClick={onLogin}>
          Login
        </Button>
        <Creds>
          <div>Login in with example creds:</div>
          <div>Username: test, Password: test</div>
        </Creds>
      </Content>
    </Wrapper>
  );
}
