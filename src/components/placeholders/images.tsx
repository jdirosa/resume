import styled from 'styled-components';
import React from 'react';
import { Centered } from '../ui/centered';

interface ImageProps {
  width: number;
  height: number;
}

export const PlaceHolderImage: React.FunctionComponent<ImageProps> = props => {
  return (
    <Image {...props}>
      <Centered vert>{props.children}</Centered>
    </Image>
  );
};
const Image = styled.div`
  width: ${(props: ImageProps) => props.width.toString() + 'px'};
  height: ${(props: ImageProps) => props.width.toString() + 'px'};
  background-color: rgba(0, 0, 0, 0.5);
  color: #ccc;
  padding: auto;
  border-radius: 5px;
`;
