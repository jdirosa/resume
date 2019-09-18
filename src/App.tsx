import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FirstFrame } from './components/hero';
import { SecondFrame } from './components/technologies';
import { isMobile } from 'react-device-detect';
import { Mobile } from './components/placeholders/mobile-fallback';
const App: React.FC = () => {
  return (
    <React.Fragment>
      {isMobile ? (
        <Mobile />
      ) : (
        <React.Fragment>
          <FirstFrame />
          <SecondFrame />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
