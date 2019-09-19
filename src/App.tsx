import React from 'react';
import { Hero } from './components/hero';
import { Technology } from './components/technologies';
import { isMobile } from 'react-device-detect';
import { Timeline } from './components/timeline';
import { AppMobile } from './app-mobile';
import { GiveBack } from './components/giving-back';
const App: React.FC = () => {
  return (
    <React.Fragment>
      {isMobile ? (
        <AppMobile />
      ) : (
        <React.Fragment>
          <Hero />
          <Technology />
          <Timeline />
          <GiveBack />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
