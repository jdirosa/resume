import React from 'react';
import { Hero } from './components/hero';
import { Technology } from './components/technologies';
import { isMobile } from 'react-device-detect';
import { Timeline } from './components/timeline';
import { AppMobile } from './app-mobile';
import { GiveBack } from './components/giving-back';
import { ContactMe } from './components/modal/contact-me';
const App: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleShowModal = (show: boolean) => () => setShowModal(show);
  return (
    <React.Fragment>
      {isMobile ? (
        <AppMobile />
      ) : (
        <React.Fragment>
          <Hero />
          <Technology />
          <Timeline />
          <GiveBack onContact={handleShowModal(true)} />
        </React.Fragment>
      )}
      <ContactMe onHide={handleShowModal(false)} isOpen={showModal} />
    </React.Fragment>
  );
};

export default App;
