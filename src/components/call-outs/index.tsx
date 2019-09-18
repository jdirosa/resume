import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { PlaceHolderImage } from '../placeholders/images';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

export const CallOuts: React.FunctionComponent = () => {
  return (
    <StyledContainer>
      <Carousel style={{ height: 400 }}>
        <Carousel.Item>
          <Content>
            <img />
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Content>
        </Carousel.Item>
        <Carousel.Item>
          <Content>
            <img />
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Content>
        </Carousel.Item>
        <Carousel.Item>
          <Content>
            <img />
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Content>
        </Carousel.Item>
      </Carousel>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background-color: #333;
`;

const Content = styled(Carousel.Caption)`
  min-height: 300px;
  color: white;
`;
