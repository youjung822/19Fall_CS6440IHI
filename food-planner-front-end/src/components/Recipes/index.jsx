import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  MatchingIngredients,
  LoadingHolder
} from './styles';
import { lookupRecipes } from '../../lib/recipes';

const cuisines = [
  'African',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese'
].map(suggestion => ({
  value: suggestion,
  label: suggestion
}));

export default function Recipes({ conditions, ingredients }) {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState(null);
  const [filterByCondition, setFilterByCondition] = useState(false);
  const [filterByIngredients, setFilterByIngredients] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState('');

  const onSearch = async () => {
    setIsLoading(true);

    const results = await lookupRecipes(
      keywords,
      cuisine,
      filterByCondition ? conditions : null,
      filterByIngredients ? ingredients : null
    );

    setIsLoading(false);
    setRecipes(results);
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
        {/* <MatchingIngredients>Matching Ingredients</MatchingIngredients> */}
        <div style={{ width: '120px' }}></div>
      </Row>
      {!isLoading &&
        recipes.map(({ title, readyInMinutes, sourceUrl }) => (
          <Row key={title}>
            <Title>{title}</Title>
            <CookTime>{readyInMinutes} min</CookTime>
            {/* <MatchingIngredients>0</MatchingIngredients> */}
            <Button variant="contained" color="primary">
              <a
                style={{ color: 'white', textDecoration: 'none' }}
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recipe
              </a>
            </Button>
          </Row>
        ))}
      {isLoading && (
        <LoadingHolder>
          <CircularProgress size={64} />
        </LoadingHolder>
      )}
    </Wrapper>
  );
}
