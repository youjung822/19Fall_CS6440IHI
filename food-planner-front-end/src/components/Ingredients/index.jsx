import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Wrapper, Content, FilterHolder, FilterItem } from './styles';
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
  const [filterByCondition, setFilterByCondition] = useState(false);
  const filteredSuggestions = suggestions.filter(
    ({ value }) => !ingredients.includes(value)
  );

  return (
    <Wrapper>
      <Header>My Ingredients</Header>
      <Content>
        <FilterHolder>
          <Select
            label="Ingredients"
            suggestions={filteredSuggestions}
            onChange={toggleIngredient}
          />
          <FilterItem>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterByCondition}
                  onChange={() => setFilterByCondition(!filterByCondition)}
                  color="primary"
                  inputProps={{
                    'aria-label': 'condition checkbox'
                  }}
                />
              }
              label="Filter by my conditions"
            />
          </FilterItem>
        </FilterHolder>
        <Chips values={ingredients} onDelete={toggleIngredient} />
      </Content>
    </Wrapper>
  );
}
