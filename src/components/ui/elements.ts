import styled from 'styled-components';
import { Colors } from './accent';
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
