import styled from 'styled-components';
export const Colors = {
  PurpleDark: '#6842ff', //#6842ff
  Purple: '#9f80f1',
  Gold: '#efb92d',
  GoldLight: '#ffe8a4',
};
export const Accents = {
  Purple: styled.span`
    color: ${Colors.Purple};
  `,
  Gold: styled.span`
    color: ${Colors.Gold};
  `,
  GoldLight: styled.span`
    color: ${Colors.GoldLight};
  `,
};
