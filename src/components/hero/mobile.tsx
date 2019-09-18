import React from 'react';
import styled from 'styled-components';
import img from '../../images/mebw.jpg';
import { Centered } from '../ui/centered';
import { Accents, Colors } from '../ui/accent';
import { FaMagic } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import { FancyHRGoldLight } from '../ui/fancy';
import { VerticalSpacer, MobileSection } from '../ui/spacers';
import { Link, LinkGold } from '../ui/elements';
import { CardListItem } from './card-list-item';

export const HeroMobile: React.FunctionComponent = () => {
  return (
    <MobileSection>
      <VerticalSpacer lg />
      <Centered horiz>
        <Accents.GoldLight>
          <h3>James DiRosa</h3>
        </Accents.GoldLight>
        Code Magician{' '}
        <FaMagic
          style={{ paddingLeft: 6, fontSize: 30, color: Colors.GoldLight }}
        />
        <VerticalSpacer />
        <div style={{ width: '50%', margin: 'auto' }}>
          <FancyHRGoldLight />
        </div>
        <VerticalSpacer />
        <p>
          The online resume of James DiRosa. An amazing, full stack developer. A
          passionate student, teacher, and lover of the development career path.
          A professional coder and hobbyist hacker.
        </p>
        <LinkGold href="mailto:jdirosa@gmail.com">
          <CardListItem type={'Email'}>JDiRosa@Gmail.com</CardListItem>
        </LinkGold>
        <LinkGold href="https://github.com/jdirosa" target="_blank">
          <CardListItem type={'Git'}>GitHub</CardListItem>
        </LinkGold>
      </Centered>
    </MobileSection>
  );
};
