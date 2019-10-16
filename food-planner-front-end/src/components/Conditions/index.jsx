import React from 'react';

import { Wrapper, Content } from './styles';
import { Header, Select, Chips } from '../';

const suggestions = [
  { label: 'Vegetarian' },
  { label: 'Diabetic' },
  { label: 'Peanut Allergy' },
  { label: 'Lactose Intolerant' },
  { label: 'Shellfish Allergy' },
  { label: 'Egg Allergy' },
  { label: 'Soybean Allergy' },
  { label: 'Fish Allergy' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
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
          label="Conditions"
          suggestions={filteredSuggestions}
          onChange={toggleCondition}
        />
        <Chips values={conditions} onDelete={toggleCondition} />
      </Content>
    </Wrapper>
  );
}
