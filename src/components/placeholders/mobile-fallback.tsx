import React from 'react';
import { Centered } from '../ui/centered';

export const Mobile: React.FunctionComponent = () => (
  <div style={{ width: '100%', padding: 20, paddingTop: 30 }}>
    <Centered horiz>
      <h3>Sorry!</h3>
      <p>This page is not yet web responsive, but I'm working on it. </p>
    </Centered>
  </div>
);
