import React from 'react';
import { HeroMobile } from './components/hero/mobile';
import { TechnologyMobile } from './components/technologies/mobile';
import styled from 'styled-components';
import img from './images/mebw.jpg';
import Container from 'react-bootstrap/Container';
import { VerticalSpacer } from './components/ui/spacers';
import { Centered } from './components/ui/centered';
import { Accents } from './components/ui/accent';
export const AppMobile: React.FunctionComponent = () => <Mobile />;

const Mobile: React.FunctionComponent = () => (
  <MobileWrapper>
    <Centered horiz>
      <HeroMobile />
      <TechnologyMobile />
      <VerticalSpacer xl />
      <Accents.GoldLight>
        <h3>There's More!</h3>
      </Accents.GoldLight>
      I'm appreciative that you've stumbled onto my mobile site, however there
      is more information available on the desktop version. Please do return
      once you are at desktop for the full site.
      <VerticalSpacer xl />
    </Centered>
  </MobileWrapper>
);

const MobileWrapper = styled(Container)`
  color: white;
  height: 100vh;
  :before {
    content: '';
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    background: url(${img}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;
