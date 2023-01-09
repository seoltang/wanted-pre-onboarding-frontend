import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../config';

const useAutoLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) navigate(PATH.toDo);
  }, [navigate]);
};

export default useAutoLogin;
