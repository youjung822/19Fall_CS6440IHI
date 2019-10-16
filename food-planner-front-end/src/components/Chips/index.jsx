import React from 'react';
import Chip from '@material-ui/core/Chip';

import { ChipBox, ChipHolder } from './styles';

export default function Conditions({ values, onDelete }) {
  return (
    <ChipBox>
      {values.map(val => (
        <ChipHolder key={val}>
          <Chip label={val} onDelete={() => onDelete(val)} />
        </ChipHolder>
      ))}
    </ChipBox>
  );
}
