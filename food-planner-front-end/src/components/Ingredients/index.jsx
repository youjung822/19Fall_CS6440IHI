import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Wrapper, Content, FilterHolder, FilterItem } from './styles';
import { Header, AsyncSelect, Chips } from '../';
import { lookupIngredients } from '../../lib/ingredients';

export default function Ingredients({
  ingredients,
  conditions,
  toggleIngredient
}) {
  const [filterByCondition, setFilterByCondition] = useState(false);

  const loadOptions = async (inputValue, callback) => {
    if (inputValue.length > 3) {
      const suggestions = await lookupIngredients(
        inputValue,
        filterByCondition ? conditions : null
      );

      const filteredSuggestions = suggestions.filter(
        ({ value }) => !ingredients.includes(value)
      );

      callback(filteredSuggestions);
    }
  };

  return (
    <Wrapper>
      <Header>My Ingredients</Header>
      <Content>
        <FilterHolder>
          <AsyncSelect
            label="Ingredients"
            loadOptions={loadOptions}
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
              label="Filter by my allergies"
            />
          </FilterItem>
        </FilterHolder>
        <Chips values={ingredients} onDelete={toggleIngredient} />
      </Content>
    </Wrapper>
  );
}
