import styled, { css } from 'styled-components';
import React from 'react';

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  text-align: ${props => (props.horiz ? 'center' : 'left')};
  ${(props: { vert?: boolean; horiz?: boolean }) =>
    props.vert &&
    css`
      display: flex;
    `}
`;
const Inner = styled.div`
  margin: auto;
`;
export const Centered: React.FunctionComponent<{
  vert?: boolean;
  horiz?: boolean;
}> = props => {
  return (
    <Wrap vert={props.vert} horiz={props.horiz}>
      <Inner>{props.children}</Inner>
    </Wrap>
  );
};
