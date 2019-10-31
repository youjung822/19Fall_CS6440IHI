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
