import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import AuthForm from '../../../components/AuthForm';
import { PATH, api } from '../../../config';
import { FORM_TYPE } from '../../../constant/authForm';

function SignUp() {
  const navigate = useNavigate();

  const createUser = async ({ email, password }: authType.Input) => {
    try {
      const response = await axios.post(
        api.signUp,
        JSON.stringify({ email, password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        alert('회원가입이 완료되었습니다. 로그인 화면으로 이동합니다.');
        navigate(PATH.login);
      }
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) alert(error?.response?.data.message);
      else alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <AuthForm
      formType={FORM_TYPE.signup}
      postForm={createUser}
      linkUrl={PATH.login}
      linkMessage="이미 회원이신가요? 로그인"
    />
  );
}

export default SignUp;
