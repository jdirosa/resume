import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaGithub } from 'react-icons/fa';

interface Props {
  type: 'Email' | 'Phone' | 'Git';
}
export const CardListItem: React.FunctionComponent<Props> = ({
  type,
  children,
}) => {
  return (
    <Item>
      <Icon>
        {type === 'Email' ? (
          <FaEnvelope />
        ) : type === 'Phone' ? (
          <FaPhone />
        ) : (
          <FaGithub />
        )}
      </Icon>
      {children}
    </Item>
  );
};

const Icon = styled.span`
  padding-right: 8px;
  font-size: 22px;
`;
const Item = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;
