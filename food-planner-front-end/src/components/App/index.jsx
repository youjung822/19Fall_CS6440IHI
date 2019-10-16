import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Wrapper, NavWrapper, Content } from './styles';

import { SideNav, Conditions, Ingredients, Recipes } from '../';

import paths from '../../lib/paths';

const toggleList = (list, val) => {
  const copy = [...list];

  if (!list.includes(val)) copy.push(val);
  else copy.splice(copy.indexOf(val), 1);

  return copy;
};

export default function App() {
  const [conditions, setConditions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const toggleCondition = value => {
    setConditions(toggleList(conditions, value));
  };
  const toggleIngredient = value => {
    setIngredients(toggleList(ingredients, value));
  };

  return (
    <Wrapper>
      <NavWrapper>
        <SideNav />
      </NavWrapper>
      <Content>
        <Switch>
          <Route
            path={paths.conditions}
            exact
            render={props => (
              <Conditions
                {...props}
                conditions={conditions}
                toggleCondition={toggleCondition}
              />
            )}
          />
          <Route
            path={paths.ingredients}
            exact
            render={props => (
              <Ingredients
                {...props}
                conditions={conditions}
                ingredients={ingredients}
                toggleIngredient={toggleIngredient}
              />
            )}
          />
          <Route
            path={paths.recipes}
            exact
            render={props => (
              <Recipes
                {...props}
                conditions={conditions}
                ingredients={ingredients}
              />
            )}
          />
        </Switch>
      </Content>
    </Wrapper>
  );
}
