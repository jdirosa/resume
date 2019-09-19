import React from 'react';
import { Centered } from '../ui/centered';
import { VerticalSpacer, Section } from '../ui/spacers';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ProgressBarItem } from './progress-bar-item';
import { FaHeart, FaBook } from 'react-icons/fa';
import { Accents } from '../ui/accent';
import { skills } from './data';
import { FancyHR } from '../ui/fancy';

export const Technology: React.FunctionComponent = () => {
  return (
    <Section>
      <div style={{ backgroundColor: 'rgba(0,0,0,.001)' }}>
        <div style={{ width: 400, margin: 'auto' }}>
          <FancyHR />
        </div>
        <VerticalSpacer custom={100} />
        <Centered vert>
          <Container>
            <Row>
              <Col xs={12}>
                <Centered horiz>
                  <h2>Technologies I Love</h2>
                  <VerticalSpacer lg />
                </Centered>
              </Col>
              <Col>
                <h3>
                  <Accents.Purple>
                    <FaHeart style={{ fontSize: 52, paddingRight: 20 }} />
                  </Accents.Purple>
                  A Lifelong Passion
                </h3>
                <p>
                  With almost a decade of professional experience in full stack,
                  web app development, there are few things outside of my
                  comfort zone. I absolutely love designing each layer of the
                  stack within a SPA; from the first database table to the final
                  cloud deploy.
                </p>
                <VerticalSpacer />
                <h3>
                  <Accents.Gold>
                    <FaBook style={{ fontSize: 42, paddingRight: 20 }} />
                  </Accents.Gold>
                  Code Philosophy
                </h3>
                <p>
                  While the listed technologies are my current "go-to" options,
                  I am a strong believer in choosing the right tool for the
                  project. If a project calls for a tech stack in which I am
                  unfamiliar, having deep experience with several languages
                  helps me to quickly grok new technologies and languages as
                  needed.
                </p>
              </Col>
              <Col>
                {skills
                  .sort((a, b) => b.skill - a.skill)
                  .map((s, i) => (
                    <ProgressBarItem
                      Icon={s.icon}
                      title={s.title}
                      percentComplete={s.skill}
                      key={i}
                      gold={i % 2 === 0}
                    />
                  ))}
              </Col>
            </Row>
          </Container>
        </Centered>
      </div>
    </Section>
  );
};
