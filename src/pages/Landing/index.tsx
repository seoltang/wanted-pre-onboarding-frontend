import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '@constants/config';
import * as S from './style';

function Landing() {
  return (
    <S.Container>
      <S.MainTitle>
        TO DO{' '}
        <S.MagicWandImg
          alt="magic wand"
          src="/favicon/android-chrome-512x512.png"
        />{' '}
        LIST
      </S.MainTitle>
      <S.SubTitle>할 일을 체계적으로 관리해 보세요.</S.SubTitle>
      <S.AuthWrapper>
        <Link to={ROUTE_PATH.login}>
          <S.NavigateBtn>로그인</S.NavigateBtn>
        </Link>
        <S.Divider>/</S.Divider>
        <Link to={ROUTE_PATH.signUp}>
          <S.NavigateBtn>회원가입</S.NavigateBtn>
        </Link>
      </S.AuthWrapper>
    </S.Container>
  );
}

export default Landing;
