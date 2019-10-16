import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Wrapper, LinkWrapper } from './styles';
import paths from '../../lib/paths';

const LINK_STYLE = { textDecoration: 'none', color: 'black' };

const routes = [
  { title: 'My Conditions', route: paths.conditions },
  { title: 'My Ingredients', route: paths.ingredients },
  { title: 'Recipe Lookup', route: paths.recipes }
];

export default function SideNav() {
  const location = useLocation();

  return (
    <Wrapper>
      {routes.map(({ title, route }) => (
        <LinkWrapper key={route} selected={location.pathname === route}>
          <Link to={route} style={LINK_STYLE}>
            {title}
          </Link>
        </LinkWrapper>
      ))}
    </Wrapper>
  );
}
