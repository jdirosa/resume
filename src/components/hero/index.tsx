import React from 'react';
import { BusinessCard } from './business-card';
import { FancyBG } from '../ui/fancy';
import { Centered } from '../ui/centered';
import { VerticalSpacer } from '../ui/spacers';

export const Hero: React.FunctionComponent = () => {
  return (
    <div style={{ width: '100%' }}>
      <FancyBG>
        <Centered vert>
          <div style={{ marginBottom: '-200px', position: 'relative' }}>
            <BusinessCard />
          </div>
        </Centered>
      </FancyBG>
      <VerticalSpacer xl />
    </div>
  );
};
