import React from 'react';
import { HeroMobile } from './components/hero/mobile';
import { TechnologyMobile } from './components/technologies/mobile';
import styled from 'styled-components';
import img from './images/mebw.jpg';
import Container from 'react-bootstrap/Container';
export const AppMobile: React.FunctionComponent = () => <Mobile />;

const Mobile: React.FunctionComponent = () => (
  <MobileWrapper>
    <HeroMobile />
    <TechnologyMobile />
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
