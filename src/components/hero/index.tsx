import React from 'react';
import { BusinessCard } from './business-card';
import { FancyBackground } from '../ui/fancy';
import { Centered } from '../ui/centered';

export const FirstFrame: React.FunctionComponent = () => {
  return (
    <div style={{ width: '100%' }}>
      <FancyBackground>
        <Centered vert>
          <div style={{ marginBottom: '-200px', position: 'relative' }}>
            <BusinessCard />
          </div>
        </Centered>
      </FancyBackground>
    </div>
  );
};
