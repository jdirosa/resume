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

  background: url(${img}) no-repeat;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
