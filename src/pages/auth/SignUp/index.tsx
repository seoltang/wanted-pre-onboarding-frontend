import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { FORM_TYPE } from '@constants/authForm';
import { ROUTE_PATH, API } from '@constants/config';
import AuthForm from '@components/AuthForm';

function SignUp() {
  const navigate = useNavigate();

  const createUser = async ({ email, password }: authType.Input) => {
    try {
      const response = await axios.post(
        API.signUp,
        JSON.stringify({ email, password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        alert('회원가입이 완료되었습니다. 로그인 화면으로 이동합니다.');
        navigate(ROUTE_PATH.login);
        return;
      }

      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) {
        alert(error?.response?.data.message);
      } else alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <AuthForm
      formType={FORM_TYPE.signup}
      postForm={createUser}
      linkUrl={ROUTE_PATH.login}
      linkMessage="이미 회원이신가요? 로그인"
    />
  );
}

export default SignUp;
