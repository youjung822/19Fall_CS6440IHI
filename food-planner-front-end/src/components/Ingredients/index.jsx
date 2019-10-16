import React from 'react';

import { Wrapper, Content } from './styles';
import { Header, Select, Chips } from '../';

const suggestions = [
  { label: 'Eggs' },
  { label: 'Bacon' },
  { label: 'Flour' },
  { label: 'Milk' },
  { label: 'Sugar' },
  { label: 'Chives' },
  { label: 'Onions' },
  { label: 'Beef' },
  { label: 'Chicken' },
  { label: 'Water' },
  { label: 'Peppers' },
  { label: 'Salt' },
  { label: 'Cheddar Cheese' },
  { label: 'Butter' },
  { label: 'Heavy Whipping Cream' },
  { label: 'Garlic' },
  { label: 'Potatoes' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

export default function Ingredients({ ingredients, toggleIngredient }) {
  const filteredSuggestions = suggestions.filter(
    ({ value }) => !ingredients.includes(value)
  );

  return (
    <Wrapper>
      <Header>My Ingredients</Header>
      <Content>
        <Select
          label="Ingredients"
          suggestions={filteredSuggestions}
          onChange={toggleIngredient}
        />
        <Chips values={ingredients} onDelete={toggleIngredient} />
      </Content>
    </Wrapper>
  );
}
