import React from 'react';
import { skills } from './data';
import { ProgressBarItem } from './progress-bar-item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MobileSection, VerticalSpacer } from '../ui/spacers';
import { Accents } from '../ui/accent';
import { FaHeart, FaBook } from 'react-icons/fa';

export const TechnologyMobile: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <MobileSection>
        <Container style={{ textAlign: 'left' }}>
          <h3>Technologies I Love</h3>
          <VerticalSpacer />
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
        </Container>
      </MobileSection>
      <MobileSection>
        <Container>
          <h3>
            <Accents.Purple>
              <FaHeart style={{ fontSize: 52, paddingRight: 20 }} />
            </Accents.Purple>
            Lifelong Passion
          </h3>
          <p>
            With almost a decade of professional experience in full stack, web
            app development, there are few things outside of my comfort zone. I
            absolutely love designing each layer of the stack within a SPA; from
            the first database table to the final cloud deploy.
          </p>
          <VerticalSpacer />
          <h3>
            <Accents.GoldLight>
              <FaBook style={{ fontSize: 42, paddingRight: 20 }} />
            </Accents.GoldLight>
            Code Philosophy
          </h3>
          <p>
            While the listed technologies are my current "go-to" options, I am a
            strong believer in choosing the right tool for the project. If a
            project calls for a tech stack in which I am unfamiliar, having deep
            experience with several languages helps me to quickly grok new
            technologies and languages as needed.
          </p>
        </Container>
      </MobileSection>
    </React.Fragment>
  );
};
