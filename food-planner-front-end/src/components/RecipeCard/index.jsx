import React from 'react';
import Button from '@material-ui/core/Button';

import { Wrapper, Title, ReadyIn, ImageWrapper } from './styles';

export default function RecipeCard({ recipe, onViewNutrition }) {
  const { title, readyInMinutes, sourceUrl, image, id } = recipe;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ReadyIn>Ready In: {readyInMinutes} min.</ReadyIn>
      <ImageWrapper>
        <img alt={title} src={image}></img>
      </ImageWrapper>
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
      <br />
      <Button
        style={{ paddingTop: '8px' }}
        variant="contained"
        onClick={() => onViewNutrition(id)}
      >
        View Nutrition
      </Button>
    </Wrapper>
  );
}
