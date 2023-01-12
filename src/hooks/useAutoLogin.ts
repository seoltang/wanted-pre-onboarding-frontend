import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN_KEY, PATH } from '../config';

const useAutoLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (token) navigate(PATH.toDo);
  }, [navigate]);
};

export default useAutoLogin;
