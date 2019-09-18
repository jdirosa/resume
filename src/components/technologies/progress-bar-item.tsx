import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../../overrides/bootstrap.css';
import styled from 'styled-components';

interface Props {
  percentComplete: number;
  title: string;
  gold?: boolean;
  purple?: boolean;
  Icon: JSX.Element;
}
export const ProgressBarItem: React.FunctionComponent<Props> = ({
  percentComplete,
  title,
  gold,
  purple,
  Icon,
}) => {
  return (
    <Wrapper>
      <div>
        <IconWrapper>{Icon}</IconWrapper>
        {title}
      </div>
      <ProgressBar
        className={gold ? 'gold' : 'purple'}
        animated
        now={percentComplete}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const IconWrapper = styled.span`
  padding-right: 8px;
  font-size: 32px;
  background-color: '#ccc';
`;
