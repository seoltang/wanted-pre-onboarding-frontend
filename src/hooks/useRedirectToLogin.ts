import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN_KEY, ROUTE_PATH } from '@constants/config';

const useRedirectToLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!token) navigate(ROUTE_PATH.login);
  }, []);
};

export default useRedirectToLogin;
