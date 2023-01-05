import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form, { InputValue } from '../Form';
import { PATH, api } from '../../../config';
import useAutoLogin from '../../../hooks/useAutoLogin';

const Login = () => {
  useAutoLogin();

  const navigate = useNavigate();

  const loginUser = async ({ email, password }: InputValue) => {
    try {
      const response = await axios.post(api.login, { email, password });

      if (response.statusText === 'OK') {
        localStorage.setItem('token', response.data.token);
        navigate('/');
        return;
      }

      alert(response.statusText);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Form
      submitType="로그인"
      postForm={loginUser}
      linkUrl={PATH.signUp}
      linkMessage="아직 회원이 아니신가요? 회원가입"
    />
  );
};

export default Login;
