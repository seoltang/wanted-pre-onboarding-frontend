import styled from 'styled-components';
import { flexCustom } from '@styles/common';

export const Container = styled.div`
  ${flexCustom('column')}
  height: 100vh;
`;

export const StyledForm = styled.form`
  ${flexCustom()}
`;

export const InputWrapper = styled.div`
  ${flexCustom('column')}
  margin-right: 20px;
`;

export const StyledInput = styled.input`
  padding: 0 16px;
  width: 360px;
  height: 36px;
  border: 0;
  border-radius: 16px;
  box-shadow: inset 1px 2px 4px 1px rgb(0 0 0 / 0.1);
  font-size: 16px;
`;

export const StyledLabel = styled.label`
  ${flexCustom()}
  margin: 8px 0;
`;

export const LabelName = styled.div`
  width: 60px;
  margin-right: 16px;
`;

export const ValidationIcon = styled.i<{
  inputValue: string;
  isValid: boolean;
}>`
  margin-left: 8px;
  visibility: ${({ inputValue }) => (inputValue ? 'visible' : 'hidden')};
  color: ${({ isValid }) => (isValid ? 'green' : 'red')};
`;

export const SubmitBtn = styled.button`
  width: 72px;
  height: 72px;
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.background};
  border-radius: 50%;
  text-align: center;

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.darkAccent};

    &:disabled {
      background-color: ${({ theme }) => theme.color.gray};
    }
  }
`;

export const NavigateButton = styled.div`
  margin-top: 32px;
  color: ${({ theme }) => theme.color.accent};
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const HomeButton = styled(NavigateButton)`
  margin-top: 24px;
  color: ${({ theme }) => theme.color.gray};
`;
