import React from 'react';

import { Wrapper, Content } from './styles';
import { Header, Select, Chips } from '../';

const suggestions = [
  'Dairy',
  'Egg',
  'Gluten',
  'Grain',
  'Peanut',
  'Seafood',
  'Sesame',
  'Shellfish',
  'Soy',
  'Sulfite',
  'Tree Nut',
  'Wheat'
].map(suggestion => ({
  value: suggestion,
  label: suggestion
}));

export default function Conditions({ conditions, toggleCondition }) {
  const filteredSuggestions = suggestions.filter(
    ({ value }) => !conditions.includes(value)
  );

  return (
    <Wrapper>
      <Header>My Conditions</Header>
      <Content>
        <Select
          label="Allergies"
          suggestions={filteredSuggestions}
          onChange={toggleCondition}
        />
        <Chips values={conditions} onDelete={toggleCondition} />
      </Content>
    </Wrapper>
  );
}
