import React from 'react';
import { Link } from 'react-router-dom';
import useAutoLogin from '../../hooks/useAutoLogin';
import { PATH } from '../../config';

const Landing = () => {
	useAutoLogin();

	return (
		<div>
			로그인하고 할 일을 체계적으로 관리해 보세요.
			<div>
				<Link to={PATH.login}>로그인</Link>/<Link to={PATH.signUp}>회원가입</Link>
			</div>
		</div>
	);
};

export default Landing;
