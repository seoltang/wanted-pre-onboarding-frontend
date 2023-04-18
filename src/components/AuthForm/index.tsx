import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FORM_INPUTS, FORM_TYPE } from '../../constant/authForm';
import { validateEmail, validatePassword } from '../../utils/authValidate';
import theme, { flexCustom } from '../../styles/theme';

type FormProps = {
  formType: string;
  postForm: (inputValue: authType.Input) => void;
  linkUrl: string;
  linkMessage: string;
};

function AuthForm({ formType, postForm, linkUrl, linkMessage }: FormProps) {
  const [inputValue, setInputValue] = useState<authType.Input>({
    email: '',
    password: '',
  });

  const isValid: { [index: string]: boolean } = {
    email: validateEmail(inputValue.email),
    password: validatePassword(inputValue.password),
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postForm(inputValue);
  };

  return (
    <Container>
      <StyledForm onSubmit={onSubmit}>
        <InputWrapper>
          {FORM_INPUTS.map(({ type, name, testId }) => (
            <StyledLabel key={type}>
              <LabelName>{name}</LabelName>
              <StyledInput
                name={type}
                type={type}
                onInput={handleInput}
                value={inputValue[type]}
                data-testid={testId}
              />
              <ValidationIcon
                className={`fa-regular fa-circle-${
                  isValid[type] ? 'check' : 'xmark'
                }`}
                isValid={isValid[type]}
                inputValue={inputValue[type]}
              />
            </StyledLabel>
          ))}
        </InputWrapper>
        <SubmitBtn
          disabled={Object.values(isValid).some(
            (isValidValue) => !isValidValue
          )}
          data-testid={`${FORM_TYPE[formType]}-button`}
        >
          {{ signin: '로그인', signup: '회원가입' }[formType]}
        </SubmitBtn>
      </StyledForm>
      <Link to={linkUrl}>
        <NavigateBtn>{linkMessage}</NavigateBtn>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  ${flexCustom('center', 'center', 'column')}
  margin-top: 320px;
`;

const StyledForm = styled.form`
  ${flexCustom()}
`;

const InputWrapper = styled.div`
  ${flexCustom('center', 'center', 'column')}
  margin-right: 20px;
`;

const StyledInput = styled.input`
  padding: 0 16px;
  width: 360px;
  height: 36px;
  border: 0;
  border-radius: 16px;
  box-shadow: inset 1px 2px 4px 1px rgb(0 0 0 / 0.1);
  font-size: 16px;
`;

const StyledLabel = styled.label`
  ${flexCustom()}
  margin: 8px 0;
`;

const LabelName = styled.div`
  width: 60px;
  margin-right: 16px;
`;

const ValidationIcon = styled.i<{ inputValue: string; isValid: boolean }>`
  margin-left: 8px;
  visibility: ${({ inputValue }) => (inputValue ? 'visible' : 'hidden')};
  color: ${({ isValid }) => (isValid ? 'green' : 'red')};
`;

const SubmitBtn = styled.button`
  width: 72px;
  height: 72px;
  background-color: ${theme.accentColor};
  color: ${theme.backgroundColor};
  border-radius: 50%;
  text-align: center;

  &:disabled {
    background-color: ${theme.color.gray};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${theme.darkAccentColor};

    &:disabled {
      background-color: ${theme.color.gray};
    }
  }
`;

const NavigateBtn = styled.div`
  margin-top: 32px;
  color: ${theme.accentColor};
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export default AuthForm;
