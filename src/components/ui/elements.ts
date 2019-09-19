import styled, { css } from 'styled-components';
import { Colors } from './accent';
import BootButton from 'react-bootstrap/Button';

export const Link = styled.a`
  text-decoration: none;
  color: rgb(159, 128, 241);
  :hover {
    color: rgb(239, 185, 45);
    text-decoration: none;
    transition: all 0.5s;
  }
`;

export const LinkGold = styled(Link)`
  color: ${Colors.GoldLight};
  :hover {
    color: ${Colors.GoldLight};
  }
`;

export const LinkDark = styled(Link)`
  color: ${Colors.PurpleDark};
`;
export const Button = styled(BootButton)`
  background-color: ${props =>
    props.primary ? Colors.PurpleDark : Colors.Gold};
  transition: 0.25s ease-in-out all;
  color: white;
  border: none;
  border-radius: 5px;
  outline: 0;
  font-size: 20px;
  :hover {
    background-color: ${Colors.Purple};
  }
  ${(props: any) =>
    props.outlined &&
    css`
      background-color: transparent;
      border: 1px solid ${props.primary ? Colors.PurpleDark : Colors.Gold};
      color: ${props.primary ? Colors.PurpleDark : Colors.Gold};
      :hover {
        border-color: ${props.primary ? Colors.Purple : Colors.Gold};
      }
    `}
`;
