import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { Header, Select } from '../';
import {
  Wrapper,
  Row,
  FilterRow,
  FilterItem,
  SearchRow,
  SearchButton,
  ResultHeading,
  CookTime,
  Title,
  MatchingIngredients
} from './styles';

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

const cuisines = [
  { label: 'Italian' },
  { label: 'Greek' },
  { label: 'French' },
  { label: 'American' },
  { label: 'German' },
  { label: 'Chinese' },
  { label: 'Japanese' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState(null);
  const [filterByCondition, setFilterByCondition] = useState(false);
  const [filterByIngredients, setFilterByIngredients] = useState(false);
  const [keywords, setKeywords] = useState('');

  const onSearch = () => {
    setRecipes(dummyRecipes);
  };

  return (
    <Wrapper>
      <Header>Recipe Lookup</Header>
      <FilterRow>
        <FilterItem>
          <Select
            label="Cuisine"
            suggestions={cuisines}
            onChange={setCuisine}
            value={{ value: cuisine, label: cuisine }}
          />
        </FilterItem>
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
        <FilterItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={filterByIngredients}
                onChange={() => setFilterByIngredients(!filterByIngredients)}
                color="primary"
                inputProps={{
                  'aria-label': 'ingredient checkbox'
                }}
              />
            }
            label="Filter by my ingredients"
          />
        </FilterItem>
      </FilterRow>
      <SearchRow>
        <TextField
          id="standard-name"
          label="Recipe Keywords"
          fullWidth
          value={keywords}
          onChange={e => setKeywords(e.target.value)}
          margin="normal"
        />
        <SearchButton>
          <Button
            variant="contained"
            color="primary"
            onClick={onSearch}
            disabled={!cuisine || !keywords}
          >
            Search
          </Button>
        </SearchButton>
      </SearchRow>
      <ResultHeading>Results</ResultHeading>
      <Row noTopBorder>
        <Title>Title</Title>
        <CookTime>Cook Time</CookTime>
        <MatchingIngredients>Matching Ingredients</MatchingIngredients>
        <div style={{ width: '120px' }}></div>
      </Row>
      {recipes.map(({ title, cookTime, matchingIngredients, urlLink }) => (
        <Row key={title}>
          <Title>{title}</Title>
          <CookTime>{cookTime}</CookTime>
          <MatchingIngredients>{matchingIngredients}</MatchingIngredients>
          <Button variant="contained" color="primary">
            <a
              style={{ color: 'white', textDecoration: 'none' }}
              href={urlLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Recipe
            </a>
          </Button>
        </Row>
      ))}
    </Wrapper>
  );
}
