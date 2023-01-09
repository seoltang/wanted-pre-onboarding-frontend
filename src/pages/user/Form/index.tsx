import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formData from './formData';
import theme, { flexCustom } from '../../../styles/theme';

export type InputValue = { [index: string]: string };

type FormProps = {
  submitType: string;
  postForm: (inputValue: InputValue) => void;
  linkUrl: string;
  linkMessage: string;
};

const Form = ({ submitType, postForm, linkUrl, linkMessage }: FormProps) => {
  const [isValid, setIsValid] = useState<{ [index: string]: boolean }>({
    email: false,
    password: false,
  });

  const [inputValue, setInputValue] = useState<InputValue>({
    email: '',
    password: '',
  });

  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    setIsValid((state) => ({ ...state, email: emailRegex.test(email) }));
    setInputValue((state) => ({ ...state, email }));
  };

  const validatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;

    setIsValid((state) => ({ ...state, password: password.length >= 8 }));
    setInputValue((state) => ({ ...state, password }));
  };

  const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validateType =
      {
        email: validateEmail,
        password: validatePassword,
      }[event.target.name] ??
      (() => {
        throw new Error();
      });

    validateType(event);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postForm(inputValue);
  };

  return (
    <Container>
      <StyledForm onSubmit={onSubmit}>
        <InputWrapper>
          {formData.map(({ type, name }) => (
            <StyledLabel key={type}>
              <LabelName>{name}</LabelName>
              <StyledInput name={type} type={type} onInput={validate} value={inputValue[type]} />
              <ValidationIcon
                className={`fa-regular fa-circle-${isValid[type] ? 'check' : 'xmark'}`}
                isValid={isValid[type]}
                inputValue={inputValue[type]}
              />
            </StyledLabel>
          ))}
        </InputWrapper>
        <SubmitBtn disabled={!Object.values(isValid).every((isValidValue) => isValidValue)}>{submitType}</SubmitBtn>
      </StyledForm>
      <Link to={linkUrl}>
        <NavigateBtn>{linkMessage}</NavigateBtn>
      </Link>
    </Container>
  );
};

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

export default Form;
