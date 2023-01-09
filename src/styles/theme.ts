import styled, { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  backgroundColor: '#fffcf2',
  textColor: '#353b48',
  accentColor: '#64a6bd',
  darkAccentColor: '#335c67',
  color: {
    gray: '#c6c6c6',
  },
};

export default theme;

export const flexCustom = (alignItems?: string, justifyContent?: string, flexDirection?: string) => `
	display: flex;
	flex-direction: ${flexDirection || 'initial'};
	align-items: ${alignItems || 'center'};
	justify-content: ${justifyContent || 'center'};
`;

export const RoundedBorderButton = styled.button`
  padding: 8px;
  background-color: ${theme.backgroundColor};
  color: ${theme.accentColor};
  border: 1px solid ${theme.accentColor};
  border-radius: 16px;
  text-align: center;

  &:hover {
    background-color: ${theme.darkAccentColor};
    border-color: ${theme.darkAccentColor};
    color: ${theme.backgroundColor};
  }
`;

export const MiniRoundedButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${theme.accentColor};
  color: ${theme.backgroundColor};
  border-radius: 50%;
  text-align: center;

  &:hover {
    background-color: ${theme.darkAccentColor};
  }
`;

export const MiniRoundedBorderButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${theme.backgroundColor};
  color: ${theme.accentColor};
  border: 1px solid ${theme.accentColor};
  border-radius: 50%;
  text-align: center;

  &:hover {
    background-color: ${theme.darkAccentColor};
    border-color: ${theme.darkAccentColor};
    color: ${theme.backgroundColor};
  }
`;

export const MiniButton = styled.button`
  width: 24px;
  height: 24px;
  color: ${theme.accentColor};
  border-radius: 50%;
  text-align: center;
  font-size: 18px;
  line-height: 0;

  &:hover {
    background-color: transparent;
    color: ${theme.darkAccentColor};
  }
`;
