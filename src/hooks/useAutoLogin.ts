import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAutoLogin = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) navigate('/todolist');
	}, [navigate]);
};

export default useAutoLogin;
