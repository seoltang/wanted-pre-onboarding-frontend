import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAutoLogin from '../../hooks/useAutoLogin';
import { PATH } from '../../config';
import theme, { flexCustom } from '../../styles/theme';

const Landing = () => {
  useAutoLogin();

  return (
    <Container>
      <MainTitle>
        TO DO <MagicWandImg alt="magic wand" src="/favicon/android-chrome-512x512.png" /> LIST
      </MainTitle>
      <SubTitle>할 일을 체계적으로 관리해 보세요.</SubTitle>
      <AuthWrapper>
        <Link to={PATH.login}>
          <NavigateBtn>로그인</NavigateBtn>
        </Link>
        <Divider>/</Divider>
        <Link to={PATH.signUp}>
          <NavigateBtn>회원가입</NavigateBtn>
        </Link>
      </AuthWrapper>
    </Container>
  );
};

const Container = styled.div`
  ${flexCustom('center', 'center', 'column')}
`;

const MainTitle = styled.h1`
  padding-top: 300px;
  font-size: 72px;
  font-weight: 900;
`;

const MagicWandImg = styled.img`
  width: 72px;
  vertical-align: bottom;
`;

const SubTitle = styled.h2`
  padding: 48px 0 80px;
  font-size: 20px;
`;

const AuthWrapper = styled.div`
  ${flexCustom()}
`;

const NavigateBtn = styled.div`
  color: ${theme.accentColor};
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.span`
  padding: 0 8px;
  color: ${theme.color.gray};
  font-size: 14px;
`;

export default Landing;
