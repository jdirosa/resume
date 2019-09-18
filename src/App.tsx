import React from 'react';
import { Hero } from './components/hero';
import { Technology } from './components/technologies';
import { isMobile } from 'react-device-detect';
import { Mobile } from './components/placeholders/mobile-fallback';
import { Timeline } from './components/timeline';
const App: React.FC = () => {
  return (
    <React.Fragment>
      {isMobile ? (
        <Mobile />
      ) : (
        <React.Fragment>
          <Hero />
          <Technology />
          <Timeline />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
