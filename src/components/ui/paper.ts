import styled, { css } from 'styled-components';

interface PaperProps {
  shadow?: boolean;
}
export const Paper = styled.div`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-width: 800px;
  background-color: white;
  ${(props: PaperProps) =>
    props.shadow &&
    css`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `}
`;
