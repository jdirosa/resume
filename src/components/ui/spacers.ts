import styled from 'styled-components';

interface VerticalSpaceProps {
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
  custom?: number;
}
export const VerticalSpacer = styled.div`
  padding-top: ${(props: VerticalSpaceProps) =>
    props.xl
      ? '100px;'
      : props.lg
      ? '60px;'
      : props.md
      ? '30px;'
      : props.sm
      ? '15px;'
      : props.xs
      ? '8px;'
      : props.custom
      ? props.custom.toString() + 'px;'
      : '30px;'};
`;

export const Section = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const MobileSection = styled.div`
  width: 100%;
  min-height: 100vh;
`;
