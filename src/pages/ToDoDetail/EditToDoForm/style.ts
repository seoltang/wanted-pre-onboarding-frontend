import styled, { css } from 'styled-components';
import {
  MiniRoundedButton,
  MiniRoundedBorderButton,
  flexCustom,
} from '@styles/common';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 720px;
  height: 480px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 16px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  z-index: 100;
`;

export const CloseModalBtn = styled(MiniRoundedBorderButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  font-size: 16px;
  border: none;
`;

export const Form = styled.form`
  ${flexCustom('column', 'stretch', 'flex-start')}
  padding: 48px;
`;

export const InputStyle = css`
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 4px;
`;

export const TitleInput = styled.input`
  margin-bottom: 12px;
  height: 32px;
  ${InputStyle}
`;

export const ContentTextarea = styled.textarea`
  height: 296px;
  ${InputStyle}
  resize: none;
`;

export const SubmitToDoBtn = styled(MiniRoundedButton)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  width: 48px;
  height: 48px;
  transform: translateX(-50%);
  font-size: 24px;
`;
