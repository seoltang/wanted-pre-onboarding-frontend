import styled from 'styled-components';
import { flexCustom } from '@styles/common';

export const Container = styled.div`
  ${flexCustom('column')}
  height: 100vh;
`;

export const MainTitle = styled.h1`
  font-size: 72px;
  font-weight: 900;
`;

export const MagicWandImg = styled.img`
  width: 72px;
  vertical-align: bottom;
`;

export const SubTitle = styled.h2`
  padding: 48px 0 80px;
  font-size: 20px;
`;

export const AuthWrapper = styled.div`
  ${flexCustom()}
`;

export const NavigateButton = styled.div`
  color: ${({ theme }) => theme.color.accent};
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.span`
  padding: 0 8px;
  color: ${({ theme }) => theme.color.gray};
  font-size: 14px;
`;
