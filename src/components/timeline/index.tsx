import React from 'react';
import { Centered } from '../ui/centered';
import { VerticalSpacer, Section } from '../ui/spacers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Colors } from '../ui/accent';
import { Works } from './data';
import { WorkItem } from './work-item';

export const Timeline: React.FunctionComponent = () => {
  return (
    <div
      style={{
        backgroundColor: Colors.PurpleDark,
        minHeight: 400,
        color: 'white',
      }}
    >
      <Section>
        <Centered horiz>
          <h2>A Recent Chronology</h2>
          <VerticalSpacer lg />
          <Container>
            {Works.map((w, i) => (
              <WorkItem
                key={i}
                work={w}
                borderBottom={i !== Works.length - 1}
              />
            ))}
          </Container>
        </Centered>
      </Section>
    </div>
  );
};
