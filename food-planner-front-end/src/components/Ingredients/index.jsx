import React from 'react';

import { Wrapper, Content, FilterHolder } from './styles';
import { Header, AsyncSelect, Chips } from '../';
import { lookupIngredients } from '../../lib/ingredients';

export default function Ingredients({ ingredients, toggleIngredient }) {
  const loadOptions = async (inputValue, callback) => {
    if (inputValue.length >= 3) {
      const suggestions = await lookupIngredients(inputValue);

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
        </FilterHolder>
        <Chips values={ingredients} onDelete={toggleIngredient} />
      </Content>
    </Wrapper>
  );
}
