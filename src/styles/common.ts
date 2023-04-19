import styled from 'styled-components';
import theme from './theme';

export const flexCustom = (
  flexDirection?: string,
  alignItems?: string,
  justifyContent?: string
) => `
	display: flex;
	flex-direction: ${flexDirection || 'row'};
	align-items: ${alignItems || 'center'};
	justify-content: ${justifyContent || 'center'};
`;

export const RoundedBorderButton = styled.button`
  padding: 8px;
  background-color: ${theme.color.background};
  color: ${theme.color.accent};
  border: 1px solid ${theme.color.accent};
  border-radius: 16px;
  text-align: center;

  &:hover {
    background-color: ${theme.color.darkAccent};
    border-color: ${theme.color.darkAccent};
    color: ${theme.color.background};
  }
`;

export const MiniRoundedButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${theme.color.accent};
  color: ${theme.color.background};
  border-radius: 50%;
  text-align: center;

  &:hover {
    background-color: ${theme.color.darkAccent};
  }
`;

export const MiniRoundedBorderButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${theme.color.background};
  color: ${theme.color.accent};
  border: 1px solid ${theme.color.accent};
  border-radius: 50%;
  text-align: center;

  &:hover {
    background-color: ${theme.color.darkAccent};
    border-color: ${theme.color.darkAccent};
    color: ${theme.color.background};
  }
`;

export const MiniButton = styled.button`
  width: 24px;
  height: 24px;
  color: ${theme.color.accent};
  border-radius: 50%;
  text-align: center;
  font-size: 18px;
  line-height: 0;

  &:hover {
    background-color: transparent;
    color: ${theme.color.darkAccent};
  }
`;
