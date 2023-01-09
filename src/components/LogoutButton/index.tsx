import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RoundedBorderButton } from '../../styles/theme';

const LogoutButton = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return <LogoutBtn onClick={logoutUser}>로그아웃</LogoutBtn>;
};

const LogoutBtn = styled(RoundedBorderButton)`
  font-size: 14px;
`;

export default LogoutButton;
