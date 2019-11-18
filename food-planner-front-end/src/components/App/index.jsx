import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { Wrapper, NavWrapper, Content, NavBar, Welcome } from './styles';

import {
  Login,
  SideNav,
  Conditions,
  Ingredients,
  Recipes,
  NutritionModal,
  CreateAccount
} from '../';

import paths from '../../lib/paths';
import { getCookie } from '../../lib/cookies';
import { getNutrition } from '../../lib/nutrition';
import { removeCookie } from '../../lib/cookies';

const toggleList = (list, val) => {
  const copy = [...list];

  if (!list.includes(val)) copy.push(val);
  else copy.splice(copy.indexOf(val), 1);

  return copy;
};

export default function App() {
  const [username, setUsername] = useState(getCookie('username'));
  const [allergies, setAllergies] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState(null);
  const [filterByCondition, setFilterByCondition] = useState(false);
  const [filterByIngredients, setFilterByIngredients] = useState(false);
  const [keywords, setKeywords] = useState('');
  const [nutritionInfo, setNutritionInfo] = useState(null);

  const toggleCondition = value => {
    setAllergies(toggleList(allergies, value));
  };
  const toggleIngredient = value => {
    setIngredients(toggleList(ingredients, value));
  };
  const onViewNutrition = async id => {
    const nutrition = await getNutrition(id);
    setNutritionInfo(nutrition);
  };
  const onLoginClick = async id => {
    if (username) {
      setUsername(null);
      removeCookie('username');
      setAllergies([]);
      setIngredients([]);
      setRecipes([]);
      setCuisine(null);
      setFilterByCondition(false);
      setFilterByIngredients(false);
      setKeywords('');
    }
  };

  return (
    <Wrapper>
      {nutritionInfo && (
        <NutritionModal
          open={Boolean(nutritionInfo)}
          nutritionInfo={nutritionInfo}
          onClose={() => setNutritionInfo(null)}
        />
      )}
      <NavBar>
        <Welcome>{username ? `Welcome, ${username}!` : ''}</Welcome>
        <Link
          to={paths.login}
          onClick={onLoginClick}
          style={{
            textDecoration: 'none',
            color: 'white',
            paddingRight: '24px'
          }}
        >
          {username ? 'Logout' : 'Login'}
        </Link>
      </NavBar>
      <NavWrapper>
        <SideNav />
      </NavWrapper>
      <Content>
        <Switch>
          <Route
            path={paths.login}
            exact
            render={props => (
              <Login
                {...props}
                setLoggedInUser={setUsername}
                setAllergies={setAllergies}
              />
            )}
          />
          <Route
            path={paths.createAccount}
            exact
            render={props => (
              <CreateAccount {...props} setLoggedInUser={setUsername} />
            )}
          />
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
                onViewNutrition={onViewNutrition}
              />
            )}
          />
        </Switch>
      </Content>
    </Wrapper>
  );
}
