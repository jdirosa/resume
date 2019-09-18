import React from 'react';
import styled from 'styled-components';
import { Work } from './data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Colors, Accents } from '../ui/accent';
import Button from 'react-bootstrap/Button';
import { FancyHR, FancyHRGoldLight } from '../ui/fancy';
import { VerticalSpacer } from '../ui/spacers';

interface Props {
  work: Work;
  flipped?: boolean;
  borderBottom?: boolean;
}
export const WorkItem: React.FunctionComponent<Props> = ({
  work,
  flipped,
  borderBottom,
}) => {
  return (
    <React.Fragment>
      <SectionRow>
        <LeftCol md={6}>
          {!flipped ? (
            <React.Fragment>
              <h3>{work.company}</h3>
              <Date>{work.dates}</Date>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p>
                <Title>{work.title}</Title> - {work.description}
              </p>
            </React.Fragment>
          )}
        </LeftCol>
        <RightCol md={6}>
          {!flipped ? (
            <React.Fragment>
              <Title>{work.title}</Title> - {work.description}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h3>{work.company}</h3>
              <Date>{work.dates}</Date>
            </React.Fragment>
          )}
        </RightCol>
      </SectionRow>
      <SectionRow>
        <LeftCol>
          {!flipped ? (
            <h3>Technology Used</h3>
          ) : (
            work.skills.map((s, i) => <Skill key={i}>{s}</Skill>)
          )}
        </LeftCol>
        <RightCol>
          {!flipped ? (
            work.skills.map((s, i) => <Skill key={i}>{s}</Skill>)
          ) : (
            <h3>Technology Used</h3>
          )}
        </RightCol>
      </SectionRow>
      {borderBottom && (
        <React.Fragment>
          <VerticalSpacer lg />
          <div style={{ width: 400, margin: 'auto' }}>
            <FancyHRGoldLight />
          </div>

          <VerticalSpacer xl />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const SectionRow = styled(Row)`
  margin-bottom: 30px;
`;
const LeftCol = styled(Col)`
  text-align: right;
  padding-right: 60px;
`;
const RightCol = styled(Col)`
  text-align: left;
  padding-left: 60px;
`;
const Date = styled.div`
  font-size: 14px;
  margin-top: -10px;
`;
const Skill = styled(Button)`
  margin: 4px;
  border: 1px solid;
  border-color: transparent;
  color: white;
  border-radius: 6px;
  background-color: #d7d7d7a6;
  cursor: default;
  :hover,
  :active,
  :focus {
    margin: 4px;
    border: 1px solid;
    border-color: ${Colors.GoldLight};
    color: ${Colors.GoldLight};
    border-radius: 6px;
    background-color: transparent;
    cursor: default;
  }
`;
const Title = styled(Accents.GoldLight)`
  padding: 2px 8px;
  background: #333;
`;
