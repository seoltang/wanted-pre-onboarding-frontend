import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN_KEY } from '@constants/config';
import * as S from './style';

function LogoutButton() {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    navigate('/');
  };

  return <S.LogoutBtn onClick={logoutUser}>로그아웃</S.LogoutBtn>;
}

export default LogoutButton;
