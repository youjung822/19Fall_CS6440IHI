import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Wrapper, LinkWrapper } from './styles';
import paths from '../../lib/paths';

const routes = [
  { title: 'My Allergies', route: paths.allergies },
  { title: 'My Ingredients', route: paths.ingredients },
  { title: 'Recipe Lookup', route: paths.recipes }
];

export default function SideNav() {
  const location = useLocation();

  return (
    <Wrapper>
      {routes.map(({ title, route }) => (
        <LinkWrapper key={route} selected={location.pathname === route}>
          <Link
            to={route}
            style={{
              textDecoration: 'none',
              color: location.pathname === route ? 'white' : 'black'
            }}
          >
            {title}
          </Link>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
}
