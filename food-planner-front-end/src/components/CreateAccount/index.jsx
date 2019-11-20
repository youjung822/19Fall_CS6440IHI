import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

import { Wrapper, Title, Fields, Content, Fail, ChipsWrapper } from './styles';
import paths from '../../lib/paths';
import { setCookie } from '../../lib/cookies';
import { createAccount } from '../../lib/createAccount';
import { Select, Chips } from '../';

import { ALLERGIES } from '../../lib/constants';

const suggestions = ALLERGIES.map(suggestion => ({
  value: suggestion,
  label: suggestion
}));

export default function CreateAccount({
  allergies,
  toggleCondition,
  setLoggedInUser
}) {
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
      password,
      allergies
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

  const filteredSuggestions = suggestions.filter(
    ({ value }) => !allergies.includes(value)
  );

  const handleKeyPress = event => {
    if (event.key === 'Enter') onLogin();
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
            onKeyDown={handleKeyPress}
          />
          <TextField
            label="Last Name"
            margin="normal"
            variant="outlined"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            onKeyDown={handleKeyPress}
          />
          <TextField
            label="Username"
            margin="normal"
            variant="outlined"
            onChange={e => setUsername(e.target.value)}
            value={username}
            onKeyDown={handleKeyPress}
          />
          <TextField
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            onChange={e => setPassword(e.target.value)}
            value={password}
            onKeyDown={handleKeyPress}
          />
          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={e => setEmail(e.target.value)}
            value={email}
            onKeyDown={handleKeyPress}
          />
        </Fields>
        <Select
          label="Allergies"
          suggestions={filteredSuggestions}
          onChange={toggleCondition}
        />
        <ChipsWrapper>
          <Chips values={allergies} onDelete={toggleCondition} />
        </ChipsWrapper>
        {createError && <Fail>Failed to create account! Please try again</Fail>}
        <Button variant="contained" color="primary" onClick={onLogin}>
          {signingUp ? 'Signing up...' : 'Sign up'}
        </Button>
      </Content>
    </Wrapper>
  );
}
