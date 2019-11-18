import React from 'react';

import { Wrapper, Content } from './styles';
import { Header, Select, Chips } from '../';

import { ALLERGIES } from '../../lib/constants';

const suggestions = ALLERGIES.map(suggestion => ({
  value: suggestion,
  label: suggestion
}));

export default function Conditions({ allergies, toggleCondition }) {
  const filteredSuggestions = suggestions.filter(
    ({ value }) => !allergies.includes(value)
  );

  return (
    <Wrapper>
      <Header>My Allergies</Header>
      <Content>
        <Select
          label="Allergies"
          suggestions={filteredSuggestions}
          onChange={toggleCondition}
        />
        <Chips values={allergies} onDelete={toggleCondition} />
      </Content>
    </Wrapper>
  );
}
