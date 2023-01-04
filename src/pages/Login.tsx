import React from 'react';
import styled from 'styled-components';

function Login() {
	return (
		<div>
			Login
			<StyledLabel>
				이메일
				<StyledInput />
			</StyledLabel>
		</div>
	);
}

const StyledInput = styled.input``;

const StyledLabel = styled.label``;

export default Login;
