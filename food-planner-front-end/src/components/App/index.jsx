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
  const [allergies, setAllergies] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState(null);
  const [filterByCondition, setFilterByCondition] = useState(false);
  const [filterByIngredients, setFilterByIngredients] = useState(false);
  const [keywords, setKeywords] = useState('');

  const toggleCondition = value => {
    setAllergies(toggleList(allergies, value));
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
            path={paths.allergies}
            exact
            render={props => (
              <Conditions
                {...props}
                allergies={allergies}
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
                allergies={allergies}
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
                allergies={allergies}
                ingredients={ingredients}
                cuisine={cuisine}
                setCuisine={setCuisine}
                recipes={recipes}
                setRecipes={setRecipes}
                keywords={keywords}
                setKeywords={setKeywords}
                filterByCondition={filterByCondition}
                setFilterByCondition={setFilterByCondition}
                filterByIngredients={filterByIngredients}
                setFilterByIngredients={setFilterByIngredients}
              />
            )}
          />
        </Switch>
      </Content>
    </Wrapper>
  );
}
