import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { FORM_TYPE } from '@constants/authForm';
import { ACCESS_TOKEN_KEY, ROUTE_PATH, API } from '@constants/config';
import AuthForm from '@components/AuthForm';

function Login() {
  const navigate = useNavigate();

  const loginUser = async ({ email, password }: authType.Input) => {
    try {
      const response = await axios.post(
        API.login,
        JSON.stringify({ email, password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data[ACCESS_TOKEN_KEY]);
        navigate(ROUTE_PATH.toDo);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);

        if (error?.response?.status === 401) {
          alert('잘못된 비밀번호입니다. 다시 확인해주세요.');
        } else if (error?.response?.status === 404) {
          alert('존재하지 않는 이메일입니다.');
        } else alert('이메일 또는 비밀번호를 다시 확인해주세요.');
      }
    }
  };

  return (
    <AuthForm
      formType={FORM_TYPE.signin}
      postForm={loginUser}
      linkUrl={ROUTE_PATH.signUp}
      linkMessage="아직 회원이 아니신가요? 회원가입"
    />
  );
}

export default Login;
