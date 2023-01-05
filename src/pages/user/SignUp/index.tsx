import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form, { InputValue } from '../Form';
import { PATH, api } from '../../../config';
import useAutoLogin from '../../../hooks/useAutoLogin';

const SignUp = () => {
  useAutoLogin();

  const navigate = useNavigate();

  const createUser = async ({ email, password }: InputValue) => {
    try {
      const response = await axios.post(api.signUp, { email, password });

      if (response.statusText === 'OK') {
        alert('성공적으로 회원가입 되셨습니다. 로그인 화면으로 이동합니다.');
        navigate(PATH.login);
        return;
      }

      alert(response.statusText);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Form submitType="회원가입" postForm={createUser} linkUrl={PATH.login} linkMessage="이미 회원이신가요? 로그인" />
  );
};

export default SignUp;
