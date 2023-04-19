import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN_KEY, ROUTE_PATH } from '@constants/config';

const useTokenCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  });

  const checkToken = () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!token) {
      alert('로그인이 만료되었습니다. 다시 로그인해 주세요.');
      navigate(ROUTE_PATH.login);
    }
  };
};

export default useTokenCheck;
