import React from 'react';
import { Section, VerticalSpacer } from '../ui/spacers';
import { FaPaw } from 'react-icons/fa';
import { Centered } from '../ui/centered';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Colors } from '../ui/accent';

export const GiveBack: React.FunctionComponent = () => {
  return (
    <Section>
      <Centered horiz>
        <h2>Giving Back</h2>
        <VerticalSpacer lg />
      </Centered>
      <Container>
        <Row>
          <Col md={4}>
            <Centered horiz vert>
              <FaPaw style={{ fontSize: 120, color: Colors.PurpleDark }} />
            </Centered>
          </Col>
          <Col md={8}>
            I've established a goal this year to set out and help not for profit
            animal organizations. If you know a service that could benefit from
            some pro bono web development, please send them my way. I of course
            have to balance a schedule, but am more than happy to lend my
            services to organizations in need.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
