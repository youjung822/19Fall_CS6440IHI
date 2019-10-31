import React from 'react';
import Button from '@material-ui/core/Button';

import { Wrapper, Title, ReadyIn, ImageWrapper } from './styles';

export default function RecipeCard({ recipe }) {
  const { title, readyInMinutes, sourceUrl, image } = recipe;
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
    </Wrapper>
  );
}
