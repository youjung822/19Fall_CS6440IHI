import React from 'react';
import Button from '@material-ui/core/Button';

import { Header } from '../';
import { Wrapper, Row } from './styles';

const dummyRecipes = [
  {
    title: 'Chicken parm',
    cookTime: '1 hr',
    matchingIngredients: 1,
    urlLink: 'https://www.allrecipes.com/recipe/223042/chicken-parmesan/'
  },
  {
    title: 'Meatloaf',
    cookTime: '1 h 10 m',
    matchingIngredients: 2,
    urlLink: 'https://www.allrecipes.com/recipe/16354/easy-meatloaf/'
  },
  {
    title: 'Veggie soup',
    cookTime: '1 hour 20 min',
    matchingIngredients: 3,
    urlLink: 'https://www.tasteofhome.com/recipes/hearty-vegetable-soup/'
  },
  {
    title: 'Stroganoff',
    cookTime: '45 min',
    matchingIngredients: 0,
    urlLink:
      'https://www.foodnetwork.com/recipes/paula-deen/beef-stroganoff-recipe-1940482'
  }
];

export default function Recipes() {
  return (
    <Wrapper>
      <Header>Recipe Lookup</Header>
      {dummyRecipes.map(({ title, cookTime, matchingIngredients, urlLink }) => (
        <Row>
          <div>{title}</div>
          <div>{cookTime}</div>
          <div>{matchingIngredients}</div>
          <Button variant="contained" color="primary">
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href={urlLink}
              target="_blank"
            >
              View Recipe
            </a>
          </Button>
        </Row>
      ))}
    </Wrapper>
  );
}
