import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FORM_INPUTS, FORM_TYPE } from '@constants/authForm';
import useRedirectToTodo from '@hooks/useRedirectToTodo';
import { validateEmail, validatePassword } from '@utils/authValidate';
import * as S from './style';

type FormProps = {
  formType: string;
  postForm: (inputValue: authType.Input) => void;
  linkUrl: string;
  linkMessage: string;
};

function AuthForm({ formType, postForm, linkUrl, linkMessage }: FormProps) {
  useRedirectToTodo();

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
    <S.Container>
      <S.StyledForm onSubmit={onSubmit}>
        <S.InputWrapper>
          {FORM_INPUTS.map(({ type, name, testId }) => (
            <S.StyledLabel key={type}>
              <S.LabelName>{name}</S.LabelName>
              <S.StyledInput
                name={type}
                type={type}
                onInput={handleInput}
                value={inputValue[type]}
                data-testid={testId}
              />
              <S.ValidationIcon
                className={`fa-regular fa-circle-${
                  isValid[type] ? 'check' : 'xmark'
                }`}
                isValid={isValid[type]}
                inputValue={inputValue[type]}
              />
            </S.StyledLabel>
          ))}
        </S.InputWrapper>

        <S.SubmitBtn
          disabled={Object.values(isValid).some(
            (isValidValue) => !isValidValue
          )}
          data-testid={`${FORM_TYPE[formType]}-button`}
        >
          {{ signin: '로그인', signup: '회원가입' }[formType]}
        </S.SubmitBtn>
      </S.StyledForm>

      <Link to={linkUrl}>
        <S.NavigateButton>{linkMessage}</S.NavigateButton>
      </Link>

      <Link to="/">
        <S.HomeButton>처음으로</S.HomeButton>
      </Link>
    </S.Container>
  );
}

export default AuthForm;
